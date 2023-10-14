import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../component/Navbar';
import Announcement from '../component/Announcement';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { mobile } from '../Responsive';
import { useLocation } from 'react-router-dom';
const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding: "10px",flexDirection:"column"})} 

`;
const Imgcontainer = styled.div`
flex: 1;

`;
const InfoConatiner = styled.div`
flex: 1;
padding:  0px 50px;
${mobile({padding: "10px"})} 

`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})} 

`;
const Title = styled.h1`
font-weight: 200;
`;
const DESC = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-size:40px;
font-weight: 100;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
${mobile({width: "100%",})} 

`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColorOption = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
margin: 0 8px;
cursor: pointer;
`;
const FilterSizeSELECT= styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption = styled.option``;

const  AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
${mobile({width: "100%",})} 
justify-content: space-between;

`
const AmountConatiner = styled.div`
font-weight: 700;
display: flex;
align-items: center;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 8px;
`;
const  Button = styled.button`
padding: 14px;
border:2px solid teal;
font-weight: 500;
background-color: white;
cursor: pointer;
&:hover{
    background-color: #f8f4f4;
}
`;
const Product = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Imgcontainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="jeans" />
                </Imgcontainer>
                <InfoConatiner>
                    <Title>Denim Jumpsuit</Title>
                    <DESC>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque in explicabo porro consequatur facilis aperiam quasi dicta quisquam harum voluptates perferendis a praesentium provident, ducimus sunt. Nisi, obcaecati. Fugit, officiis!</DESC>
                    <Price>$20</Price>
                <FilterContainer>
<Filter>
    <FilterTitle>Color</FilterTitle>
    <FilterColorOption color="black"/>
    <FilterColorOption color="darkblue"/>
    <FilterColorOption color="gray"/>
</Filter>
<Filter>
    <FilterTitle>Size</FilterTitle>
<FilterSizeSELECT>
   <FilterSizeOption>XS</FilterSizeOption>
   <FilterSizeOption>S</FilterSizeOption>
   <FilterSizeOption>M</FilterSizeOption>
   <FilterSizeOption>L</FilterSizeOption>
   <FilterSizeOption>XL</FilterSizeOption>
   </FilterSizeSELECT>

</Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountConatiner>
                    <Add/>
                    <Amount>1</Amount>
                    <Remove/>
                    </AmountConatiner>
                    <Button>ADD To CART</Button>
                </AddContainer>
                </InfoConatiner>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
