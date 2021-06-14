import React from 'react';

import { Link, useParams, useLocation, Switch, Route } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress';

import CardPost from '../../Components/cards/post/CardPost.component';
import CardTask from '../../Components/cards/task/CardTask.component';
import CardAlbum from '../../Components/cards/album/CardAlbum.component';
import CardPhoto from '../../Components/cards/photo/CardPhoto.component';

import IApiTestUser from '../../Types/@Interface/apis/web-test/user/user.interface';
import IApiTestPost from '../../Types/@Interface/apis/web-test/post/post.interface';
import IApiTestTask from '../../Types/@Interface/apis/web-test/task/task.interface';
import IApiTestAlbum from '../../Types/@Interface/apis/web-test/album/album.interface';
import IApiTestPhoto from '../../Types/@Interface/apis/web-test/photo/photo.interface';

import userApi from '../../Http/Apis/Test/userApi';
import albumApi from '../../Http/Apis/Test/albumApi';

import "./user.page.css";

export default function UserPage({ match } : { match: any }) {
    const { id } : { id: string } = useParams();

    const [user, setUser] = React.useState<IApiTestUser | undefined>(undefined);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadUser = async (): Promise<void> => {
            const data = await userApi.getById(id);

            setUser(data);
            setLoading(false);
        };

        loadUser();
    }, [id]);

    if(loading) {
        return(
            <div className="user-view">
                <CircularProgress/>
            </div>
        );
    }

    if(!user) {
        return(
            <div className="user-perfil">
                <div className="user-perfil-head">
                    <main className="user-perfil-h-photo">
                            <i className="fas fa-user"></i>
                        </main>
                    <main className="user-perfil-h-names">
                        <span>
                            User not found
                        </span>
                    </main>
                </div>
                <div className="user-perfil-body">
                    <span>
                        Error 404
                    </span>
                </div>
            </div>
        );
    }

    return(
        <div className="user-perfil">
            <div className="user-perfil-head">
                <main className="user-perfil-h-photo">
                    <i className="fas fa-user"></i>
                </main>
                <main className="user-perfil-h-names">
                    <span>
                        {user.name.toUpperCase()}
                    </span>
                    <Link to={`/users/${user.id}`}>
                        {user.username}
                    </Link>
                </main>
            </div>
            <div className="user-perfil-body">
                <span>INFORMACION</span>
                <main className="user-perfil-b-email">
                    <span>
                        <i className="fas fa-at"></i>
                        {user.email}
                    </span>
                </main>
                <main className="user-perfil-b-phone">
                    <i className="fas fa-phone"></i>
                    <span>
                        {user.phone}
                    </span>
                </main>
                <main className="user-perfil-b-website">
                    <i className="fas fa-globe"></i>
                    <span>
                        {user.website}
                    </span>
                </main>
                <main className="user-perfil-b-address">
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        {`${user.address.city} ${user.address.street} ${user.address.suite}`}
                    </span>
                    <span>
                        <i className="fas fa-qrcode"></i>
                        {user.address.zipcode}
                    </span>
                </main>
                <main className="user-perfil-b-company">
                    <i className="fas fa-building"></i>
                    <span>{user.company.name}</span>
                </main>
            </div>
            <div className="user-perfil-aside">
                <div className="user-perfil-a-nav">
                    <Link to={{
                        pathname: `/users/${user.id}/posts`,
                    }}>
                        <i></i>
                        <span>POSTS</span>
                    </Link>
                    <Link to={{
                        pathname: `/users/${user.id}/albums`,
                    }}>
                        <i></i>
                        <span>ALBUMS</span>
                    </Link>
                    <Link to={{
                        pathname: `/users/${user.id}/tasks`,
                    }}>
                        <i></i>
                        <span>TASKS</span>
                    </Link>
                </div>
                <div className="user-perfil-a-main">
                    <UserRouter match={match}/>
                </div>
            </div>
        </div>
    );
}

function UserRouter({ match } : { match: any }) {
    return (
        <Switch>
            <Route path={`${match.path}/posts`} exact>
                <UserPosts/>
            </Route>
            <Route path={`${match.path}/albums`} exact>
                <UserAlbums/>
            </Route>
            <Route path={`${match.path}/albums/:id_album`} exact>
                <UserPhotos/>
            </Route>
            <Route path={`${match.path}/tasks`} exact>
                <UserTasks/>
            </Route>
        </Switch>
    );
}

function UserPosts() {
    const { id } : { id: string } = useParams();

    const [posts, setPosts] = React.useState<IApiTestPost[] | []>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadPosts = async () => {
            const data = await userApi.getUserPosts(id);

            setPosts(data);
            setLoading(false);
        }

        loadPosts();
    }, [id]);

    if(loading) return <CircularProgress/>

    return (
        <div className="user-posts">
            {posts.map(post => <CardPost post={post} key={post.id}/>)}
        </div>
    );
}

function UserTasks() {
    const { id } : { id: string } = useParams();

    const [tasks, setTasks] = React.useState<IApiTestTask[] | []>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadTasks = async () => {
            const data = await userApi.getUserTasks(id);

            setTasks(data);
            setLoading(false);
        }

        loadTasks();
    }, [id]);

    if(loading) return <CircularProgress/>

    return (
        <div className="user-tasks">
            {tasks.map(task => <CardTask task={task} key={task.id}/>)}
        </div>
    );
}

function UserAlbums() {
    const { id } : { id: string } = useParams();

    const [albums, setAlbums] = React.useState<IApiTestAlbum[] | []>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadAlbums = async () => {
            const data = await userApi.getUserAlbums(id);

            setAlbums(data);
            setLoading(false);
        }

        loadAlbums();
    }, [id]);

    if(loading) return <CircularProgress/>

    return (
        <div className="user-albums">
            {albums.map(album => <CardAlbum album={album} id={id} key={album.id}/>)}
        </div>
    );
}

function UserPhotos() {
    const { id_album } : { id_album: string } = useParams();
    const { state } : { state: any } = useLocation();

    const [album, setAlbum] = React.useState<string>("");
    const [photos, setPhotos] = React.useState<IApiTestPhoto[] | []>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadPhotos = async () => {
            const data = await albumApi.getAlbumPhotos(id_album);

            setPhotos(data);
            setLoading(false);
        }

        const loadAlbum = async () => {
            if(state !== undefined) {
                const { title } : { title: string; } = state;

                setAlbum(title);
            } else {
                const data = await albumApi.getById(id_album);

                setAlbum(data.title);
            }
        }

        loadAlbum();
        loadPhotos();
    }, [id_album, state]);

    if(loading) return <CircularProgress/>

    return (
        <div className="user-photos">
            <span>{album.toUpperCase()}</span>
            {photos.map(photo => <CardPhoto photo={photo} key={photo.id}/>)}
        </div>
    );
}