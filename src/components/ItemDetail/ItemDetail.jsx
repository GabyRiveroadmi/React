import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, Image, Flex, ButtonGroup } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({title, price, description, category, image, stock}) => {
  
  return (
    <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Flex>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
         <Image
         src={image}
         borderRadius='lg'/>
          
          ${price}
          <Text>{category}</Text>
        </CardBody>
        <CardFooter>
         
          <ItemCount stock={stock} initialValue={1} />
        
        </CardFooter>
      </Card>
      </Flex> 
    </SimpleGrid>
  )
}

export default ItemDetail