import React, { useEffect } from 'react'
import styled  from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
const WhyUs = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
      },[])
  return (
    <Wrapper>
<div className='why__us'>
<div className='why__us__1' data-aos="fade-right" data-aos-once="true">WHY US</div>
<div className='why__us__2' data-aos="fade-right" data-aos-once="true">WHAT MAKES US AN INDUSTRY-LEADING</div>
<div className='why__us__3' data-aos="fade" data-aos-delay="200" data-aos-once="true">GAME DEVELOPMENT COMPANY</div>
<div className='why__us__4' data-aos="fade" data-aos-delay="200" data-aos-once="true">So, why choose XUP Studios? Because we're here to make game development a joyful and successful journey for you."
</div>
<div className='why__us__5' >
    <div className='why__us__5__a'  data-aos="fade-right" data-aos-once="true">
        <div className='box'>
            <div className='box__no'  >01</div>
            <div className='box__heading'>We Get You</div>
        </div>
        <div className='box__p'>
        We're passionate about connecting with the subcontinental audience, crafting games that feel like home.
        </div>
    </div>
    <div className='why__us__5__b' data-aos="fade-left" data-aos-once="true">
    <div className='box'>
            <div className='box__no' >02</div>
            <div className='box__heading'>Hyper-Casual Fun</div>
        </div>
        <div className='box__p'>
        We specialize in making games that are easy to love and hard to put down, ensuring everyone can enjoy the fun.
        </div>
    </div>
    <div className='why__us__5__c' data-aos="fade-right" data-aos-once="true">
    <div className='box'>
            <div className='box__no'>03</div>
            <div className='box__heading'>Unity Fanatics</div>
        </div>
        <div className='box__p'>
        Unity is our jam. We use it to sprinkle magic into every game we create.
        </div>
    </div>
    <div className='why__us__5__d' data-aos="fade-left"  data-aos-once="true">
    <div className='box'>
            <div className='box__no'>04</div>
            <div className='box__heading'>Visual Wizards</div>
        </div>
        <div className='box__p'>
        With Blender, we weave visual enchantments that make your games unforgettable.
        </div>
    </div>
</div>
</div>

    </Wrapper>
  )
}

export default WhyUs

const Wrapper=styled.div`

width:100%;
height:180vh;
background-color: #ffb301;

    margin-top: 130px;
    display:flex;
    justify-content:center;
    .why__us{
        width:80%;
     
        margin-top:30px
    }
.why__us__1{
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 9px;

    color: #fff;
    padding:30px 0px;
}
.why__us__2{
    color: #4b535a;
    text-transform: uppercase;
    font-size: 52px;
    font-weight: 700;
    line-height: 63px;
}
.why__us__3{
    font-weight: 700;
    line-height: 63px;
    font-size: 70px;
    color: #fff;
    width:65%;
    
}
.why__us__4{
    font-size: 18px;
   
    line-height: 23px;
    font-weight: 400;
    color: #fff;
    margin-top:20px;
    width:91%;
}
.why__us__5{
    margin-top:170px;
   
   
    
}
.why__us__5__a{
 
    width:480px;
    height:350px;
    border-radius:100px 0px 100px 100px;
    position: relative;
    left: 245px;
    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
    transition: transform 2s ease-in-out;
   
}
.why__us__5__a:hover{
    transform: translateZ(-100px);
}


.why__us__5__b{
    
    width:480px;
    height:400px;
    border-radius:100px 100px 100px 0px;
    position: relative;
    left: 704px;
    top: -413px;
    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
}
.why__us__5__c{

    width:480px;
    height:400px;
    border-radius:0px 100px 100px 100px;
    position: relative;
    left: 90px;

    bottom: 441px;

    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
   
}
.why__us__5__d{

    width:480px;
    height:400px;
    border-radius:100px 0px 100px 100px;
    position: relative;
    left: 552px;
   
    bottom: 876px;
    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
    
   
}
.box{
    
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:start;
    margin-left: 45px;
    margin-top: 45px;
   
}

    

.box__no{
    font-size: 3.6rem;
    font-family: Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif;
    font-weight: 1000;
    color: #ffca00;
}
.box__heading{
    font-size: 25px;
 
    font-weight: 500;
    word-break: break-word;
    text-transform: uppercase;
    color: #4f5359;
    margin-left:30px;
}
.box__p{
    margin-top:18px;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    color: #4e4e4e;
    margin-left: 45px;
    width:402px;
   
}
@media (max-width: 480px){
    width:100%;
height:370vh;
background-color: #ffb301;

    margin-top: 80px;
    display:flex;
    justify-content:center;
    .why__us{
        width:80%;
     
        margin-top:30px
    }
.why__us__1{
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 7px;

    color: #fff;
    padding:30px 0px 10px 0px;
}
.why__us__2{
    color: #4b535a;
    text-transform: uppercase;
    font-size: 21px;
    font-weight: 700;
    line-height: 34px;
}
.why__us__3{
    font-weight: 700;
    line-height: 39px;
    font-size: 33px;
    color: #fff;
    width:65%;
    
}
.why__us__4{
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #fff;
    margin-top:20px;
    width:90%;
    text-align:justify;
}
.why__us__5{
    margin-top:70px;
  
    display:flex;
    flex-direction:column;
    gap:20px;
   
   
    
}
.why__us__5__a{
 
    width:80vw;
    height:350px;
    border-radius:100px 0px 100px 100px;
    position: relative;
    left: 0px;
    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
    transition: transform 2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
.why__us__5__a:hover{
    transform: translateZ(-100px);
}


.why__us__5__b{
    
    width:80vw;
    height:400px;
    border-radius:100px 100px 100px 0px;
    position: relative;
    left: 0px;
    top: 0px;
    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.why__us__5__c{

    width:80vw;
    height:400px;
    border-radius:0px 100px 100px 100px;
    position: relative;
    left: 0px;

    bottom: 0px;

    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.why__us__5__d{

    width:80vw;
    height:400px;
    border-radius:100px 0px 100px 100px;
    position: relative;
    left: 0pc;
   
    bottom: 0px;
    border: 3px solid #ffffff;
    background: linear-gradient(to top right, #ffffff 0%, #ffffff 30%, #d9d7d5 100%);
    box-shadow: -20px 20px 40px rgba(150, 40, 27, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    
   
}
.box{
    
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-left: 0px;
    margin-top: 45px;
    width: 62vw;
}

    

.box__no{
    font-size: 3rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 1000;
    color: #ffca00;
}
.box__heading{
    font-size: 15px;
 
    font-weight: 500;
    word-break: break-word;
    text-transform: uppercase;
    color: #4f5359;
    margin-left:15px;
}
.box__p{
    margin-top:18px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #4e4e4e;
    margin-left: 0px;
    width: 62vw;
   
}
}
`