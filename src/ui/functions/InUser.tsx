import { axiosInstance } from "./AxiosInstance";

export const InUser = async () => {
    return axiosInstance.get(
        `/profile`)
        .then((res: any) => {
            return res.data
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}