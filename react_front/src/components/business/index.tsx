import React, {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {User} from "../../@types/User";
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";
import {Business, Product} from "../../@types/Business";

interface State {
    businessList: Business[],
    products: Product[]
}
class BusinessDetail extends Component<RouteComponentProps, State>{
    state={
        businessList: [],
        products:[]
    }
 componentDidMount(): void {
     const params: AxiosConfig={
         url: '/business',
         method: 'GET',
     }
     fetchService(params).then(({data})=>{
         this.setState({businessList: data.data})
     }).catch(err=>{
         console.log(err)
     })
 }

    render(){
        const {businessList} = this.state
        return (
            <div className='container-fluid'>
                <table className='table table-bordered table-hover mt-4'>
                    <thead>
                    <tr>
                        <th>Business</th>
                        <th>Address</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    {businessList.map((business: Business, i)=>{
                        return (
                            <tr key={i}>
                                <td>{business.businessName}</td>
                                <td>{business.address}</td>
                                <td>{business.city}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default BusinessDetail
