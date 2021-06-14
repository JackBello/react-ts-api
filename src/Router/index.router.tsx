import React from "react";
import { Switch, Route } from "react-router-dom";

import Error404Page from "../Pages/errors/404/404.page";

import HomePage from "../Pages/home/home.page";
import PhotoPage from "../Pages/photo/photo.page";
import PostPage from "../Pages/post/post.page";
import UserPage from "../Pages/user/user.page";

export default function ViewRouter() {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/users/:id" component={UserPage}>
            </Route>
            <Route path="/posts/:id" component={PostPage}>
            </Route>
            <Route path="/photos/:id" component={PhotoPage}>
            </Route>
            <Route path="*" component={Error404Page}>
            </Route>
        </Switch>
    );
}
