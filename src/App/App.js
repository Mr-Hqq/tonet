import React from 'react';
import '../App.css';
import Home from "./Pages/Authentication/Home";
import Otp from "./Pages/Authentication/Otp";
import { Switch, Route } from "react-router";
import CompleteProfile from "./Pages/Authentication/CompleteProfile";
import {axiosDefault} from "./Http/Http"
function App() {
    axiosDefault();
    return (
        <Switch>
            <Route exact path='/' component={Otp}/>
            <Route path='/complete' component={CompleteProfile}/>
        </Switch>
    );
}

export default App;
