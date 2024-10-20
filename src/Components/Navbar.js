import React, { useState } from 'react'
import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  const [menu ,setMenu]=useState(false);
  return (
    <Wrapper>
              <div className='menu' onClick={()=>{
        setMenu(!menu)
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul >
      <li><a href="#">HOME</a></li>
      <li><a href="#service1">SERVICES</a></li>
      <li><a href="#service2">WHY US</a></li>
    
 
      <li><a href="#service3">CASE STUDIES</a></li>
      <li><a href="#service4">PROJECTS</a></li>
      <li><a href="#service5">CONTACT US</a></li>

    </ul>
  </Wrapper>
  )
}

export default Navbar
const Wrapper=styled.nav`
margin-top: 20px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    position: relative;
    left: 250px;
ul{
  display:flex;
  flex-direction:row;
 

}
ul li{
  list-style: none;
  text-transform: Uppercase;

  padding: 15px 15px;
}
ul li a{
 
  color: white!important;
  font-weight: 500;
  font-size: 14px;
  text-decoration:none;

}

.menu{
  display: none;
  flex-direction: column;
  width: 30px;
  height: 20px;
  background-color: transparent;
  gap: 6px;
  position: absolute;
  left: 120px;
  top: 35px;


}
.menu span{
  width: 22px;
  height: 8px;
  
  border:2px solid white;
  border-radius: 5px;
  color: #fff;
}
ul li a:hover{
  color: #f7bf2e;
}

@media (max-width: 480px){
  margin-top: 20px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

   
    position: relative;
    left: 0px;
ul{
  display: flex;

  flex-direction: column;
  width: 100%;

  display: none;

  align-items: center;
  margin: 20px 0px 10px  0px;
  padding: 10px 0px;

 

}
ul li{
  list-style: none;
  text-transform: Uppercase;

  padding: 15px 15px;
}
ul li a{
 
  color: white!important;
  font-weight: 500;
  font-size: 14px;
  text-decoration:none;

}
ul li a:hover{
  color: #f7bf2e;
}
ul.open{
  display:flex;
}
.menu{
  display: flex;

}



}
`