import React from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";
import './CartWidget.css';
import { Box, Badge, Flex } from '@chakra-ui/react';

const CartWidget = () => {
  return (
    <Box mr={50}> 
      
      <BsFillCartCheckFill className='carrito'/>

    </Box>
  )
}

export default CartWidget