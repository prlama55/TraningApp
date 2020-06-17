class StorageService {
    static save(key: string, data: any): void{
        sessionStorage.setItem(key, data)
    }
    static get(key: string){
        return sessionStorage.getItem(key)
    }
    static delete(key: string): void{
        sessionStorage.removeItem(key)
    }
    static clear(): void{
        sessionStorage.clear()
    }
}

export default StorageService
