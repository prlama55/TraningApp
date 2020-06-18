export interface AxiosConfig {
    headers?:{[key: string]: string}
    url: string // path
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
    data?: any
    params?: any
}
