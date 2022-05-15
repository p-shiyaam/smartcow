export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AppStateProps {
  user: UserProps | {};
  isLoggedIn: boolean;
}

export interface ActionProps {
  type: string;
  payload: any;
}
