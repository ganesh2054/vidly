import React, { PureComponent } from 'react';

const MovieTable = props => {
    const {movies,onDelete,onSort}=props;
    return ( 
        <table className="table">
           <thead>
               <tr>
                   <th onClick={()=>onSort('title')}>Title</th>
                   <th onClick={()=>onSort('genre.name')}>Genre</th>
                   <th onClick={()=>onSort('numberInStock')}>Stock</th>
                   <th onClick={()=>onSort('dailyRentalRate')}>Rate</th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               {movies.map(movie=>(
                      <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td><button className='btn btn-primary' onClick={()=>onDelete(movie )}>Delete</button></td>

                  </tr>
               ))}
            
           </tbody>
              </table>
     );
}
 
export default MovieTable;