import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {Flex, Heading, Box, Button, ButtonGroup} from '@chakra-ui/react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex className='menuinicial'>   
      <ButtonGroup gap='4' ml={20}>
        <Button colorScheme='teal'><Link to='/'>Inicio</Link></Button>
        <Button colorScheme='teal'><Link to='/categoria/Accesorios'>Accesorios</Link></Button>
        <Button colorScheme='teal'><Link to='/categoria/Alimentos'>Alimentos</Link></Button>
        <Button colorScheme='teal'><Link to='/categoria/Sale'>Sale</Link></Button>
      </ButtonGroup>
    
      <CartWidget /> 
 
    </Flex>
  )
}

export default NavBar