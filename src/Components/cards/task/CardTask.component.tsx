import React from "react";

import IApiTestTask from "../../../Types/@Interface/apis/web-test/task/task.interface";

import "./CardTask.component.css";

export default function CardTask({ task } : { task: IApiTestTask }){
    return(
        <div className="card-task">
            <div className="card-task-title">
                <i className="fas fa-tasks"></i>
                <span>
                    {task.title.toUpperCase()}
                </span>
            </div>
            <div className="card-task-action">
                {
                    (task.completed) ?
                        <span>
                            <i className="fas fa-check-circle"></i>
                        </span>
                    :
                        <span>
                            <i className="fas fa-circle"></i>
                        </span>
                }
            </div>
        </div>
    );
}