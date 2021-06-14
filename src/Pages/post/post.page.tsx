import React from "react";

import { Link, useParams } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress';

import CardComment from "../../Components/cards/comment/CardComment.component";

import IApiTestComment from "../../Types/@Interface/apis/web-test/comment/comment.interface";
import IApiTestPost from "../../Types/@Interface/apis/web-test/post/post.interface";
import IApiTestUser from "../../Types/@Interface/apis/web-test/user/user.interface";

import postApi from "../../Http/Apis/Test/postApi";
import userApi from "../../Http/Apis/Test/userApi";

import "./post.page.css";

export default function PostPage() {
    const { id } : { id: string } = useParams();

    const [post, setPost] = React.useState<IApiTestPost | undefined>(undefined);
    const [comments, setComments] = React.useState<IApiTestComment[] | []>([]);
    const [user, setUser] = React.useState<IApiTestUser | undefined>(undefined);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const loadPost = async () => {
            const data = await postApi.getById(id);

            setPost(data);
            setLoading(false);
        }

        const loadPostComments = async () => {
            const data = await postApi.getPostComments(id);

            setComments(data);
        }

        loadPost();
        loadPostComments();
    }, [id]);

    React.useEffect(() => {
        const loadUser = async (id: string) => {
            const data = await userApi.getById(id);

            setUser(data);
        }

        if(post !== undefined) loadUser(String(post.user_id));
    }, [post]);

    if(loading){
        return(
            <div className="home-view">
                <CircularProgress/>
            </div>
        );
    }

    if(!post) {
        return(
            <div className="post-full">
                <div className="post-full-user">
                    <span>Post not found</span>
                </div>
                <div className="post-full-card">
                    <div className="post-full-card-title">
                        Unknown
                    </div>
                    <div className="post-full-card-body">
                        <p>
                            Error 404
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="post-full">
            <div className="post-full-user">
                <span> {user?.name.toUpperCase()} </span>
                <Link to={`/users/${user?.id}`}>{user?.username}</Link>
            </div>
            <div className="post-full-card">
                <div className="post-full-card-title">
                    <span>
                        {post.title.toUpperCase()}
                    </span>
                </div>
                <div className="post-full-card-body">
                    <p>
                        {post.description}
                    </p>
                </div>
            </div>
            <div className="post-full-comments">
                <span>COMMENTS - {comments.length}</span>
                <i className="fas fa-comment-alt"></i>
                {
                    comments.map((comment) => <CardComment comment={comment} key={comment.id}/>)
                }
            </div>
        </div>
    );
}