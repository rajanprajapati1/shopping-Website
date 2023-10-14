import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../component/Navbar'
import Announcement from '../component/Announcement'
import Footer from '../component/Footer'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { mobile } from '../Responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px",})} 

`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
${mobile({marginBottom:"20px"})} 

`
const TopTexts = styled.span`
${mobile({display: "none",})} 
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})} 

`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})} 

`;
const Productdetail = styled.div`
flex: 2;
display: flex;
`;

const ProductImage = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
`;

const Deatils = styled.div`
padding: 20px;
display:flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;

const ProductSIze = styled.span``;

const Pricdetails = styled.span`
  flex: 1;
  display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
`;
const ProductsAmountContainer = styled.span`
  display:flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.span`
font-size: 24px;
margin: 5px;
${mobile({margin:"15px 15px"})} 

`;
const ProductPrice = styled.div`
font-weight: 200;
font-size:30px;
${mobile({marginBottom:"20px"})} 

`
const HR = styled.hr`
background-color: #eee;
border: none;
height: 2px;
`

const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
padding: 20px;
height: 50vh;
border-radius: 10px;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`;

const SummaryItem = styled.div`
margin: 30px 0 ;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
/* border: none; */
font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
<TopButton>CONTINUE SHOPPING</TopButton>
<TopTexts>
    <TopText>Shopping Bag (2)</TopText>
    <TopText>Your Wishlist(0)</TopText>
</TopTexts>
<TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
          <Product>
            <Productdetail>
                <ProductImage src="https://i.ibb.co/S6qMxwr/jean.jpg" alt='image'/>
                <Deatils>
                 <ProductName><b>Product :</b>Denim Jumpsuit</ProductName>
                 <ProductId><b>Id :</b>01245789633</ProductId>
                 <ProductColor color="skyblue"/>
                 <ProductSIze><b>Size :</b>37.5</ProductSIze>
                </Deatils>
            </Productdetail>
            <Pricdetails>
<ProductsAmountContainer>
<Add/>
<ProductAmount>2</ProductAmount>
<Remove/>
</ProductsAmountContainer>
<ProductPrice>$45</ProductPrice>
            </Pricdetails>
          </Product>
          <HR/>
          <Product>
            <Productdetail>
                <ProductImage src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9A79ZhzWb238DtE4i5Nh7KZRsRJUUBY3_XNjTYKucRbXGh5pfM5amuMsz830N1d3LdFv-3s31g7B_iuVkCGClVgdL-oAPgAVNUlPpuQndgv5aPvF1GyDx0A" alt='image'/>
                <Deatils>
                 <ProductName><b>Product :</b>Black Jacket Denim</ProductName>
                 <ProductId><b>Id :</b>0124461616633</ProductId>
                 <ProductColor color="Black"/>
                 <ProductSIze><b>Size :</b>M</ProductSIze>
                </Deatils>
            </Productdetail>
            <Pricdetails>
<ProductsAmountContainer>
<Add/>
<ProductAmount>1</ProductAmount>
<Remove/>
</ProductsAmountContainer>
<ProductPrice>$65</ProductPrice>
            </Pricdetails>
          </Product>
         
            </Info>
            <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$110</SummaryItemPrice>
            </SummaryItem>
             <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
             <SummaryItem>
              <SummaryItemText>ShippinG Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
