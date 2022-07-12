import React, { Component} from 'react';
import {getMovies} from '../services/fakeMovieService'
import Movie from './movie'
import Pagination from './pagination'


export default class Movies extends Component {
    state = {
        movies:getMovies(),
        currentPage:1,
        pageSize:3
    }

    // function for showing how much of movies in database
    formatMovies(){
        if (this.state.movies.length === 0){
            return "No Films in database"
        }
        return "They are "+ this.state.movies.length + " Movies in database"
    }

    // delete movie from database
    deleteMovie = (movie) =>{
        const movies = this.state.movies.filter(m => {
            return m._id !== movie._id
        })
        this.setState({movies:movies})
    }

    // like button
    likeButton = (movie) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = {...this.state.movies[index]}
        movies[index].liked = !movies[index].liked
        this.setState({movies:movies})
    }

    // update the current page
    handlePageClick = (page) => {
        this.setState({currentPage:page})
    }



    render(){
        return(
            <div>
                <h3>{this.formatMovies()}</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Number in stock</th>
                        <th scope="col">publish date</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Like</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => {
                        return <Movie
                            key={movie._id}
                            filmData={movie}
                            deleteMovie={this.deleteMovie}
                            like={this.likeButton}
                        />
                    })}
                    </tbody>
                </table>
                <Pagination 
                    moviesLength={this.state.movies.length} 
                    pageSize={this.state.pageSize} 
                    pageClick={this.handlePageClick} 
                    currentPage={this.state.currentPage}
                />
            </div>
        )
    }
}