import React from 'react'
import styled from 'styled-components';
import Send from '@mui/icons-material/Send';
import { mobile } from '../Responsive';


const Container = styled.div`
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height:60vh;`
const Title = styled.h1`
font-size: 70px;
`;
const Descr = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign:"center"})} 

`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid gray;
${mobile({width:"80%"})} 

`;
const Input = styled.input`
border: none;
flex: 8;
padding: 0 10px;
outline:none; 
`;
const ButtonTAG = styled.button`
flex: 2;
border: none;
background-color: teal;
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Descr>Get timely update from your favourite products.</Descr>
            <InputContainer>
                <Input placeholder='Your email' />
                <ButtonTAG><Send/></ButtonTAG>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
