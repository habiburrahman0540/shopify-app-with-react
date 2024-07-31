import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const RichText = ({title,description,backgroundColor}) => {
  return (
    <Box p="1rem" backgroundColor={backgroundColor} w="100%">
        <Center display="flex" flexDir="column" alignItems="center" justifyContent="center" >
            <Heading py="2.5 rem">
                {title && title}
            </Heading>
            <Text pb="2rem">
                {description && description}
            </Text>
        </Center> 
    </Box>
  )
}

export default RichText