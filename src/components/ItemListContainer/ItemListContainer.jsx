import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { db } from "../../config/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId  } = useParams()

  
  
  useEffect(() => {
    setLoading(true)

  const getData = async () => {
    const coleccion = collection(db, 'productos')

    const queryRef = !categoryId ?
    coleccion
    :
    query(coleccion, where('category', '==', categoryId))

    const response = await getDocs(queryRef)
    
    const productos = response.docs.map((doc) =>{
      const newItem = {
        ...doc.data(),
        id: doc.id
      }
      return newItem
      
    })
    setProducts(productos)
    setLoading(false)


    console.log(response)
  }
  getData()
 
  }, [categoryId])


  return (
    <Box>
     <Heading textAlign={'center'} mt={10} color={'black'}>{title} </Heading>
     {
        loading ? 
        <Flex justify={"center"} align={"center"} h={"80vh"}>
        
        <BeatLoader color="#36d7b7" />
        </Flex>
        :
      <ItemList products={products} />
      }   
    </Box>
  )
}

export default ItemListContainer;