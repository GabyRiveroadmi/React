import React, { useContext } from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";
import './CartWidget.css';
import { Box, Badge, Flex } from '@chakra-ui/react';
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  return (
    <Box mr={50}> 
      
      <BsFillCartCheckFill className='carrito'/>
      <Badge>{getQuantity()}</Badge>

    </Box>
  )
}

export default CartWidget