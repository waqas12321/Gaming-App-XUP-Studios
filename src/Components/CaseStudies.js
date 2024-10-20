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
        <div style={{display:"inline"}} className='cs__1__a' >CASE STUDIES</div>
        <div style={{display:"inline"}} className='cs__1__b' data-aos="fade-left">
        AN INSIDE LOOK AT
        </div>
    </div>
    <div className='cs__2' data-aos="fade-left"  data-aos-once="true">SOME OF OUR PROJECTS</div>
    <div className='cs__3'>
        <div className='cs__3__a'data-aos="fade-right">
            <p>SUPER CLUB SOCCER</p>
        </div>
        <div className='cs__3__b'>
            <div className='cs__3__b__1' data-aos="fade-left">
                <p>FARMING SIMULATION GAMES</p>
            </div>
            <div className='cs__3__b__2' data-aos="fade-left">
                <p>LAZY HORSE - METAVERSE</p>
            </div>
        </div>
    </div>
   </Wrapper>

  )
}

export default CaseStudies
const Wrapper=styled.section`
margin-top:150px;
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
    color: #f7b12d;
    font-size: 70px;
    font-weight: 700;
    margin-top:15px;
}
.cs__3{
   
    display:flex;
    flex-direction:row;
    gap:35px;
    margin-top:55px;

}
.cs__3__a{
    width:38vw;
  
    height: 520px;
    background-image: url("/images/cs__img__1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.cs__3__b{
    width:28vw;

    display:flex;
    flex-direction:column;
    height: 509px;
}
.cs__3__b__1{
    width:28vw;
    height: 32vh;
  
    background-image: url("/images/cs__img__2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


}
.cs__3__b__2{
    margin-top:35px;
    width:28vw;
    height: 32vh;
   
    background-image: url("/images/cs__img__3.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.cs__3__b p{
    width: 431px;
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
    top: 466px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
}
@media (max-width: 480px){
    margin-top:150px;
margin-bottom:100px;
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
.cs__1{
    width:90vw;
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
    width:80vw;
    text-align:center;
}

.cs__3{
   
    display:flex;
    flex-direction:column;
    gap:35px;
    margin-top:55px;

    gap: 22px;
   
    width: 88vw;
  
    flex-wrap: wrap;

}
.cs__3__a{
    width:88vw;
  
    height: 40vh;
    background-image: url("/images/cs__img__1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.cs__3__b{
    width:88vw;

    display:flex;
    flex-direction:row;
    height: 30vh;
    gap:15px;
}
.cs__3__b__1{
    width:42vw;
    height: 30vh;
  
    background-image: url("/images/cs__img__2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


}
.cs__3__b__2{
    margin-top:0px;
    width:42vw;
    height: 30vh;
   
    background-image: url("/images/cs__img__3.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.cs__3__b p{
    width: 42vw;
    height: 8vh;
    background: #e6e6e6;
    position: relative;
    top: 186px;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px 1px;

}
.cs__3__a p{
    background: rgba(0,0,0,.7);
    position: relative;
    width: 100%;
    top: 199px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    font-weight:600;
}

}

`