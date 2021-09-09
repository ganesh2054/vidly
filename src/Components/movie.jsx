import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import ListGroup  from './listGroup';


class Movie  extends React.Component {
    state={
        movies:[],
        genres:[],
        currentPage:1,
        pageSize:4
    };
    componentDidMount(){
        const genres=[{name:'All Genres'},...getGenres()]
        this.setState({movies:getMovies(),genres})

    }
    handlePageChange=page=>{
        this.setState({currentPage:page})

    };
    handleGenreSelect=genre=>{
        this.setState({selectedGenre:genre,currentPage:1})
    };


    deleteMovie=movie=>{
    const movies=this.state.movies.filter(m=>m._id!==movie._id)
    this.setState({movies:movies});
    };
    render() { 
        const {length:count}=this.state.movies;
        const {selectedGenre}=this.state
        if(count===0)
        return <p>there are no movies</p>
        const filtered=selectedGenre&&selectedGenre._id?this.state.movies.filter(m=>m.genre._id===selectedGenre._id):this.state.movies
        const movie=paginate(filtered,this.state.currentPage,this.state.pageSize);
        return (
        <div className="row">
            <div className="col-2">
                <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect}/>

                

            </div>
            <div className="col">
            <p>ther are {filtered.length} movie in database</p>
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
                
               
       
              <Pagination itemCount={filtered.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} currentPage={this.state.currentPage} />

        </div>
        </div>
   
        )
    }
}
 
export default Movie ;