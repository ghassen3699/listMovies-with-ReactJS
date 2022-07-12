import React, { Component} from 'react';
import NavBar from "./components/navbar";
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";
import ProjectsDetails from "./components/projectsDetails";


export default class App extends Component{
  render(){
    return (
        <div>
          <NavBar />
          <div className="content">
              <Switch>
                  <Route path="/projects/:id" component={ProjectsDetails} />
                  <Route path="/projects" render={props => <Projects {...props} />} />
                  <Route path="/contact" render={()=><Contact />} />
                  <Route path="/about" render={()=><About />} />
                  <Route path="/" render={()=><Home />} />
              </Switch>

          </div>
        </div>
    )}
}