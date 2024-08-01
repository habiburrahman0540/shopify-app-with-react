import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom';
import {Box, Grid, Text, Image,Button,useToast} from '@chakra-ui/react'
import RichText from '../components/RichText';
import ImageWithText from '../components/ImageWithText';
import Loading from '../components/Loading';

const ProductsPage = () => {

    const {fetchAllProducts,products,addItemsToCheckout,} = useContext(ShopContext);
    const toast = useToast();
    useEffect(()=>{
    
        fetchAllProducts();
        
    },[fetchAllProducts]);


    if(products.length === 0){
        return (
        <Loading/>
    )
    } 

 
  return (
    <>
   
    <RichText title="Our Products" description="" backgroundColor="#ddd"/>
  <Box p="3rem">
      <Grid templateColumns="repeat(3, 1fr)" mb="2rem" >
          { products.map((product)=>(
              <Box _hover={{opacity:'80%'}} textAlign='center' marginRight="10px" marginBottom="10px" borderRadius="10px" border="5px solid #657E7F">
                  <div  key={product.id}>
                  <Link to={`/products/${product.handle}`}>
                  <Image src={product.images[0]?.src} width="100%" height="250px" />
                  <Text paddingTop="10px" fontSize="22px" fontWeight="bold">{product.title}</Text>
                  </Link>
                      <Text fontSize="20px" fontWeight="bold">{product.variants[0]?.price?.amount}</Text>
                        <Button _hover={{opacity:"70%"}} w="10rem" marginBottom="20px" marginTop="15px" backgroundColor="pink.500" color="#fff" onClick={()=> toast({
                    title: 'Product added to cart.',
                    position: 'middle-top',
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                  }) && addItemsToCheckout(product.variants[0].id, 1)}>Add to Cart
                </Button> 
                 
                  </div>
               
              </Box>
          ))}
      </Grid>
  
  </Box>

  </>
  )
}

export default ProductsPage