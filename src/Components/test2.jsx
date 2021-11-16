
import React from 'react';


class LikeDislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likes: 0, dislikes: 0};
    }

  like_handle = () => {
    this.setState ({likes: this.state.likes +1});
    }
  
  dislike_handle = () => {
    this.setState ({dislikes: this.state.dislikes +1});
    }
    
  render() {
    return (
      <>
      <div>
        <img id="myImageTU"        
            src={"assets/like.png"}
            // src={"asset/images/like.jpeg"}
            style={{width:"70px",height:'70px',marginLeft:'10px'}}
            alt="ThumbsUpImageMissing" onClick={this.like_handle}/>

        <img id="myImageTD" 
            src={"assets/dislike.png"}
            style={{width:"70px",marginLeft:'100px',height:'70px'}}
            alt="ThumbsDownImageMissing" onClick={this.dislike_handle}/>    
        <br/>
        
        <input style={{marginLeft:'10px'}} type="text" id='tu_click' value={this.state.likes}></input>
        <input type="text" id='td_click' value={this.state.dislikes}></input>

      </div>
      </>
    )
    }
  }
  
export default LikeDislike;