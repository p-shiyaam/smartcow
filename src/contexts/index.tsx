import React from "react";
import { AppStateProps, ActionProps } from "../types";
import { appInitialState } from "../reducers/AppReducer";

interface AppContextProps extends AppStateProps {
  dispatch: React.Dispatch<ActionProps>;
}

export const AppContext = React.createContext<AppContextProps>({
  dispatch: () => {},
  ...appInitialState,
});
