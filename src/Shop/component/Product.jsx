import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutline from '@mui/icons-material/SearchOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
background-color: rgb(0,0,0,0.3);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;

`;
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display:flex;
align-items: center;
justify-content: center;
background-color: white;
position: relative;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
&:hover ${Info}{
opacity: 1;
}
`;
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
position:absolute;
`;
const Image = styled.img`
width: 75%;
z-index: 2;
`;
const Icon = styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover{
    background-color: white;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutline/>
            </Icon>
            <Icon>
                <FavoriteIcon />
            </Icon>
            </Info>
        </Container>
    )
}

export default Product
