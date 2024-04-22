import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  
  useEffect(() => {
    
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    
    
    dataProducts
     .then((el) => setProducts(el))
     .catch((error) => console.log(error))
  }, [categoryId])


  return (
    <Box>
    <Heading textAlign={'center'} mt={10} color={'black'}>{title} </Heading>
    <ItemList products={products} />
    </Box>
  )
}

export default ItemListContainer