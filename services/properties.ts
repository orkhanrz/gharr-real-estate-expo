import baseApi from "@/constants/base-api";
import { IProperty } from "@/models/property";
import { useQuery } from "@tanstack/react-query";

export const getProperties = async (): Promise<IProperty[]> => {
  const response = await baseApi.get("/properties");

  return response.data;
};

export const useGetProperties = () => {
  return useQuery({ queryFn: getProperties, queryKey: ["properties"] });
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
