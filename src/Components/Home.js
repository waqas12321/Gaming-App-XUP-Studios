import React from 'react'
import { styled } from 'styled-components';
import Header from './Header';
import Slide from './Slide';
import Services from './Services';


const Home = () => {
  return (
  <Wrapper>
    <Header/>
    <Slide/>

  

  </Wrapper>
  )
}

export default Home;
const Wrapper=styled.div`
width:100%;
height:100vh;
background-image: url("/images/img1.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position:relative;



`