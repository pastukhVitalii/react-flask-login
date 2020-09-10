import axios from "axios"

type ResponseLoginType = {
    email: string
    name: string
    isAdmin: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    success: boolean

}

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000"
})

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return axiosInstance.post<ResponseLoginType>("/time", {
            email,
            password,
            rememberMe})
            .then(res => {
                return res
            })
    }
}