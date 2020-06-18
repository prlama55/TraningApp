import React, {FC, useEffect, useState} from "react";
import {RouteComponentProps} from 'react-router-dom'
import {User} from '../../@types/User'
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";
const Users: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [users, setUsers]= useState([])
    useEffect( ()=>{
        const params: AxiosConfig={
            url: '/users',
            method: 'GET',
        }
        fetchService(params).then(({data})=>{
            setUsers(data)
        }).catch(err=>{
            console.log(err)
        })

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
