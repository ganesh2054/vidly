import React, { PureComponent } from 'react';
import TableHeader  from './tableHeader';

class MoviesTable extends React.Component {
    columns=[
        {path:'title',label:'Title'},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {key:'delete'},

    ]
   
    render() { 

        const {movies,onDelete,onSort,sortColumn}=this.props;
        return ( 
            <table className="table">
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
               {/* <thead>
                   <tr>
                       <th onClick={()=>this.raiseSort('title')}>Title</th>
                       <th onClick={()=>this.raiseSort('genre.name')}>Genre</th>
                       <th onClick={()=>this.raiseSort('numberInStock')}>Stock</th>
                       <th onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th>
                       <th></th>
                   </tr>
               </thead> */}
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
}
 



 
export default  MoviesTable ;