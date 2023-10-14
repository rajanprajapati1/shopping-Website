import React, { useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../component/Navbar';
import Announcement from '../component/Announcement';
import Products from '../component/Products';
import Newsletter from '../component/Newsletter';
import Footer from '../component/Footer';
import { mobile } from '../Responsive';
import { useLocation } from 'react-router-dom';


const Container = styled.div`

`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
margin: 20px;
${mobile({margin:"5px 20px",display:"flex",flexDirection:"column"})} 

`;
const Title = styled.h1`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight:"0px"})} 

`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"5px 0"})} 

`
const Option = styled.option``
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter,Setfilter] = useState({});
    const [sort,Setsort] = useState("Newest")
    const HandleFilter =(e)=>{
   const value = e.target.value;
   Setfilter({
    ...filter,
    [e.target.name]  : value
   })
}
console.log(sort)
// console.log(filter)
return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Title>Dresses</Title>
    <FilterContainer>
        <Filter>   <FilterText>Filter Products:</FilterText>
        <Select name="color"  onChange={HandleFilter}>
        <Option  disabled>
            Color
        </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
        </Select>
        <Select name="size"  onChange={HandleFilter}>
        <Option disabled >
            Size
        </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
             </Filter>
        <Filter>      <FilterText>Sort Products:</FilterText> 
        <Select  onChange={(e)=> Setsort(e.target.value)}>
            <Option  value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
        </Select>        
         </Filter>
    </FilterContainer>
        <Products cat={cat} filter={filter} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
