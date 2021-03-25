import { LoadingStatus } from "../../../types";

export interface User {
  _id?: string;
  email: string;
  password: string;
}

export interface UserState {
  data: User | undefined;
  status: LoadingStatus;
}
