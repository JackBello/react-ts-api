import React from 'react';
import { useHistory } from "react-router-dom";

import IApiTestUser from '../../../Types/@Interface/apis/web-test/user/user.interface';

import "./CardUser.component.css";

export default function CardUser({ user } : { user: IApiTestUser}){
    const history = useHistory();

    const seeUser = () => history.push(`/users/${user.id}`);

    return(
        <div className="card-user">
            <div className="card-user-title">
                <i className="fas fa-user"></i>
                <span>
                    {user.username.toUpperCase()}
                </span>
            </div>
            <div className="card-user-action">
                <button onClick={seeUser}>
                    SEE USER
                </button>
            </div>
        </div>
    );
}