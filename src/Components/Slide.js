import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Slide = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <Wrapper>
    <div className='slide__1' data-aos="zoom-in" data-aos-once="true" 
    >
        AN AWARD WINNIG <br/> GAME DEVELOPMENT STUDIO
    </div>
    <div className='slide__2'>
    XUP Studios where Unity expertise meets hyper-casual gaming magic, powered by Blender's visual wizardry. We are Crafting Hyper-Casual Delights and Powering Triple-A Dreams
    </div>
    <div></div>
    </Wrapper>
  )
}

export default Slide
const Wrapper=styled.div`

width:100%;
height:50vh;
position:absolute;
bottom:0px;
display:flex;
flex-direction:column;
align-items:center;
.slide__1{
    width:1500px;
 
    color: #FFF;
    text-align: center;
    font-size: 77.283px;
    font-family: Inter;
    font-style: italic;
    font-weight: 900;
    line-height: 133.523%;
    margin-bottom:20px;
   

}
.slide__2{
   
    width: 1310px;


    color: #fbb33a;
   
    margin-bottom: 0;
    text-align: center;
    font-size: 19px;
    filter: brightness(100%);
    font-family: Inter;
    font-style: italic;
   
}


@media (max-width: 480px){
  
width:100%;
height:50vh;
position:absolute;
bottom:0px;
display:flex;
flex-direction:column;
align-items:center;
.slide__1{
  color: #FFF;
  text-align: center;
  font-size: 32px;
  font-family: Inter;
  font-style: italic;
  font-weight: 600;
  line-height: 133.523%;
  margin-bottom: 20px;
  width: 90vw;

}
.slide__2{
   
  width: 98vw;


    color: #fbb33a;
   
    margin-bottom: 0;
    text-align: center;
    font-size: 15px;
    filter: brightness(100%);
    font-family: Inter;
    font-style: italic;
   
}


}

`