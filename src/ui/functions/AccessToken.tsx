import { createEvent, createStore } from "effector"
import { requestUser } from "../../App";
import { RememberRefreshName, accessTokenName, accessTokenNameLogin, axiosInstance } from "./AxiosInstance";

export const $accessToken = createStore("")
export const setAccessToken = createEvent<string>()
$accessToken.on(setAccessToken, (_, val) => val)

export const $rememberCheck = createStore("")
export const setRememberCheck = createEvent<string>()
$rememberCheck.on(setRememberCheck, (_, val) => val)

export const $userLogin = createStore("")
export const setUserLogin = createEvent<string>()
$userLogin.on(setUserLogin, (_, val) => val)

$accessToken.updates.watch((token) => {
    localStorage.setItem(accessTokenName, (token));
    axiosInstance.defaults.headers.authorization = `Bearer ${token}`
    if (token) {
        requestUser()
    }
});
$rememberCheck.updates.watch((check) => {
    localStorage.setItem(RememberRefreshName, (check));
});
$userLogin.updates.watch((name) => {
    localStorage.setItem(accessTokenNameLogin, (name));
});
export const UserLogout = () => {
    document.cookie = "name=<Refresh>; expires=-1";
    document.cookie = "name=<Session>; expires=-1";
    setAccessToken("")
    setUserLogin("")
    setRememberCheck("false")
}