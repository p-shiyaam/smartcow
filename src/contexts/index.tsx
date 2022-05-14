import React from "react";
import { AppStateProps, ActionProps } from "../types";

interface AppContextProps extends AppStateProps {
  dispatch: React.Dispatch<ActionProps>;
}

export const AppContext = React.createContext<Partial<AppContextProps>>({});
