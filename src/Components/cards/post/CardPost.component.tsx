import React from "react";
import { useHistory } from "react-router-dom";

import IApiTestPost from "../../../Types/@Interface/apis/web-test/post/post.interface";

import "./CardPost.component.css";

export default function CardPost({ post } : { post: IApiTestPost }){
    const history = useHistory();

    const seePost = () => history.push(`/posts/${post.id}`);

    return(
        <div className="post-card">
            <div className="post-card-title">
                <span>{post.title.toUpperCase()}</span>
            </div>
            <div className="post-card-body">
                <p>{post.description}</p>
            </div>
            <div className="post-card-action">
                <button onClick={seePost}>
                    SEE MORE
                </button>
            </div>
        </div>
    );
}