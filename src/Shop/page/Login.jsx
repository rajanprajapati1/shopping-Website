import React from 'react'
import { styled } from 'styled-components'
import { mobile } from '../Responsive';


const Container  = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.2)), teal;

background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content:center;
`;

const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background: white;
${mobile({width:"75%"})} 
      `;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 15px 0 ;
padding: 10px;
`;
const Button = styled.button`
width: 100%;
border: none;
background-color: teal;
padding: 12px 20px;
color: white;
font-weight: 500;
`;
const Link = styled.a`
margin: 5px 0 ;
font-size: 12px;
text-decoration: underline;
font-weight: 500;
cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
<Wrapper>
<Title>SIGN IN</Title>
<Form>
    <Input  placeholder="username"/>
    <Input  placeholder="password"/>
    <Button>LOGIN</Button>
    <Link>DO NOT YOU REMEMBER THE PASSWORD ? </Link>
    <Link>CREATE A NEW ACCOUNT !</Link>
</Form>
    </Wrapper>
    
    </Container>
  )
}

export default Login
