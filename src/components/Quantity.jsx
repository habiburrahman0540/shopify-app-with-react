import React from 'react'
import {
    Text,
    Badge
  } from "@chakra-ui/react";
 
const Quantity = ({item,onAdjust}) => {
  const {quantity} = item;
    const incrementItem =()=>{
  
       onAdjust({variantId:item.variant.id, quantity: 1 })
    }
    const decrementItem =()=>{
      onAdjust({variantId:item.variant.id, quantity: -1 })
    }
  return (
    <>
          <Badge onClick={incrementItem} colorScheme='green' cursor="pointer" fontSize="18px" >+</Badge>
                    <Text >{quantity}</Text>
          <Badge onClick={decrementItem} colorScheme='red' cursor="pointer" fontSize="18px">-</Badge>
    </>
  )
}

export default Quantity