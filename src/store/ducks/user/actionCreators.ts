import {
  FetchSignInActionInterface,
  FetchUserDataActionInterface,
  SetUserDataActionInterface, SetUserLoadingStatusActionInterface,
  SignOutActionInterface,
  UserActionsType,
} from './contracts/actionTypes';
import {UserState} from './contracts/state';
import {LoginFormProps} from "../../../pages/Login/Login";


export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const signOut = (): SignOutActionInterface => ({
  type: UserActionsType.SIGN_OUT,
});

export const fetchUserData = (): FetchUserDataActionInterface => ({
  type: UserActionsType.FETCH_USER_DATA,
});

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const setUserLoadingStatus = (
    payload: UserState['status'],
): SetUserLoadingStatusActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export type UserActions =
  | FetchUserDataActionInterface
  | SetUserDataActionInterface
  | SetUserLoadingStatusActionInterface
  | SignOutActionInterface;
