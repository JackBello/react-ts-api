import React from 'react';
import { Link, useParams } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress';

import "./photo.page.css";

import IApiTestPhoto from '../../Types/@Interface/apis/web-test/photo/photo.interface';
import IApiTestAlbum from '../../Types/@Interface/apis/web-test/album/album.interface';
import IApiTestUser from '../../Types/@Interface/apis/web-test/user/user.interface';

import photoApi from '../../Http/Apis/Test/photoApi';
import albumApi from '../../Http/Apis/Test/albumApi';
import userApi from '../../Http/Apis/Test/userApi';

export default function PhotoPage() {
    const { id } : { id: string } = useParams();

    const [photo, setPhoto] = React.useState<IApiTestPhoto | undefined>(undefined);
    const [album, setAlbum] = React.useState<IApiTestAlbum | undefined>(undefined);
    const [user, setUser] = React.useState<IApiTestUser | undefined>(undefined);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadPhoto = async () => {
            const data = await photoApi.getById(id);

            setPhoto(data);
            setLoading(false);
        }

        loadPhoto();
    }, [id]);

    React.useEffect(() => {
        const loadAlbum = async (id: string) => {
            const album = await albumApi.getById(id);

            setAlbum(album);
        }

        if(photo !== undefined) loadAlbum(String(photo.album_id));
    }, [photo]);

    React.useEffect(() => {
        const loadUser = async (id: string) => {
            const data = await userApi.getById(id);

            setUser(data);
        }

        if(album !== undefined) loadUser(String(album.user_id));
    }, [album]);

    if(loading){
        return(
            <div className="photo-view">
                <CircularProgress/>
            </div>
        );
    }

    if(!photo) {
        return(
            <div className="photo-full">
                <div className="photo-full-user">
                    <span>Photo Mot Found</span>
                </div>
                <div className="photo-full-card">
                    <div className="photo-full-card-title">
                        Unknown
                    </div>
                    <div className="photo-full-card-body">
                        Error 404
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className="photo-full">
            <div className="photo-full-user">
                <span> {user?.name.toUpperCase()} </span>
                <Link to={`/users/${user?.id}`}>{user?.username}</Link>
            </div>
            <div className="photo-full-card">
                <div className="photo-full-card-title">
                    <span>
                        {String(album?.title).toUpperCase()} / {photo.title.toUpperCase()}
                    </span>
                </div>
                <div className="photo-full-card-body">
                    <img src={photo.photo} alt={photo.title}/>
                </div>
            </div>
        </div>
    );
}