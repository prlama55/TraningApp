import React, { FC } from "react";
import {RouteComponentProps} from 'react-router-dom'
type Props= RouteComponentProps<any>
const UserDetails: FC<Props> = (props: Props) => {
    const {history}= props
    return (<div>
        <button onClick={()=>{
            history.push('/users')
        }}>Back to Users</button>
    </div>);
};
export default UserDetails;
