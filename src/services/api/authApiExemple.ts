import {LoginFormProps} from "../../pages/Login/Login";
import {axios} from "../axios";

interface ResponseApi {
    status: string;
    data: any;
}

interface PaymentInterface {
    walletAddress: string
    value: number
    timestamp: string
}

interface filterByTimestampI {
    start: string
    and: string
}

export const UserApi = {
    async signIn(postData: LoginFormProps): Promise<ResponseApi> {
        const {data} = await axios.post<ResponseApi>('/auth/login', postData)
        return data;
    },
    async sendPaymentRequisites(payment: PaymentInterface): Promise<ResponseApi> {
        const {data} = await axios.post<ResponseApi>('/payment/top-up', payment)
        return data
    },
    async filterByTimestamp(payload: filterByTimestampI): Promise<ResponseApi> {
        const {data} = await axios.get<ResponseApi>(`/payment/top-up?start_date=${payload.start}&end_date=${payload.and}`)
        return data
    }
}


export const AuthApiExemple = {
  signIn(postData: LoginFormProps) {
    const data = {
      email: 'test@gmail.com',
      password: 'Koitechs'
    }
    if (postData.email === data.email && postData.password === data.password) {
      return data
    }
  }
}

// @ts-ignore
window.AuthApi = AuthApiExemple;
