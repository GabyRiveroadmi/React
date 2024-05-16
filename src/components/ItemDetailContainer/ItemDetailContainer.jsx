import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { BeatLoader } from "react-spinners"
import { Box, Flex } from '@chakra-ui/react'
import { db } from "../../config/firebase"
import { doc, getDoc } from 'firebase/firestore'
import Context from '../../context/CartContext'

        

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()


    const navigate = useNavigate()
    useEffect(() => {
       const getProduct = async() => {
        const queryRef = doc(db, 'productos', productId)
        const response = await getDoc(queryRef)
        const newItem = {
          ...response.data(),
          id:response.id
        }
        setProducto(newItem)
        setLoading(false)
       }
       getProduct()
      }
      , [productId])

      return (
        <>
          {
            loading ? 
            <Flex justify={'center'} align={'center'} h={'50vh'}>
              <BeatLoader color="#36d7b7" />
            </Flex>
          :
            <Box 
            w={'60%'} 
            minHeight={'40vh'}
            margin={'0 auto'}
            mt={10}
            borderRadius={'10px'}
            >
              <ItemDetail {...producto} />
            </Box>
          }
        </>
      )
    }
    export default ItemDetailContainer