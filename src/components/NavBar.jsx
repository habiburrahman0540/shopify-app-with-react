import React, { useContext } from 'react'
import {Badge, Box, Flex,Icon,Image} from "@chakra-ui/react"
import {ShopContext} from "../context/shopContext"
import {MdMenu,MdShoppingBasket} from "react-icons/md"
import { Link } from 'react-router-dom'
const NavBar = () => {
    const {openMenu,openCart,checkout} = useContext(ShopContext);
    
  return (
    <Flex flexDir="row" backgroundColor="#FF9DDF" alignItems="center" justifyContent="space-between" p='1rem'>
        <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30} onClick={()=>openMenu()}></Icon>
        <Link to="/">
          <Image src='https://th.bing.com/th/id/R.8b4b6b48059f74d383f55d2eab8deff0?rik=rEPgOFe8CBlZGA&riu=http%3a%2f%2fdemo.org.pk%2fwp-content%2fuploads%2f2018%2f08%2fdemo-logo-new1-e1533117947557.png&ehk=a0qHJaWGUZFuLHSlvqd1gfIoGeB4pJXjpGjjvKakZ1k%3d&risl=&pid=ImgRaw&r=0' w={100} h={100}/>
        </Link>
        <Box display="flex" alignItems="center">
        <Icon fill='white' as={MdShoppingBasket} onClick={()=>openCart()} cursor="pointer" w={30} h={30}></Icon>
        <Badge backgroundColor="#456378" borderRadius="50%">
            {checkout.lineItems?.length ? checkout.lineItems?.length : 0}
        </Badge>
        </Box>
    </Flex>
  )
}

export default NavBar