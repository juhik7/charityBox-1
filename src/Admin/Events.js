import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./events.css";
import { Link,useRouteMatch,Switch,Route } from "react-router-dom";
import Create from "./Events/Create";
import Ongoing from "./Events/Ongoing";
import Delete from "./Events/Delete";
import Update from "./Events/Update";
import NotFound from "./NotFound";

const Events = () =>{
    let {path,url} = useRouteMatch();
    return(
        <div className="container-fluid full-w full-h">
            <div className="row full-h">
                <div className="col-3">
                    <div className="sidebar">
                        <h2>
                            EVENTS
                        </h2>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/ongoing`}>ONGOING</Link>
                    </button>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/create`}>CREATE</Link>
                    </button>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/update`}>UPDATE</Link>
                    </button>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/delete`}>DELETE</Link>
                    </button>
                    </div>
                </div>
                <div className="col-9">
                <Switch>
                    <Route exact path={path}>
                    </Route>
                    <Route path={`${path}/create`}>
                        <Create />
                    </Route>
                    <Route path={`${path}/update`}>
                        <Update />
                    </Route>
                    <Route path={`${path}/ongoing`}>
                        <Ongoing />
                    </Route>
                    <Route path={`${path}/delete`}>
                        <Delete />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
                </div>
            </div>
        </div>
    )
}

export default Events;