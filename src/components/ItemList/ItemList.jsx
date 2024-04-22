import React from 'react'
import Item from '../Item/Item'
import { Box } from "@chakra-ui/react";

const ItemList = ({ products }) => {



  return (
    <div>
        {products.map((elem) => (
         <Box key={elem.id}>
         <Item {...elem} />
         </Box>
         ))}
    </div>
  )
}

export default ItemList
