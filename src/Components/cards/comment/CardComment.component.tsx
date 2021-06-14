import React from "react";
import IApiTestComment from "../../../Types/@Interface/apis/web-test/comment/comment.interface";

import "./CardComment.component.css";

export default function CardComment({ comment } : { comment: IApiTestComment }){
    return(
        <div className="comment">
            <div className="comment-title">
                <a href={`#${comment.email}`}>{comment.email}</a>
            </div>
            <div className="comment-body">
                <p>{comment.body}</p>
            </div>
        </div>
    );
}