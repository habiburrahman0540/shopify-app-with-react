import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom';
import {Box, Grid, Text, Image} from '@chakra-ui/react'
import RichText from '../components/RichText';
import ImageWithText from '../components/ImageWithText';
const HomePage = () => {

    const {fetchAllProducts,products} = useContext(ShopContext);

    useEffect(()=>{
    
        fetchAllProducts();
        
    },[fetchAllProducts]);


    if(!products) return <div>...Loading</div>
console.log("products",products);
 
  return (
    <>
   
    <RichText title="Our Product" description="" backgroundColor="#ddd"/>
  <Box p="3rem">
      <Grid templateColumns="repeat(3, 1fr)" mb="2rem" >
          {products?.length ? products.map((product)=>(
              <Box _hover={{opacity:'80%'}} textAlign='center' marginRight="10px" marginBottom="10px" borderRadius="10px" border="5px solid #657E7F">
                  <Link to={`/products/${product.handle}`} key={product.id}>
                      <Image src={product.images[0]?.src} width="100%" height="80%" />
                      <Text paddingTop="10px" fontSize="22px" fontWeight="bold">{product.title}</Text>
                      <Text>{product.variants[0]?.price?.amount}</Text>
                  </Link>
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