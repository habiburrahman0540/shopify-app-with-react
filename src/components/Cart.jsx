import React, { useContext } from 'react'
import {ShopContext} from "../context/shopContext"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Flex,
    Image,
    Text,
    Box,
    Divider,
    Stack
  } from "@chakra-ui/react";
  import {CloseIcon} from "@chakra-ui/icons"
import { Link } from 'react-router-dom';
import Quantity from './Quantity';
const Cart = () => {
    const {isCartOpen,removeLineItem,closeCart,checkout,updateLineItem,handleAdjustQuantity} = useContext(ShopContext);
    const currency = checkout.currencyCode

  
  return (
    <Drawer
    variant="alwaysOpen"
    isOpen={isCartOpen}
    placement="right"
    onClose={closeCart}
    trapFocus={false}
    closeOnOverlayClick={false}
    blockScrollOnMount={false}
    size='sm'
  >
    
    <DrawerContent>
      <DrawerCloseButton backgroundColor="#D53F8C" color="#fff" _hover={{opacity:'70%'}} />
      <DrawerHeader>Your Shopping Cart </DrawerHeader>

      <DrawerBody>
       
        {checkout.lineItems?.length ? checkout.lineItems?.map((item)=>(
          <>
            <Grid templateColumns="repeat(6, 1fr)" gap={1} key={item.id} py="3" >

                <Flex alignItems="center" justifyContent="center" paddingRight="1">
                    <Image src={item.variant.image.src} />
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                    <Text noOfLines={[1,2]}>{item.title}</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center" paddingRight="1">
                    <Text>{currency}{Math.round(item.variant.price?.amount)}</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center" paddingRight="1">
                <Stack direction='row'>
                   
                  <Quantity item={item} onAdjust={handleAdjustQuantity}/>
                    
                </Stack>
              
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                    <Text>{currency}{(item.quantity)*(item.variant.price?.amount)}</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                    <CloseIcon cursor='pointer' onClick={()=>removeLineItem(item.id)} />
                </Flex>
            </Grid>
            <Divider />
            </>
        )):
        <Box w="100%" h="100%">
        <Text h="100%" display="flex" alignItems="center" justifyContent="center">Card is empty</Text>
        </Box>
        }
      </DrawerBody>
      <Divider m='1rem' />
      {checkout.totalPrice?.amount > 0 ?   <Box  marginLeft="40px" marginRight="40px" fontWeight="bold" display="flex" justifyContent="space-between">
    <Text>Total Price</Text>
    <Text>{currency}{Math.round(checkout.totalPrice?.amount)}</Text>
  </Box> :null}
    
{checkout.lineItems?.length ?   <DrawerFooter>
 
        <Button backgroundColor="#D53F8C" color="#fff" w="100%" _hover={{opacity:'70%'}}>
            <Link to={checkout.webUrl}>
            Checkout
            </Link>
        </Button>
      </DrawerFooter> :
      null
      }
    
    </DrawerContent>
  </Drawer>
  )
}

export default Cart