import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";


const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId  } = useParams()

  
  
  useEffect(() => {
    
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()
    
    
    dataProductos
     .then((el) => setProducts(el))
     .catch((error) => console.log(error))
     .finally(() => setLoading(false))
  }, [categoryId])


  return (
    <Box>
     <Heading textAlign={'center'} mt={10} color={'black'}>{title} </Heading>
     {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'50vh'}>

        <BeatLoader color="#36d7b" />
        </Flex>
        :

      <ItemList products={products} />
      }   
    </Box>
  )
}

export default ItemListContainer