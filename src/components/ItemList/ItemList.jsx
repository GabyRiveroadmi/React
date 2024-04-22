import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from "@chakra-ui/react";

const ItemList = ({ products }) => {



  return (
    <Flex w='1800px' h='180px' mt={10} alignContent={3} spacing='40px' justify='center'  >
        {products.map((elem) => (
         <Box key={elem.id}>
           <Item {...elem} />
         </Box>
         ))}
    </Flex>
  )
}

export default ItemList
