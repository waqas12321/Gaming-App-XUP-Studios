import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
      },[])
  return (
    <Wrapper>
        <div className='services__1' data-aos="fade-right" data-aos-once="true" >
            {<span   className='sp__1'>WE ARE</span> }
            <span   className='sp__2'>A HOST OF COMPREHENSIVE</span>
            <span className='sp__3'>SERVICES</span>

        </div>
        <div className='services__2'>
        Being a top game development studio, we offer a host of top-notch services for our clients and excel at all of them. These range from game development across top platforms to projects on leading technologies such as the metaverse and NFTs.
</div>
<div className='services__3'>
    <div className='service__3__1' data-aos="zoom-in" data-aos-once="true"     data-aos-delay="500"  >
        <div className='service__3__1__a'> 
  
      <img src="/images/game.png"/>
     
      <div>GAME DEVELOPMENT</div>
        </div>
        <div className='service__3__1__b'>
        We develop stunning games for a wide variety of platforms. Being a dedicated video game studio, our expertise extends to numerous genres such as RPG, MMORPG, casual, hyper-casual, card, etc. No matter the requirements, we execute game projects of the highest quality.
        </div>
        <div className='service__3__1__c'>
            <ul>
                <li><a>Mobile Game Development</a></li>
                <li><a>Mobile Game Development</a></li>
                <li><a>Mobile Game Development</a></li>
                <li><a>Mobile Game Development</a></li>
                <li><a>Mobile Game Development</a></li>
                <li><a>Mobile Game Development</a></li>
              

            </ul>
        </div>
    </div>
    <div className='service__4' data-aos="fade-left"  data-aos-once="true">
        <img src="/images/game__2.webp"/>
    </div>

</div>


    </Wrapper>
  )
}

export default Services;
const Wrapper=styled.div`

padding-top:100px;
width:100%;
height: 94vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

.services__1{
    margin-bottom:20px;
}
.services__2{
    width:1159px;
    font-weight: 500;
    font-size: 19px;
    text-align: center;
    line-height: 1.5;
    color: #212529;
    margin-bottom:100px;

 

}
.services__3{
    height: 67vh;
    width:80%;
    
   
    background-image: url("/images/services.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;

display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
}
.service__3__1{
    position:relative;
    left:35px;
}
.service__3__1__a{
    
    display:flex;
    flex-direction:row;
 
    align-items:center;
    width:500px;
}
.service__3__1__a div{
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 600;
    color:white;
    margin-left:10px;
}
.service__3__1__a img{
    width: 75px;
    height: 53px;
}
.service__3__1__b
{
    margin-top:10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    width: 621px;
    color: #fff;
}
.sp__1{
    
    font-size: 23px;
    font-weight: 500;
    letter-spacing: 9px;
    margin-right: 14px;
       color:#848484
}
.sp__2{
    color: #4b535a;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
    margin-right: 9px;
}
.sp__3{
   font-size: 57px;
    line-height: 63px;
    color: #f7b12d;
    font-weight:600
    
}
.service__3__1__c{
    
    width: 602px;
    margin-top:20px;

}
.service__3__1__c ul{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-between;
}
.service__3__1__c ul li{

    list-style:none;
    border-radius:75px;
    border:1px solid white;
    padding:12px 26px;
    margin:7px 0px;
    
}
.service__3__1__c ul li a{
    font-size:18px;
    font-weight:500;
    color:white;
}
.service__4{
   position:relative;
   left:42px;
 
}
.service__4 img{
    width: 475px;
    height: 590px;
    
}


.service__3__1__c ul li:hover{
    background-color: #ffb700;
    border:none;
}
@media (max-width: 480px){
    
    padding-top:50px;
    
    width:100%;
    height: 180vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    .services__1{
        margin-bottom: 20px;
        width: 80vw;
    }
    .services__2{
      
        width: 80vw;
        font-weight:400;
        font-size: 15px;
        text-align: center;
        line-height: 1.5;
        color: #212529;
        margin-bottom:100px;
    
     
    
    }
    .services__3{
        height: 95vh;
        width:90%;
        
       
        background-image: url("/images/services.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding-top: 265px;
    border-radius: 80px 0px 0px 0px;
    }
    .service__3__1{
        position: relative;
        left: 0px;
        width: 75vw;
    }
    .service__3__1__a{
        
        display:flex;
        flex-direction:row;
     
        align-items:center;
        width:75vw;
    }
    .service__3__1__a div{
        text-transform: uppercase;
        font-size: 23px;
        font-weight: 600;
        color:white;
        margin-left:10px;
    }
    .service__3__1__a img{
        width: 40px;
        height: 35px;
    }
    .service__3__1__b
    {
        margin-top:15px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        
        color: #fff;
        width:75vw;
        text-align:center;
      
    }
    .service__3__1__c{
        
        width: 80vw;
        margin-top:20px;
    display:flex;
    align-items:start;
    }
    .service__3__1__c ul{
        display:flex;
        flex-direction:column;
        flex-wrap: nowrap;
        justify-content:space-between;
        position: relative;
        right: 30px;
    }
    .service__3__1__c ul li{
    
        list-style:none;
        border-radius:75px;
        border:1px solid white;
        padding: 5px 0px 5px 14px;
        margin: 7px 0px;
        width: 191px
        
    }
    .service__3__1__c ul li a{
        font-size:13px;
        font-weight:400;
        color:white;
    }
    .service__4{
        position: relative;
        left: 75px;
       
        bottom: 189px;
    }
    .service__4 img{
        width: 190px;
        height: 240px;
        
    }
    
    
    .service__3__1__c ul li:hover{
        background-color: #ffb700;
        border:none;
    }
    .sp__1{
    
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 7px;
        margin-right: 7px;
           color:#848484
    }
    .sp__2{
        color: #4b535a;
        text-transform: uppercase;
        font-size: 23px;
        font-weight: 700;
        margin-right: 9px;
    }
    .sp__3{
       font-size: 26px;
        line-height: 34px;
        color: #f7b12d;
        font-weight:600
        
    }
    }
`