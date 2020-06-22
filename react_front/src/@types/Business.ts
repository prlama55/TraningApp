export interface Business {
    id?: string
    businessName: string
    address: string
    city: string,
    products?: Product[]
}

export interface Product {
    id: string
    productName: string
    price: number
    qty: number
    business: Business
}

export type BusinessState= Business
export type ProductState= Product
