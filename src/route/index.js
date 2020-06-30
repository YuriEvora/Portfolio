import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";

import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Timeline from '../pages/Timeline';
import Contact from '../pages/Contact';

export default function route() {

    return(
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/AboutMe' component={AboutMe}/>
            <Route path='/Projects' component={Projects}/>
            <Route path='/Timeline' component={Timeline}/>
            <Route path='/Contact' component={Contact}/>
        </Switch>
    );
}