import Button from "@/components/UI/button";
import IconButton from "@/components/UI/icon-button";
import Input from "@/components/UI/input";
import Select from "@/components/UI/select";
import TopBar from "@/components/UI/top-bar";
import {
  completeSignUpDefaultValues,
  completeSignUpValidationSchema
} from "@/constants/auth";
import { globalStyles } from "@/constants/styles";
import { BackendError, ValidationErrorResponseItem } from "@/models/error";
import { UserComplete, UserSignUp, UserSignUpRequestBody } from "@/models/user";
import { useSignUp } from "@/services/auth";
import { logIn } from "@/store/user/user-slice";
import { saveToken } from "@/utils/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const countries = [
  {
    label: "Azerbaijan",
    value: "az"
  },
  {
    label: "Russia",
    value: "ru"
  },
  {
    label: "Turkey",
    value: "tr"
  },
  {
    label: "Georgia",
    value: "ge"
  },
  {
    label: "Armenia",
    value: "ar"
  }
];

export default function CompleteProfile() {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const signUpFormData = useLocalSearchParams() as unknown as UserSignUp;
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate, isPending } = useSignUp();

  const { control, handleSubmit, setError } = useForm<UserComplete>({
    defaultValues: completeSignUpDefaultValues,
    resolver: yupResolver(completeSignUpValidationSchema)
  });

  const setValidationErrors = (
    errors: ValidationErrorResponseItem<UserComplete>[]
  ) => {
    errors.forEach((err) => setError(err.path, { message: err.message }));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const handleFormSubmit = (completeFormData: UserComplete) => {
    const form: UserSignUpRequestBody = {
      ...signUpFormData,
      ...completeFormData
    };

    if (image) {
      form.image = {
        uri: image.uri,
        name: image.fileName!,
        type: image.mimeType!
      };
    }

    const formData = new FormData();

    for (const [key, value] of Object.entries(form)) {
      formData.set(key, value);
    }

    mutate(formData, {
      onSuccess: async (res) => {
        const { token, user } = res.data;
        await saveToken(token);
        dispatch(logIn({ token, user }));
        router.replace("/main/home");
      },
      onError: (error: Error) => {
        const err = error as AxiosError<BackendError>;

        if (err.response?.data.errors?.length) {
          setValidationErrors(err.response.data.errors);
        }
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar
        text=""
        leftIcon="arrow-back"
        onLeftIconPress={() => router.back()}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 64}
      >
        <ScrollView
          contentContainerStyle={styles.screen}
          keyboardShouldPersistTaps="handled"
          alwaysBounceVertical={false}
        >
          <View style={styles.screenTop}>
            <Text style={styles.screenTitle}>Complete Your Profile</Text>

            <Text style={styles.screenText}>
              Don’t worry, only you can see your personal data. No one else will
              be able to see it.
            </Text>

            <View style={styles.profileImageContainer}>
              <Image
                source={
                  image
                    ? { uri: image.uri }
                    : require("@/assets/images/profile-img.jpg")
                }
                style={styles.profileImage}
              />

              <IconButton
                buttonStyles={styles.profileImageIcon}
                icon="camera"
                iconColor="black"
                iconSize={16}
                onPress={pickImage}
              />
            </View>
          </View>

          <Input
            label="Fullname"
            placeholder="Fullname"
            type="name"
            icon="person-outline"
            name="fullName"
            control={control}
            containerStyles={styles.inputStyles}
          />

          <Input
            label="Phone number"
            placeholder="+994505050505"
            type="telephoneNumber"
            icon="phone-portrait-outline"
            name="phoneNumber"
            control={control}
            containerStyles={styles.inputStyles}
          />

          <Select
            label="Country"
            placeholder="Country"
            icon="earth-outline"
            data={countries}
            name="country"
            control={control}
            containerStyles={styles.inputStyles}
          />

          <Button
            isPending={isPending}
            style={{ height: 46, marginBottom: 40 }}
            onPress={handleSubmit(handleFormSubmit)}
          >
            Complete Profile
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 25,
    paddingTop: 64
  },
  screenTop: {
    alignItems: "center"
  },
  screenTitle: {
    color: "#000929",
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 8
  },
  inputStyles: {
    marginBottom: 20
  },
  screenText: {
    color: "#616161",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 30
  },
  profileImageContainer: {
    marginBottom: 20,
    position: "relative"
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  profileImageIcon: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: 100,
    width: 30,
    height: 30
  },
  screenIcon: {},
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 20
  }
});
