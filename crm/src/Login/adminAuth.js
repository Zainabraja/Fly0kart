import axios from "axios";
import {
  getTokenCookie,
  getAuthHeader,
  removeTokenCookie,
} from "../utilities/tools";
import { verify_admin, signout_admin } from "../actions/adminActions";

export const Login = async (values) => {
  console.log("in action");
  console.log(values.password);
  console.log(values.email);
  const admin = await axios.post("/admin/signin", {
    email: values.email,
    password: values.password,
  });
  return admin.data;
};

export const adminIsAuth = () => {
  return async (dispatch) => {
    try {
      if (!getTokenCookie) {
        throw new Error("Unauthorized");
      }
      const admin = await axios.get("/admin/isauth", getAuthHeader());
      dispatch(verify_admin({ admin: admin.data }));
    } catch (error) {}
  };
};

export const adminSignOut = () => {
  return async (dispatch) => {
    removeTokenCookie();
    dispatch(signout_admin());
  };
};
