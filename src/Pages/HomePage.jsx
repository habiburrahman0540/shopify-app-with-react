import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom';
import {Box, Grid, Text, Image,Button,useToast} from '@chakra-ui/react'
import RichText from '../components/RichText';
import ImageWithText from '../components/ImageWithText';
import Loading from '../components/Loading';

const HomePage = () => {

    const {fetchAllProducts,products,addItemsToCheckout,checkoutIdSame} = useContext(ShopContext);
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
   
    <RichText title="Our Product" description="" backgroundColor="#ddd"/>
  <Box p="3rem">
      <Grid templateColumns="repeat(3, 1fr)" mb="2rem" >
          {products?.length ? products.map((product)=>(
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
          )):
          <Box>
              <Text>Fetch data error from Shopify</Text>
          </Box>
          }
      </Grid>
  
  </Box>
  <RichText title="Brand New Product Released" description="" backgroundColor="#ddd"/>
      <ImageWithText linkto="/products/stealth-16-mercedes-amg-motorsport-a13v" image="https://cdn.shopify.com/s/files/1/0798/3723/3448/files/kv-pd.png?v=1691090868" text="One Man, One Engine is the Mercedes-AMG motto for their tailored made engines crafted by a single Master Engine Builder and their meticulous workmanship. The cornerstone of the AMG experience paired with MSI cooling technology paves the road to success in gaming." heading="Stealth 16 Mercedes-AMG Motorsport A13V"/>
      <ImageWithText reverse image="https://cdn.shopify.com/s/files/1/0798/3723/3448/files/satellite-pro-c40-g-109-01-500x500.webp?v=1690634243" text="Lorem" heading="Heading"/>

  </>
  )
}

export default HomePage