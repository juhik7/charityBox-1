import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./events.css";
import { Link,useRouteMatch,Switch,Route } from "react-router-dom";
import NotFound from "./NotFound";
import History from "./Donations/History";
import Inventory from "./Donations/Inventory";
import Total from "./Donations/Total";

const Donations = () =>{
    let {path,url} = useRouteMatch();
    return(
        <div className="container-fluid full-w full-h">
            <div className="row full-h">
                <div className="col-3">
                    <div className="sidebar">
                        <h2>
                            DONATIONS
                        </h2>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/history`}>HISTORY</Link>
                    </button>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/total`}>TOTAL</Link>
                    </button>
                    <button type="button">
                        <Link className="eventLink" to={`${url}/inventory`}>INVENTORY</Link>
                    </button>
                    </div>
                </div>
                <div className="col-9">
                <Switch>
                    <Route exact path={path}>
                    </Route>
                    <Route path={`${path}/history`}>
                        <History />
                    </Route>
                    <Route path={`${path}/total`}>
                        <Total />
                    </Route>
                    <Route path={`${path}/inventory`}>
                        <Inventory />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
                </div>
            </div>
        </div>
    );
};
export default Donations;