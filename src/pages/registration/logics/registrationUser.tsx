import { setAccessToken, setRememberCheck } from "../../../ui/functions/accessToken"
import { axiosInstance } from "../../../ui/functions/axiosInstance"

export interface IRegistrationUser {
    email: string
    password: string
    firstName: string
    lastName: string
    login: string
    date: string
}

export const registrationUser = async (params: IRegistrationUser) => {
    return axiosInstance.post(
        '/auth/registration', {
        "email": params.email,
        "password": params.password,
        "firstName": params.firstName,
        "lastName": params.lastName,
        "login": params.login,
        "birthDate": params.date,
    })
        .then((res: any) => {
            if (res.data.token) {
                setRememberCheck("true")
                setAccessToken(res.data.token);
            }
        })
        .catch((error) => {
            throw new Error(error.response.data.message);
        })
}
