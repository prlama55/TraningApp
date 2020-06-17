export interface UserLogin {
    username: string;
    password: string;
}

export interface UserRegistration extends UserLogin{
    userType: string
}

export interface User {
    username: string
    userType: string
    createdAt: string
}
