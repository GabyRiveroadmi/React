import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, Image, Flex, Stack, Center } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const Item = ({ id, description, title, price, image, categoria, stock }) => {
  return (
    
    <Flex justify="center" align="center" padding={3} spacing={6} maxW="100%" mx="auto"> 
      
      <Card maxW="md" width="100%">
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
        <Center>
         <Image src={image}
         borderRadius='lg' w="200px" h="200px" objectFit="cover" /> 
         </Center>        
          <Text textAlign="center" padding={5}> ${price} </Text>
        </CardBody>
        <CardFooter>
        <Link to={`/producto/${id}`}>
        <Center> 
        <Button>Mas Informacion</Button> 
        </Center>  
          </Link>
        
        </CardFooter>
      </Card>
    
    </Flex>
  );
};

export default Item;

