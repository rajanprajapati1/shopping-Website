import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { popularProducts } from '../Data'
import Product from './Product';
import axios from 'axios'
const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = ({cat,filter,sort}) => {
        const [Products ,setProducts ] = useState(popularProducts);
    const [FilterProduct ,setFilterProduct ] = useState([]);
//     useEffect(()=>{
//          const getProduct = async () =>{
//             try {
//                 const res =await axios.get(cat ? `http://localhost:8000/api/product?category=${cat}` 
//                 : `http://localhost:8000/api/product`);
//                 // setProducts(res.data)
//                 console.log(res.data)
//             } catch (error) {
//             }
//          }
//          setProducts(popularProducts)
//          getProduct();
//     },[cat])
// useEffect(()=>{
//     cat && setFilterProduct(
//         Products.filter(item =>{
//             Object.entries(filter).every(([key,value])=>
//             item[key] ? item[key].includes(value) : false
//             )
//         })
//     )
// },[cat,filter,Products])

useEffect(() => {
    // Apply filters when cat or filter changes
    if (cat || Object.keys(filter).length > 0) {
      const filteredProducts = popularProducts.filter((item) => {
        return (
          (!cat || item.category === cat) && // Filter by category if cat is provided
          Object.entries(filter).every(([key, value]) =>
            item[key] ? item[key].includes(value) : false
          ) // Filter by other criteria in filter object
        );
      });
      setFilterProduct(filteredProducts);
    } else {
      // If no filters are applied, use the entire popularProducts data
      setFilterProduct(popularProducts);
    }
  }, [cat, filter]);


    return (    
        <Container>
            {popularProducts.map(item =>
                <Product item={item} key={item.id} />
            )}
        </Container>
    )
}

export default Products
