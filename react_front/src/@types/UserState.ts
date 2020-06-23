interface UserState {

}

export interface Auth{
    username: string,
    accessToken: string,
    refreshToken: string,
    userType: string,
    expiresIn: number
}
export interface AuthState {
    auth: Auth
}
