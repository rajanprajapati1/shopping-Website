import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined'
import { sliderItems } from '../Data';
import { mobile } from '../Responsive';
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({display:"none"})} 

`;
const Arrow = styled.div`
width:50px;
height: 50px;
background-color: grey;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
bottom:0;
cursor: pointer;
opacity: 0.7;
margin: auto;
z-index: 2;
`;

const Wrapper = styled.div`
display: flex;
height: 100%;
transition: all 1.5s ease;
transform: translateX(${props=>props.SlideIndex * -100}vw);
`;

const Slide = styled.div`
display:flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg};
`
const ImageContainer = styled.div`
height: 100vh;
flex: 1;
`
const Image = styled.img`
height: 80%;
margin-left: 45px;

`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0 ;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;
const Slider = () => {
    const [SlideIndex ,SetSlideIndex] = useState(0)
    const Handleclick = (direction)=>{

   if(direction === "left"){
    SetSlideIndex(SlideIndex > 0 ? SlideIndex -1 : 2)
   }else{
    SetSlideIndex(SlideIndex < 2 ? SlideIndex + 1 : 0)
   }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>Handleclick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper SlideIndex={SlideIndex}>
            {sliderItems.map((item)=>
                <Slide bg={item.bg}>
                    <ImageContainer>
                        <Image src={item.img} alt={item.title} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
            )}
            </Wrapper>
            <Arrow direction="right" onClick={()=>Handleclick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
