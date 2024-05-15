import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'
  import { RiDeleteBin5Fill } from "react-icons/ri";
 


const Cart = () => {
   const { cart, getTotal, removeItem, clearCart } = useContext(Context)
   

  return (
  <TableContainer w={'60%'} m={'0 auto'} mt={10}>
      
  <Table variant='simple'>
    <TableCaption>Estas a un paso de tu finalizar tu compra</TableCaption>
    <Thead>
      <Tr>
        <Th>Producto</Th>
        <Th>Cantidad</Th>
        <Th>Precio</Th>
        <Th>Subtotal</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {cart.map((prod, index) => (
     
     <Tr key={prod.id} ey={prod.id}>
        <Td>{prod.title}</Td>
        <Td>{prod.quantity}</Td>
        <Td>{prod.price}</Td>
        <Td>{prod.price * prod.quantity}</Td>
        <Td><Button onClick={() => removeItem(prod.id)}>
            <RiDeleteBin5Fill />
            </Button>
            </Td> 
      </Tr>

       ))
      
      }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Total: ${getTotal()}</Th>
        <Th>
        <Button onClick={() => clearCart()}>
           Vaciar Carrito
            </Button>
        </Th>
        
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default Cart