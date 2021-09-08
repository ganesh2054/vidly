import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import Pagination from './pagination';
import {paginate} from '../utils/paginate';


class Movie  extends React.Component {
    state={
        movies:getMovies(),
        currentPage:1,
        pageSize:4
    };
    handlePageChange=page=>{
        this.setState({currentPage:page})

    };


    deleteMovie=movie=>{
    const movies=this.state.movies.filter(m=>m._id!==movie._id)
    this.setState({movies:movies});
    };
    render() { 
        const {length:count}=this.state.movies;
        if(count===0)
        return <p>there are no movies</p>
        const movie=paginate(this.state.movies,this.state.currentPage,this.state.pageSize);
        return <div>
       <p>ther are {count} movie in database</p>
       <table className="table">
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
               {movie.map(movie=>(
                      <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td><button className='btn btn-primary' onClick={()=>this.deleteMovie(movie )}>Delete</button></td>

                  </tr>
               ))}
            
           </tbody>
              </table>
              <Pagination itemCount={count} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} currentPage={this.state.currentPage} />

        </div>;
    }
}
 
export default Movie ;