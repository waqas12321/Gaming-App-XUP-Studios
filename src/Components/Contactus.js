import React from 'react'

import { styled } from 'styled-components'



const ContactUs = () => {
  return (
    <Wrapper>

<div className='section'>
    
<div className='con__1'>
<span className='sp__1'>LET'S</span> <span className='sp__2'>WORK TOGETHER</span>
</div>
<div className='con__2'>
Please fill in the form and our representative will get back to you.
</div>
<div className='con__3'>
    <div className='con__3__1'>
        
    </div>
    <div className='con__3__2'>
        <div className='con__3__2__1'>
            <div className='content'>CONTACT</div>
        </div>
      <div className='con__3__2__2'>
   <form action='https://formspree.io/f/mvoegowq' method='POST'>
   <div>
            <input type='text' placeholder='Name*' name='username'/>
        </div>
        <div>
            <input type='email' placeholder='E-Mail*' name='email'/>
        </div>
        <div>
            <input type='number' placeholder='Mobile*' name='mobile'/>
        </div>
        <div>
            <input type='text' placeholder='Topic*' name='topic'/>
        </div>
        <div>
            <input type='text' placeholder='query' name='query'/>
        </div>
        <div>
            <button type='submit'>REQUEST A QUOTE</button>
        </div>
   </form>
      </div>
    </div>
    <div className='con__3__3'></div>
    

</div>
</div>

    </Wrapper>
  )
}

export default ContactUs
const Wrapper=styled.div`



.section{
    width:100%;
    
    background-image: url("/images/contactus_bg.webp");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
    top: 40px;
    z-index: 1;
display:flex;
flex-direction:column;
padding-top:80px;
align-items:center;
}

.sp__1{
    font-size: 47px;
    line-height: 63px;
    font-weight: 700;
    color:#fff;
}
.sp__2{
    font-weight: 700;
    text-transform: uppercase;
    font-size: 65px;
    color: #f7b12d;
    margin-right:10px;
}

.con__2{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color:#fff;
    margin-top:10px;

}
.con__3{
   
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  
    margin-top: 78px;
    margin-right: 61px;
 

}
.con__3__1{
  
    background-image: url(/images/cu__1.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
    width: 300px;
    position: relative;
    top: -66px;
    left: 18px;
    z-index:1;
}
.con__3__2{
   
    display:flex;
    flex-direction:row;
    position:relative;
    z-index:3;
  
   
}
.con__3__2__1{
    
    background-color: #00cbe3;
    width:50px;
 


}
.content{
    transform: rotate(-90deg);
    position:relative;
    top:292px;
    letter-spacing: 10px;
    color:#fff;

}
.con__3__2__2{
   
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.7);
    width: 555px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-radius: 0px 50px 0px 0px;
  
  
    
}
.con__3__3{

    background-image: url(/images/cu__2.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 
    width: 205px;
    position: relative;
    top: 59px;
    right: 53px;
    z-index: -1;
}
input{
    border: none;
    border-bottom: 1px solid #9f9999b3;
    padding: 10px 13px;
   
    font-size: 15px;
    margin-bottom: 28px;
    width: 390px;
    background: transparent;
    color: white;


}
::placeholder{
    color:#fff;
}
button{
    background-color: #ffb700;
    border: 0;
    padding: 8px 54px 8px 40px;
    width: auto;
    border-radius: 28px;
    font-size: 16px;
    color: white;
    margin: 25px 0px 25px 118px;
}
@media (max-width: 480px){
    .section{
        width:100%;
        height:140vh;
        
        background-image: url("/images/contactus_bg.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
        top: 40px;
        z-index: 1;
    display:flex;
    flex-direction:column;
    padding-top:80px;
    align-items:center;
    }

    .con__1{
        width:80vw;
        text-align:center;
    
    }
    .con__2{
        width:85vw;
        text-align:center
    }
    
    .sp__1{
        font-size: 26px;
        line-height: 34px;
        font-weight: 700;
        color:#fff;
    }
    .sp__2{
        font-weight: 700;
        text-transform: uppercase;
        font-size: 33px;
        color: #f7b12d;
        margin-right:10px;
    }
    
    .con__2{
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color:#fff;
        margin-top:10px;
    
    }
    .con__3{
       
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      
        margin-top: 78px;
        margin-right: 0px;
    

    }
    .con__3__1{
      
        display:none;
    }
    .con__3__2{
       
        display:flex;
        flex-direction:row;
        position:relative;
        z-index:3;
 
        width:85vw;
        
       
    }
    .con__3__2__1{
        
        background-color: #00cbe3;
        width:10vw;
       
    
    
    }
    .content{
        transform: rotate(-90deg);
        position:relative;
        top:292px;
        letter-spacing: 10px;
        color:#fff;
    
    }
    .con__3__2__2{
       
        box-shadow: none;
        background-color: rgba(0, 0, 0, 0.7);
        width: 75vw;
        display: flex;
        flex-direction: column;
        padding: 40px;
        border-radius: 0px 50px 0px 0px;
        
      
        
    }
    .con__3__3{
       
        display:none;
    }
    input{
        border: none;
        border-bottom: 1px solid #9f9999b3;
        padding: 10px 13px;
       
        font-size: 15px;
        margin-bottom: 28px;
        width: 180px;
        background: transparent;
        color: white;
    
    
    }
    ::placeholder{
        color:#fff;
    }
    button{
        background-color: #ffb700;
        border: 0;
        padding: 5px 20px 5px 22px;
        width: 180px;
        border-radius: 28px;
        font-size: 15px;
        color: white;
        margin: 5px 0px 25px 0px;
    }

}

`