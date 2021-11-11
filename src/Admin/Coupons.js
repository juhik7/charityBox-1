import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./events.css";
import { Link,useRouteMatch,Switch,Route } from "react-router-dom";
import NotFound from "./NotFound";
import Active from "./Coupons/Active";
import Create from "./Coupons/Create";
import Update from "./Coupons/Update";
import Delete from "./Coupons/Delete";

const Coupons=()=>{
    let {path,url} = useRouteMatch();
    return(
        <div className="container-fluid full-w full-h">
            <div className="row full-h">
                <div className="col-3">
                    <div className="sidebar">
                        <h2>
                            COUPONS
                        </h2>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/active`}>ACTIVE</Link>
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
                    <Route path={`${path}/active`}>
                        <Active />
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
};

export default Coupons;