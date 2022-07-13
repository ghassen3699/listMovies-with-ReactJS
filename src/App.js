import React, { Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Movies from "./components/movies/movies";
import Navbar from "./components/movies/navbar";
import Customers from "./components/movies/customers"
import Rentals from "./components/movies/rentals"
import Error404 from "./components/movies/error404"
import SingleMovle from "./components/movies/singleMovie";


export default class App extends Component{
    render(){
        return (
            <>
                <Navbar />
                <Switch>
                    <Route path="/404" component={Error404}></Route>
                    <Route path="/movie/:id" render={(props)=><SingleMovle {...props} />}></Route>
                    <Route path="/rentals" component={Rentals}>Rentals</Route>
                    <Route path="/customers" component={Customers}>Customers</Route>
                    <Route path="/" exact component={Movies}>Movies</Route>
                    <Redirect to="/404" />

                </Switch>

            </>
        )}
}