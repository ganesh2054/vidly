import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import ListGroup  from './listGroup';
import MovieTable from './movieTable';
import _ from 'lodash';


class Movie  extends React.Component {
    state={
        movies:[],
        genres:[],
        currentPage:1,
        pageSize:4,
        sortColumn:{path:'title',order:'asc'}
    };
    componentDidMount(){
        const genres=[{_id:"",name:'All Genres'},...getGenres()]
        this.setState({movies:getMovies(),genres})

    }
    handlePageChange=page=>{
        this.setState({currentPage:page})

    };
    handleGenreSelect=genre=>{
        this.setState({selectedGenre:genre,currentPage:1})
    };
    handleSort=path=>{
        const sortColumn={...this.state.sortColumn};
        if(sortColumn.path==path)
        sortColumn.order=(sortColumn.order==='asc')?'desc':'asc';
        else{
            sortColumn.path=path;
            sortColumn.order='asc';
        }
        this.setState({sortColumn});
    }


    deleteMovie=movie=>{
    const movies=this.state.movies.filter(m=>m._id!==movie._id)
    this.setState({movies:movies});
    };
    render() { 
        const {length:count}=this.state.movies;
        const {selectedGenre,sortColumn}=this.state
        if(count===0)
       
        return <p>there are no movies</p>
        const filtered=selectedGenre&&selectedGenre._id?this.state.movies
        .filter(m=>m.genre._id===selectedGenre._id):this.state.movies
        const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
       
        const movie=paginate(sorted,this.state.currentPage,this.state.pageSize);
        return (
        <div className="row">
            <div className="col-2">
                <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre}
                 onItemSelect={this.handleGenreSelect}/>
            </div>
            <div className="col">
            <p>ther are {filtered.length} movie in database</p>
            <MovieTable movies={movie} onDelete={this.deleteMovie}
            onSort={this.handleSort}/>

            <Pagination itemCount={filtered.length} pageSize={this.state.pageSize} 
            onPageChange={this.handlePageChange} currentPage={this.state.currentPage} />

        </div>
        </div>
   
        )
    }
}
 
export default Movie ;