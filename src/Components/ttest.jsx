import React, { PureComponent, useState } from 'react';


const Ganesh = ({faIcon='hi'}) => {
const icons=["fa fa-heart",'fas fa-address-card','fa fa-up-long','fa fa-heart']
    // const[icon,seticon]=useState(1)
 

    return (
         <>
         <h1>{faIcon}</h1>
         {
     
  //  icons.map((icon)=> <h1>{icon}</h1>)
     icons.map((icon)=><i class={icon} style={{fontSize:'100px'}}></i>)
         }

<img id="myImageTD" 
            src={"assets/Half_up_arrow.png"}
            style={{width:"70px",marginLeft:'100px',height:'70px'}}
            alt="ThumbsDownImageMissing"/>    
  <img id="myImageTD" 
            src={"assets/Half_down_arrow.png"}
            style={{width:"70px",marginLeft:'100px',height:'70px'}}
            alt="ThumbsDownImageMissing"/>    
        </>
        );
      
}
 
export default Ganesh;
// fa fa-heart
{/* <i class="fa-solid fa-up-long"></i> */}