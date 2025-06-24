import baseApi from "@/constants/base-api";
import { IProperty } from "@/models/property";
import { UserInfo } from "@/models/user";
import { errorHandler } from "@/utils/auth";
import { useMutation, useQuery } from "@tanstack/react-query";

export const getUserInfo = async (id: string): Promise<UserInfo> => {
  const response = await baseApi.get(`/user/${id}`);

  return response.data;
};

export const useGetUserInfo = (id: string) => {
  return useQuery({
    queryFn: () => getUserInfo(id),
    queryKey: ["user", id]
  });
};

export const getUserFavorites = async (id: string): Promise<IProperty[]> => {
  const response = await baseApi.get(`/user/${id}/favorites`);

  return response.data;
};

export const useGetUserFavorites = (id: string) => {
  return useQuery({
    queryFn: () => getUserFavorites(id),
    queryKey: ["user", id, "favorites"],
    enabled: Boolean(id)
  });
};

export const toggleFavorite = async (params: {
  userId: string;
  propertyId: string;
}) => {
  const response = await baseApi.post(
    `/user/${params.userId}/favorites/${params.propertyId}`
  );

  return response;
};

export const useToggleFavorite = () => {
  return useMutation({
    mutationFn: toggleFavorite,
    onSuccess: (res) => console.log(res),
    onError: errorHandler
  });
};
