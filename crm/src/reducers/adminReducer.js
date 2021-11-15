import { ADMIN_LOGIN, VERIFY_ADMIN, SIGNOUT_ADMIN } from "../actions/types";
import AdminLogin from "../Login/components/AdminLogin";
const adminReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      return { ...state, userInfo: action.payload };
    case VERIFY_ADMIN:
      return {
        ...state,
        userInfo: action.payload,
        auth: true,
      };
    case SIGNOUT_ADMIN:
      return {
        ...state,
        userInfo: "",
      };
    default:
      return state;
  }
};
export default adminReducer;
