export const API_ENDPOINT = {
  //auth
  AUTH_SIGNIN: "/auth/signin",
  AUTH_SIGNOUT: "/auth/signout",
  AUTH_REGISTER: "",
  AUTH_VERIFY: "/auth/verify",
  AUTH_VERIFY_RESEND: "/auth/verify/resend",
  AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
  AUTH_SET_PASSWORD: "/auth/set-password",
  AUTH_SET_PIN: "/auth/set-pin",
  //   AUTH_CHANGE_PASSWORD: "",
  //   AUTH_RESEND_OTP_PASSWORD: "",
  //   AUTH_ACTIVATE_ACCOUNT: "",

  // Transfer Rupiah
  TRANSFER_DESTINATIONS: "/transfer/destinations",
  TRANSFER_INTRABANK: "/transfer/intrabank",
  TRANSFER_FAVORITE: "/transfer/destinations",

  //Qris
  TRANSFER_QRIS: "/transfer/qris",
  GENERATE_QRIS_CPM_TRANSACTION: "/transfer/qris/generate/cpm",
  // ADD_DATA_REKENING: ""

  // Account
  ACCOUNT_DETAIL: "/account/detail",
  ACCOUNT_MUTATIONS_SUMMARY: "/account/mutations/summary",
  ACCOUNT_MUTATIONS: "/account/mutations",
  // ACCOUNT_DETAIL_MUTATION: ""

  // Transaction Tarik Setor Tunai
  TRKSTR_TRANSACTION_GENERATETOKEN: "/api/v1/transactions/generate-token",
  TRKSTR_TRANSACTION_TOKENHISTORY: "/api/v1/transactions/token-history",

  // Transaction QR
  QR_TRANSACTION_GENERATEQR: "/api/v1/transactions/generate-qr",

  //user
  USER_PROFILE: "/users/profile",
  // CHANGE_USER_PROFILE: "",
  VERIFY_USER_PIN: "/users/verify-pin",
  VERIFY_USER_PASSWORD: "/users/verify-password",
  VERIFY_PHONE_OTP: "/users/verify-number",
  VERIFY_EMAIL_OTP: "/users/verify-email",

  CHANGE_USER_PIN: "/users/change-pin",
  CHANGE_USER_PASSWORD: "/users/change-password",
  CHANGE_USER_PHONE: "/users/change-number",
  CHANGE_USER_EMAIL: "/users/change-email",

  USER_RESEND_NUMBER: "/user/resend-email",
  USER_RESEND_EMAIL: "/user/resend-number",

  GET_IMG:"/"
};
