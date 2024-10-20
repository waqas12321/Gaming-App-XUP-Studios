import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
const CaseStudies = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
      },[])
  return (
   <Wrapper>
    <div className='cs__1' data-aos="fade-right"  data-aos-once="true">
        <span className='cs__1__a'  >PORTFOLIOS</span>
        <span className='cs__1__b'>
       RECENT PROJECTS
        </span>
    </div>
    <div className='cs__2'  data-aos-once="true" data-aos="fade-left">WE HAVE COMPLETED</div>
 <div className='cs__3'>
   <div className='cs__3__a' data-aos="fade-right" data-aos-once="true"></div>
   <div className='cs__3__b 'data-aos="fade-left" data-aos-once="true"></div>
   <div className='cs__3__c' data-aos="fade-right" data-aos-once="true"></div>
   <div className='cs__3__d' data-aos="fade-left" data-aos-once="true"></div>

 </div>
   </Wrapper>

  )
}

export default CaseStudies
const Wrapper=styled.section`
margin-top:180px;
margin-bottom:100px;
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
.cs__1__a{
    font-weight: 500;
    font-size: 23px;
    letter-spacing: 9px;
    margin-right: 14px;
    color: #848484;
}
.cs__1__b{
    font-size: 57px!important;
    line-height: 58px;
    color: #4b535a;


    font-weight: 700;
}
.cs__2{
    margin-top:15px;
    color: #f7b12d;
    font-size: 70px;
    font-weight: 700;
}
.cs__3{
   
    display: flex;
    flex-direction: row;
    gap: 22px;
    margin-top: 55px;
    width: 80vw;
  
    flex-wrap: wrap;

}
.cs__3__a{
    width: 38vw;
    height: 55vh;
    background-image: url("/images/cs__img__1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border:6px solid black;

}
.cs__3__b{
    width: 38vw;
    height: 55vh;
    background-image: url("/images/rp__img__2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border:6px solid black;

}
.cs__3__c{
    width: 38vw;
    height: 55vh;
    background-image: url("/images/rp__img__2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border:6px solid black;

}
.cs__3__d{
    width: 38vw;
    height: 55vh;
    background-image: url("/images/rp__img__4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border:6px solid black;

}

.cs__3__b p{
    width: 461px;
    height: 6vh;
    background: #e6e6e6;
    position: relative;
    top: 205px;

    font-size: 20px;
    font-weight: 700;
  
    display: flex;
    justify-content: center;
    align-items: center;

}
.cs__3__a p{
    background: rgba(0,0,0,.7);
    position: relative;
    width: 100%;
    top: 490px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
}
@media (max-width: 480px){
    margin-top:180px;
margin-bottom:100px;
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

.cs__1{

    width:80vw;
    text-align:center;
}
.cs__1__a{
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 7px;
    margin-right: 7px;
    color: #848484;
}
.cs__1__b{
    font-size: 26px!important;
    line-height: 34px;
    color: #4b535a;


    font-weight: 700;
}
.cs__2{
    margin-top:8px;
    color: #f7b12d;
    font-size: 33px;
    font-weight: 700;
}
.cs__2{
    width:80vw;
    text-align:center;
}
.cs__3{
   
    display: flex;
    flex-direction: row;
    gap: 22px;
    margin-top: 55px;
    width: 88vw;
  
    flex-wrap: wrap;
    

}
.cs__3__a{
   display:none;

}
.cs__3__b{
    display:none;

}
.cs__3__c{
    width: 95vw;
    height: 40vh;
    background-image: url("/images/rp__img__2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border:6px solid black;

}
.cs__3__d{
    width: 95vw;
    height: 40vh;
    background-image: url("/images/rp__img__4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border:6px solid black;

}

.cs__3__b p{
    width: 461px;
    height: 6vh;
    background: #e6e6e6;
    position: relative;
    top: 205px;

    font-size: 20px;
    font-weight: 700;
  
    display: flex;
    justify-content: center;
    align-items: center;

}
.cs__3__a p{
    background: rgba(0,0,0,.7);
    position: relative;
    width: 100%;
    top: 490px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
}
}


`