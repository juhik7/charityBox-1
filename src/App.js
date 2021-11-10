import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import AdminDash from "./Admin/AdminDash";
import Home from "./Home";
import NotFound from "./NotFound";


const App=() =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/admin">
          <AdminDash />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}


export default App;