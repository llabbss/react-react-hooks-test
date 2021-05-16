import React from 'react'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/users/user'
import Home from "./components/pages/home";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/alertState";


const App = ()=>{
    return (
      <GithubState>
        <AlertState>
        <Router>
          <div className="App">
            <Navbar title=" Github Finder" icon="fa fa-github"></Navbar>
            <div className="container">
              <Alert alert={alert}></Alert>
              <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
                <Route component={NotFound}></Route>
              </Switch>
              
            </div>
          </div>
        </Router>
      
      </AlertState>
      </GithubState>
    )
}
export default App