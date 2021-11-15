import { ADMIN_LOGIN, VERIFY_ADMIN, SIGNOUT_ADMIN } from "./types";
export const admin_login = (admin) => ({
  type: ADMIN_LOGIN,
  payload: admin,
});
export const verify_admin = (verificationInfo) => ({
  type: VERIFY_ADMIN,
  payload: verificationInfo,
});

export const signout_admin = () => ({
  type: SIGNOUT_ADMIN,
});
