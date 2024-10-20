import React from 'react'
import {styled} from "styled-components";
import Navbar from './Navbar';


const Header = () => {
  return (
    <Wrapper>
      <div className='logo'>
      
      </div>
  <Navbar/>
    </Wrapper>
  )
}

export default Header
const Wrapper=styled.div`
padding-top:30px;
height:60px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:start;
.logo{
  width:225px;
  height:60px;
  background-image: url("/images/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 480px){
  padding-top:30px;
height:60px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:start;
.logo{
  width:200px;
  height:60px;
  background-image: url("/images/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


}

`