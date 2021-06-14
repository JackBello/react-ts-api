import React from "react";
import { Link } from "react-router-dom";

import IApiTestPhoto from "../../../Types/@Interface/apis/web-test/photo/photo.interface";

import "./CardPhoto.component.css";

export default function CardPhoto({ photo } : { photo: IApiTestPhoto }){
    return(
        <div className="photo-card">
            <div className="photo-card-action">
                <Link to={`/photos/${photo.id}`}>
                    <img src={photo.thumbnail} alt={photo.title} loading="lazy" width="150" height="150"/>
                </Link>
            </div>
        </div>
    );
}