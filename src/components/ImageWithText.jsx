import React from 'react'
import {Box,Text,Flex,Image,Heading, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
const ImageWithText = ({reverse,image,heading,text,linkto}) => {
    const reverseSection = reverse ? "row-reverse" : "row";
  return (
    <Box>
        <Flex flexDir={['column',reverseSection]} w="100%">
            <Image src={image} objectFit="cover" w={['100%','50%']} p="1rem"/>
            <Flex w={['100%','50%']} flexDir="column" justifyContent="center" alignItems="center" p="2rem" backgroundColor="#657E7F">
                <Link to={linkto}>
                <Heading p="2rem">
                    {heading && heading }
                </Heading>
                </Link>
                <Text p="2rem">
                    {text && text }
                </Text>
                <Link to={linkto}>
                <Button w="10rem" backgroundColor="#FF31B3" color="white" _hover={{opacity:"70%"}}>
                    Buy Now 
                </Button>
                </Link>
            </Flex>
        </Flex>
    </Box>
  )
}

export default ImageWithText