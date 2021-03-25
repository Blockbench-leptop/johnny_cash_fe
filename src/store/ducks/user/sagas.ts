import {call, put, takeLatest} from 'redux-saga/effects';
import {AuthApiExemple} from '../../../services/api/authApiExemple';
import { WinStorage } from '../../../services/AuthSrorage';
import {LoadingStatus} from '../../types';
import {setUserData, setUserLoadingStatus} from './actionCreators';
import {FetchSignInActionInterface, UserActionsType,} from './contracts/actionTypes';

export function* fetchLoginRequest({ payload }: FetchSignInActionInterface) {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const data = yield call(AuthApiExemple.signIn, payload);
    WinStorage.setToken(data.password)
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchLoginRequest);
}
