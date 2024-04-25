import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, SimpleGrid, Image, Flex, Box, Center } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({title, price, description, category, image, stock}) => {
  
  return (
    
    <Box textAlign="center" fontSize="sm">  
  <SimpleGrid columns={1} spacing={4}>
    <Flex justifyContent="center">
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
        </CardFooter>
      </Card>
    </Flex>
  </SimpleGrid>
</Box>

  )
}

export default ItemDetail