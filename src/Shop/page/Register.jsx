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
    width:40%;
    padding:20px;
    background: white;
${mobile({width:"80%"})} 
      `;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0 ;
padding: 10px;
${mobile({border:"1px solid gray",borderRadius:"2px"})} 
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`;
const Button = styled.button`
width: 100%;
border: none;
background-color: teal;
padding: 12px 20px;
color: white;
font-weight: 500;
`;
const Register = () => {
  return (
    <Container>
    <Wrapper>
<Title>CREATE AN ACCOUNT</Title>
<Form>
    <Input  placeholder="name"/>
    <Input  placeholder="lastname"/>
    <Input  placeholder="username"/>
    <Input  placeholder="email"/>
    <Input  placeholder="password"/>
    <Input  placeholder="confirm password"/>
    <Agreement>
        By creating an account ,I consent to the processing of my personal data in accordance with the <b>PRIVACY  POLICY</b>
    </Agreement>
    <Button>CREATE</Button>
</Form>
    </Wrapper>
    </Container>
  )
}

export default Register
