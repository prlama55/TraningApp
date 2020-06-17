import React, {FC, useEffect, useState} from "react";
import {RouteComponentProps} from 'react-router-dom'
import axios from "axios";
interface User {
    username: string
    userType: string
    createdAt: string
}
const Users: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [users, setUsers]= useState([])
    const auth= sessionStorage.getItem('auth')
    useEffect( ()=>{
        let token
        if(auth){
            token= JSON.parse(auth).accessToken
            const baseUrl = "http://localhost:5000/api/users";
            axios.get(baseUrl,{headers:{'Authorization': `Bearer ${token}`}}).then(({data, status})=>{
                console.log("data===",data)
                setUsers(data.data)
            })
        }

    },[])
    return users.length>0 ? (
        <div className='container-fluid'>
            <table className='table table-bordered table-hover mt-4'>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>User Type</th>
                    <th>Registered Date</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user: User, i)=>{
                    return (
                        <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.userType}</td>
                            <td>{user.createdAt}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    ):(
        <>No data found</>
    )
};
export default Users;
