import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../Responsive';
const Container = styled.div`
        height : 60px;
        ${mobile({height:"50px" })} `;

const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${mobile({padding:"10px 0px" })} 
        `;
const Language = styled.div`
font-size: 16px;
${mobile({display:"none" })} 

cursor: pointer;
`
const Leftside = styled.div`
display: flex;
flex: 1;
align-items: center;
`
const Centerside = styled.div`
flex: 1;
text-align: center;
`
const Rightside = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent:"center" ,flex:"2"})} 


`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
border-radius: 0.3vw;
align-items:center;
margin-left: 25px;
padding:5px;
`;

const InputField = styled.input`
border:none;
background-color: transparent;
${mobile({width:"50px" })} 

`

const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize:"24px"})} 

`
const MenuItem = styled.div`
cursor: pointer;
font-size: 16px;
font-weight: 500;
margin-left: 25px;
margin-right: 5px;
${mobile({fontSize:"12px" ,marginLeft:"10px"})} 

`
const Navbar = () => {

    return (<>
        <Container>
            <Wrapper>
                <Leftside>
                    <Language>EN</Language>
                    <SearchContainer>
                        <InputField placeholder='search' />
                        <SearchIcon  style={{color:"gray",fontSize:"18px"}}/>
                    </SearchContainer>
                </Leftside>
                <Centerside><Logo>#Crux</Logo></Centerside>
                <Rightside>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={44} color="primary">
                            <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Rightside>
            </Wrapper>
        </Container>
    </>
    )
}

export default Navbar
