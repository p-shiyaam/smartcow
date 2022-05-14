import { useReducer } from "react";
import { ActionProps, AppStateProps } from "../types";

const initialState = { user: {}, isLoggedIn: false };

const AppReducer = (
  state: AppStateProps,
  action: ActionProps,
): AppStateProps => {
  switch (action.type) {
    case "LOGIN":
      // read from local storage
      return {
        ...state,
        user: { name: "test user", email: "test@test.com" },
        isLoggedIn: true,
      };
    case "SIGNUP":
      // write to local storage
      return state;
    case "LOGOUT":
      return { ...state, user: {}, isLoggedIn: false };
    default:
      throw new Error();
  }
};

const useAppReducer = () => {
  return useReducer(AppReducer, initialState);
};

export default useAppReducer;
