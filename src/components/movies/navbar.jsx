import React, { Component } from 'react' ;
import {Link} from "react-router-dom";

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Vidly</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Movies</Link>
                        <Link className="nav-item nav-link" to="/customers">Customers</Link>
                        <Link className="nav-item nav-link" to="/rentals">Rentals</Link>
                    </div>
                </div>
            </nav>
        )}
};