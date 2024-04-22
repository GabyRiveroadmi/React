import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, SimpleGrid, Image, Flex } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({title, price, description, category, image, stock}) => {
  return (
    <SimpleGrid>
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
        <Text>{description}</Text>
        <CardFooter>     
          <ItemCount stock={stock} initialValue={1} />
        </CardFooter>
      </Card>
      </Flex> 
    </SimpleGrid>
  )
}

export default ItemDetail