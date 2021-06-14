import React from "react";
import { useHistory } from "react-router-dom";

import IApiTestAlbum from "../../../Types/@Interface/apis/web-test/album/album.interface";

import "./CardAlbum.component.css";

export default function CardAlbum({ id, album } : { id: string, album: IApiTestAlbum}){
    const history = useHistory();

    const seeAlbum = () => history.push(`/users/${id}/albums/${album.id}`, {title: album.title, photo: true});

    return(
        <div className="album-card">
            <div className="album-card-title">
                <span>{album.id}</span>
            </div>
            <div className="album-card-action">
                <button onClick={seeAlbum}>
                    SEE ALBUM
                </button>
            </div>
        </div>
    );
}