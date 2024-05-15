import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Image, Flex, Box, Center } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount"
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BeatLoader } from "react-spinners"


const ItemDetail = ({title, price, description, category, image, stock, id}) => {
  
  const { addItem } = useContext(Context)

  const onAdd = (quantity) => {
    
    const item = {
      id,
      title,
      price,
      stock, 
      category
     }
     addItem(item, quantity)
     
    }
  
  return (
    
    <Box textAlign="center" fontSize="sm">  
  
  <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
      <Card>
        <CardHeader>
          <Heading size="sm">{title}</Heading>
        </CardHeader>
        <CardBody>
        <Center>
          <Image src={image} borderRadius="lg" w="200px" h="200px" objectFit="cover" />
          </Center>
          <Text>${price}</Text>
         
        </CardBody>
        <Center>
        <Text>{description}</Text>
        </Center>
        <CardFooter>
          <ItemCount stock={stock} initialValue={1} />
          <Button onClick={() => onAdd(1)}>Agregar al carrito</Button>
        </CardFooter>
        <Link to='/cart'>Ver carrito</Link>

        
      </Card>
      <BeatLoader color="#36d7b" />
    </Flex>
  
</Box>

  )
}

export default ItemDetail