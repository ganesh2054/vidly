import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'


class Movie  extends React.Component {
    state={
        movies:getMovies()
    };
    deleteMovie=movie=>{
    const movies=this.state.movies.filter(m=>m._id!==movie._id)
    this.setState({movies:movies});
    };
    render() { 
        const {length:count}=this.state.movies;
        if(count===0)
        return <p>there are no movies</p>
        return <div>
       <p>ther are {count} movie in database</p>
       <div className="table">
           <thead>
               <tr>
                   <th>Title</th>
                   <th>Genre</th>
                   <th>Stock</th>
                   <th>Rate</th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               {this.state.movies.map(movie=>(
                      <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td><button className='btn btn-primary' onClick={()=>this.deleteMovie(movie )}>Delete</button></td>

                  </tr>
               ))}
            
           </tbody>
              </div>

        </div>;
    }
}
 
export default Movie ;