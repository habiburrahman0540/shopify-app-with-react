import { Box,Button,Flex,Grid, Heading, Image, Text,useToast  } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {ShopContext} from '../context/shopContext';
const ProductPage = () => {
    const {fetchProductWithHandle,addItemsToCheckout,product,checkout} = useContext(ShopContext);
    const {handle} = useParams();
    const toast = useToast();
    const currency= checkout.currencyCode
    useEffect(()=>{
        fetchProductWithHandle(handle);
    },[fetchProductWithHandle,handle]);
    if(!product.title) return <div>Loading.....</div>
   
  

  return (
    <>
      <Box p="2rem">
          <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} m="auto">
            <Flex justifyContent="center" alignItems="center">
              <Image src={product.images[0].src} borderRadius="5px"/>
              </Flex>
              <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
                <Heading pb="1rem">{product.title}</Heading>
                <Text pb="1rem" fontWeight='bold'>{currency} {Math.round(product.variants[0].price.amount)}</Text>
                <Text pb="1rem" color='gray.500'>{product.description}</Text>
                <Button _hover={{opacity:"70%"}} w="10rem" backgroundColor="pink.500" color="#fff" onClick={()=> toast({
                    title: 'Product added to cart.',
                    position: 'middle-top',
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                  }) && addItemsToCheckout(product.variants[0].id, 1)}>Add to Cart
                </Button>
              </Flex>
          </Grid>
      </Box>
      
    </>
  )
}

export default ProductPage