import {Action} from 'redux';
import {User} from './state';
import {LoginFormProps} from "../../../../pages/Login/Login";
import {LoadingStatus} from "../../../types";

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_USER_DATA = 'user/FETCH_USER_DATA',
  SIGN_OUT = 'user/SIGN_OUT',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}


export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: LoginFormProps;
}

export interface SignOutActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SIGN_OUT;
}

export interface FetchUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_DATA;
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: User | undefined;
}

export interface SetUserLoadingStatusActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}