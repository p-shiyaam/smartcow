import { useReducer } from "react";
import { ActionProps, AppStateProps } from "../types";
import { localstorage } from "../utils";

export const appInitialState = { user: {}, isLoggedIn: false } as AppStateProps;

const AppReducer = (
  state: AppStateProps,
  action: ActionProps,
): AppStateProps => {
  switch (action.type) {
    case "LOGIN":
      localstorage.set("loggedinUser", action.payload);
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      localstorage.set("loggedinUser", null);
      return { ...state, user: {}, isLoggedIn: false };
    default:
      throw new Error();
  }
};

// export const useAppReducer = ({
//   initialState = appInitialState,
// }: {
//   initialState: AppStateProps;
// }) => {
//   return useReducer(AppReducer, initialState);
// };

export const useAppReducer = (initialState: AppStateProps) => {
  return useReducer(AppReducer, initialState);
};
