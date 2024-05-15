import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { BeatLoader } from "react-spinners"
import { Box, Flex } from '@chakra-ui/react'



const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()


    const navigate = useNavigate()
    useEffect(() => {
       getProductById(productId)
       .then((prod) => {
        if(!prod) {
          navigate('/*')
        }else{
       setProducto(prod)}
        }
      )
       .catch((error) => console.log(error))
       .finally(() => setLoading(false))
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