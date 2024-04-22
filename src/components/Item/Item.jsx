import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, Image, Flex, ButtonGroup } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';


const Item = ({ id, description, title, price, image, categoria, stock }) => {
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
          <Text>{description}</Text>
          ${price}
          <Text>
            
          </Text>
        </CardBody>
        <CardFooter>
        <Link to={`/producto/${id}`}>
            Mas Informacion
          </Link>
        </CardFooter>
      </Card>
      </Flex> 
    </SimpleGrid>
  );
};

export default Item;

