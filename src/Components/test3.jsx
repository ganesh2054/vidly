import LikeDislike from './test2';
import NameForm from './test1';
import React from 'react';
import Ganesh from './ttest'
// import './test.css';
import styled from '@emotion/styled'

const Section = styled.div`
display: flex;
justify-content: center;
margin: 10px;
`
const Merged = () => {
    return(
        <React.Fragment>
      <Section>
      
        <NameForm/>
        <LikeDislike/>
      </Section>
     {/* <div className='test'>
      
      <NameForm/>
      <LikeDislike/>
      
    </div> */}
  
     
      </React.Fragment>

    )
    };
    
export default Merged;
