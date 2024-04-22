import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, Image, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const Item = ({ id, description, title, price, image, categoria, stock }) => {
  return (
    
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
  
      <Card maxW='sm'>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
         <Image
         src={image}
         borderRadius='lg'/>
          <Text>{description}</Text>
          ${price}
          <Text>
          </Text>
        </CardBody>
        <CardFooter>
        <Link to={`/producto/${id}`}>
        <Button>Mas Informacion</Button>
          </Link>
        
        </CardFooter>
      </Card>
    
    </Flex>
  );
};

export default Item;

