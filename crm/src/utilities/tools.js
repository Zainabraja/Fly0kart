import cookie from "react-cookies";

export const getTokenCookie = () => cookie.load("w_admin_auth");
export const removeTokenCookie = () =>
  cookie.remove("w_admin_auth", { path: "/" });
export const getAuthHeader = () => {
  return { headers: { Authorization: `Bearer ${getTokenCookie()}` } };
};
