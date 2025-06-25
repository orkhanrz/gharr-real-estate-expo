import Button from "@/components/UI/button";
import Input from "@/components/UI/input";
import Select from "@/components/UI/select";
import {
  completeSignUpDefaultValues,
  completeSignUpValidationSchema
} from "@/constants/auth";
import { BackendError, ValidationErrorResponseItem } from "@/models/error";
import { UserComplete, UserSignUp, UserSignUpRequestBody } from "@/models/user";
import { useSignUp } from "@/services/auth";
import { logIn } from "@/store/user/user-slice";
import { saveToken } from "@/utils/auth";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import {
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

  const handleFormSubmit = (completeFormData: UserComplete) => {
    const formData: UserSignUpRequestBody = {
      ...signUpFormData,
      ...completeFormData
    };

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

            <Ionicons
              style={styles.screenIcon}
              name="person-circle"
              size={119}
              color={"#000929"}
            />
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
  screenIcon: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 20
  }
});
