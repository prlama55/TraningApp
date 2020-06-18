import React, { FC, useState } from "react";
import {RouteComponentProps} from 'react-router-dom'
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";
import {Business} from "../../@types/Business";
const BusinessCreate: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const initialState: Business = {
        businessName: "",
        address: "",
        city: "",
    };
    const [formData, setFormData] = useState(initialState);
    const saveBusiness = async () => {
        const params: AxiosConfig={
            url: '/business',
            method: 'POST',
            data: formData
        }
        const { data } = await fetchService(params);
        console.log("data====",data)
        props.history.push(`/business`)
    };
    return (
        <div className="container">
            <div className="card card-info login-card">
                <div className="card-header">
                    <h4>Add Business</h4>
                </div>
                <form action="#" className="form">
                    <div className="card-body">
                        <div className="form-group">
                            <label>
                                <strong>Business Name</strong>
                            </label>
                            <input
                                id="businessName"
                                type="text"
                                name="businessName"
                                className="form-control"
                                placeholder="Business Name"
                                value={formData.businessName}
                                onChange={(elm) => {
                                    setFormData({
                                        ...formData,
                                        businessName: elm.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <strong>Address</strong>
                            <input
                                type="address"
                                name="address"
                                className="form-control"
                                placeholder="Address"
                                value={formData.address}
                                onChange={(elm) => {
                                    setFormData({
                                        ...formData,
                                        address: elm.target.value,
                                    });
                                }}
                            />
                            <div className="form-group">
                            <strong>City</strong>
                            <input
                                type="city"
                                name="city"
                                className="form-control"
                                placeholder="City"
                                value={formData.city}
                                onChange={(elm) => {
                                    setFormData({
                                        ...formData,
                                        city: elm.target.value,
                                    });
                                }}
                            />
                        </div>
                        </div>
                        <div className="form-group right">
                            <button
                                type="button"
                                onClick={saveBusiness}
                                className="btn btn-primary"
                            >
                                Save
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BusinessCreate;
