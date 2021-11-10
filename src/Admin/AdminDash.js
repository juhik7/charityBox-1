import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Events from "./Events";
import Ngo from "./Ngo";
import Donations from "./Donations";
import NotFound from "./NotFound";

const AdminDash = () =>{
    let {path} = useRouteMatch();
    return (
        <>
        <AdminHeader url={path} />
        <Switch>
            <Route exact path={path}>
                <h1>ADMIN DASH</h1>
            </Route>
            <Route path={`${path}/events`}>
                <Events />
            </Route>
            <Route path={`${path}/donations`}>
                <Donations />
            </Route>
            <Route path={`${path}/ngo`}>
                <Ngo />
            </Route>
            <Route component={NotFound} />
        </Switch>
        </>
      )
};

export default AdminDash;