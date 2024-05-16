import { Image } from '@chakra-ui/react'
import React from 'react'
import { Box } from '@chakra-ui/react'

const PageNotFound = () => {
  return (
    <Box align= 'center' mt={10}>
    <Image w={'50%'} h={'50%'}
    src='data:image/jpeg;base64,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' 
    objectFit={'contain'}
    />
    </Box>
  
  )
}

export default PageNotFound