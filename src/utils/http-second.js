import axios from "axios";
import { CookiesKey, CookiesStorage } from "./cookies";

const httpSecond = axios.create({
    baseURL: "https://tart-frannie-resa-5a74b69b.koyeb.app",
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

httpSecond.interceptors.request.use((config) => {
    const authToken = CookiesStorage.get(CookiesKey.AuthToken);

    config.headers = {
        ...config.headers,
        Authorization: authToken ? `Bearer ${authToken}` : "",
    };

    return config;
});

export default httpSecond;
