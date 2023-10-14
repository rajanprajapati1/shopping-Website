import React from 'react'
import styled from 'styled-components'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Pinterest from '@mui/icons-material/Pinterest'
import Location from '@mui/icons-material/LocationOn'
import Call from '@mui/icons-material/Call'
import Mail from '@mui/icons-material/Mail'
import { mobile } from '../Responsive'

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
${mobile({flexDirection:"column"})} 

`;
const First = styled.div`
flex:2;
margin: 15px ;
`;
const Logo = styled.div`
padding:10px 0 ;
font-size: 30px;
font-weight: 800;
`
const Des = styled.div`
font-size: 18px;
font-weight: 400;
padding-bottom: 20px;
margin:  0 2px;
width: 95%;
`
const Icons = styled.div`
display: flex;
align-items: center;
margin-top: 1.3vw;
`
const Second = styled.div`
flex:2;
padding-top: 2vw;
${mobile({display:"none",})} 
`;

const Side = styled.div`
display: flex;
justify-content: space-between;
`
const  Title = styled.h2`
font-size: 20px;
margin-bottom: 1vw;
`
const  Links = styled.h3`
font-size: 22px;
font-weight: 300;
padding: 5px;
transition:  0.5s ease;

`
const Third = styled.div`
flex:1.2;
margin-top:2vw;
${mobile({backgroundColor:"#fff8f8"})} 

`;
const Details = styled.div`
font-size: 18px;
display: flex;
align-items: center;
margin-top: 15px;
margin-bottom:15px ;
margin-left: 5px;

`
const Footer = () => {
  return (
    <Container>
      <First>
        <Logo>CRUX#</Logo>
        <Des>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Des>
        <Icons>
            <Facebook style={{ fontSize:'35px',marginRight:"2.5vw",backgroundColor: "blue", borderRadius:'50%'}}/>
                <Instagram style={{ fontSize:'35px',marginRight:"2.5vw",backgroundColor:"Pink" , borderRadius:'50%'}}/>
                <Twitter style={{ fontSize:'35px',marginRight:"2.5vw",backgroundColor:"skyblue" , borderRadius:'50%'}}/>
                <Pinterest style={{ fontSize:'35px',marginRight:"2.5vw",backgroundColor:"red" , borderRadius:'50%'}}/>
        </Icons>
      </First>
      <Second>
<Title>Useful Links</Title>
<Side>
    <Des>
    <Links>Home</Links>
    <Links>Man Fashion</Links>
    <Links>Accessories</Links>
    <Links>Order Tracking</Links>
    <Links>Wishlist</Links>
    </Des>
    <Des>
        <Links>Cart</Links>
        <Links>Woman Fashion</Links>
        <Links>My Account</Links>
        <Links>Wishlist</Links>
        <Links>Terms</Links>
    </Des>
</Side>
      </Second>
      <Third>
        <Title>Contact</Title>
<Details><Location/>   622, Dixie Path ,South Poles</Details>
<Details><Call/>  + 123 45 6789</Details>
<Details><Mail/>      Contact@rajan.dev</Details>
<Icons>

</Icons>

      </Third>
    </Container>
  )
}

export default Footer
