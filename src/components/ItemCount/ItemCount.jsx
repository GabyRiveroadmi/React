import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useContext, useState} from 'react'
import useCounter from '../../hooks/useCounter'



const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock, onAdd)

  return (
    <Flex>
      <Button onClick={decrementar}>-</Button>
      <Heading>{count}</Heading>
      <Button onClick={incrementar}>+</Button>

    </Flex>
  )
}

export default ItemCount