import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Services</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Products</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Projects</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact</a></li>
    </ul>
    <p class="text-center text-muted">© 2023 Gaming studio, XUP</p>
  </footer>
</div>
</Wrapper>
  )
}

export default Footer
const Wrapper=styled.section`



background-color: #1a1c28;
color:white;
height: 20vh;
margin-top:130px;
.border-top {
 
    border-top: 2px solid white;
}
.text-muted {

    color: white!important;
    font-size:15px;
}
.py-5 {
    padding-top: 3rem!important;
    padding-bottom: 0rem!important;
    padding-left: 5rem;
}
.btn-primary {

    --bs-btn-bg: #ffc107;
    --bs-btn-border-color: #ffc107;

    --bs-btn-hover-bg: #ffc107;
    --bs-btn-hover-border-color: #ffc107;
 
}
.h5,h5{
    color: #f7bf2e;
}

`