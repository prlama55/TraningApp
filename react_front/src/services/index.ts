import axios from "axios";
import {AxiosConfig} from "../@types";
import {config} from "../config";
import StorageService from "./Storage";

const getHeaders=()=>{
    const auth= StorageService.get(config.AUTH_KEY)
    let token
    if(auth){
        token = JSON.parse(auth).accessToken
        return {
            'Authorization': `Bearer ${token}`,
            'Content-type': `application/json`,
        }
    }else{
        return {
            'Content-type': `application/json`,
        }
    }



}
export const fetchService= async (axiosConfig: AxiosConfig)=>{
    const requestParams ={
        baseURL: config.API_BASE_URL,
        headers: {...axiosConfig.headers, ...getHeaders },
        ...axiosConfig
    }
    try{
        const response= await axios(requestParams)
        console.log("response====",response)
        const {data, status}= response
        if(data){
            return {
                data, status
            }
        }else{
            throw new Error("Something errors")
        }
    }catch (e) {
        console.log("=====",e.data, e.statusCode)
        return {
            data: e.data, status: e.statusCode
        }
    }

}
