import cryptoJs from "crypto-js";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const CookiesKey = {
  AuthToken: "TokenUser",
  User: "User",
  // TokenAdmin: "TokenAdmin",
  // Admin: "Admin",
};

const secretKey = "randomsecretkey";
const CookiesOptions = {
  path: "/",
  secure: true,
};

export const CookiesStorage = {
  set: (key, data, options) => {
    const encryptedData = cryptoJs.AES.encrypt(
      JSON.stringify(data),
      secretKey
    ).toString();
    return cookies.set(key, encryptedData, { ...CookiesOptions, ...options });
  },
  get: (key, options) => {
    const encryptedData = cookies.get(key, { ...CookiesOptions, ...options });
    if (encryptedData) {
      const bytes = cryptoJs.AES.decrypt(encryptedData, secretKey);
      const decryptedData = JSON.parse(bytes.toString(cryptoJs.enc.Utf8));
      return decryptedData;
    }
    return null;
  },
  remove: (key, options) => {
    return cookies.remove(key, { ...CookiesOptions, ...options });
  },
};
