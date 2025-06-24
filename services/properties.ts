import baseApi from "@/constants/base-api";
import { IProperty } from "@/models/property";
import { useQuery } from "@tanstack/react-query";

export const getProperties = async (
  params: {
    [key: string]: string;
  } = {}
): Promise<IProperty[]> => {
  const response = await baseApi.get("/properties", { params });

  return response.data;
};

export const useGetProperties = (
  params: {
    [key: string]: string;
  } = {}
) => {
  const queryKey = ["properties", ...Object.entries(params).flat()];

  return useQuery({
    queryFn: () => getProperties(params),
    queryKey: queryKey,
    enabled: Object.values(params).every((v) => typeof v === "string")
  });
};

export const getSingleProperty = async (id: string): Promise<IProperty> => {
  const response = await baseApi.get(`/properties/${id}`);

  return response.data;
};

export const useGetSingleProperty = (id: string) => {
  return useQuery({
    queryFn: () => getSingleProperty(id),
    queryKey: ["properties", id]
  });
};
