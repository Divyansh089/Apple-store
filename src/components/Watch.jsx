import { Box, Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useContext, useState } from 'react';
import { AuthContext } from "./ContextApi/Context";
import PhoneNavbar from "./Navbar/PhoneNavbar";


const Watch =()=>{
  
  let [data ] = useState([]);
  data = [{"_id":"651455f7ced596e1193ac75b","name":"Apple Watch Series 9","title":"Powerful ,advanced health features","price":41900.00,"image":"https://www.apple.com/in/watch/home/images/watch-shared-compare/compare_s9__gbbla3ej3p6y_large.jpg","__v":0},{"_id":"6514562bced596e1193ac75d","name":"Apple Watch Ultra 2","title":"The most rugged and capable.","price":89900.00,"image":"https://www.apple.com/in/watch/home/images/watch-shared-compare/compare_ultra2__fzfgtok6moeq_large.jpg","__v":0},{"_id":"65145666ced596e1193ac75f","name":"Apple Watch SE","title":"All the essentials, Light on price.","price":29900.00,"image":"https://www.apple.com/v/watch/bk/images/watch-shared-compare/compare_se__ti1zcc795deq_large.jpg","__v":0}]
  const {SetCartData} = useContext(AuthContext);


   
   

    const addToCart = (id, item) => {
      // Create a new item object to add to the cart
      const newItem = {
        image: item.image,
        name: item.name,
        quantity: 1,
        price: item.price,
        id: id,
      };
    
      console.log("Adding item to cart:", newItem);
    
      // Update the cartData array with the new item
      SetCartData((prevCartData) => [...prevCartData, newItem]);
    };
    



    return (
        <Box>
          <PhoneNavbar/>
{/* ...................................image 1 ........................... */}


<Box
        width="100%"
        bgColor="black"
        height={{ base: '125%', md: '250%', xl: '293.75%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
        
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
      >
        <Center>
          <Flex align="center">
            <Box boxSize='312.5%' marginRight="1rem">
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iWFdAkhhuTzcBZoulLi1HBkXWj_47DP0xuUC2PY&s' alt='Dan Abramov' height="5rem" width="5rem" />
            </Box>
            <Text color="white" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">Watch</Text>
          </Flex>
        </Center>

        <Text color="red" fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} fontWeight="bold">SERIES 9</Text>
        <Text color="white"fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}  fontWeight="bold">Smarter. Brighter. Mightier</Text>
        <Text color="white"fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}  fontWeight="400">From ₹41900.00*</Text>
        <br />
        <Link marginTop="20px"
  href="https://www.apple.com/in/shop/buy-watch/apple-watch"
 
  
  cursor= "pointer"
  textAlign= 'center'
  whiteSpace= 'nowrap'
  fontSize='17px'
  lineHeight= '1.1764805882'
  fontWeight= '400'
  letterSpacing= '-0.022em'
  fontFamily= 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
  minWidth= '30px'
  padding='7px 15px'
  borderRadius= '980px'
  background='#0071e3'
  color= '#fff'
  border= '1px solid transparent'
  margin= '14px'
  textDecoration="none"
  _hover={{background:"#0077ED", textDecoration: "none"}}
>
  Buy
</Link>
<br /><br />
<Center>
<Flex flexDirection={{base : 'column' , md: 'row' }}>
  <Link href="https://www.apple.com/in/apple-watch-series-9/" color="#2997ff" fontWeight="400" marginRight="15px" fontSize="20px" >Learn more &gt;</Link>
  <Link href="#" color="#2997ff" fontWeight="400" fontSize="20px">Watch the film ▷</Link>
</Flex>

</Center>

        <Center>
          <Box boxSize={{ base: '60%', md: '187.5%', xl: '281.25%' }}>
            <Image src='https://www.apple.com/in/home/promos/apple-watch-series-9/images/promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg' alt='Dan Abramov' height="30rem" width="120rem" />
          </Box>
        </Center>
      </Box>
<br />

{/* ...................................image 2 ........................... */}


<Box
        width="100%"
        bgColor="#f5f5f7"
        height={{ base: '125%', md: '250%', xl: '293.75%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
      >
        <Center
        >
          <Flex align="center">
            <Box boxSize='312.5%' marginRight="1rem">
              <Image src='https://www.apple.com/v/watch/bk/images/overview/ultra/logo_watch_ultra_2__gh6zd82juz2a_medium.png' alt='Dan Abramov' height="5rem" width="10rem" />
            </Box>
            
          </Flex>
        </Center>

        <Text color="black" fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} fontWeight="500">Next-level adventure</Text>
        <Text color="black"fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}  fontWeight="400">₹89900.00*</Text>
        <br />
        <Link
  href="https://www.apple.com/in/shop/buy-watch/apple-watch-ultra"
 
  
  cursor= "pointer"
  textAlign= 'center'
  whiteSpace= 'nowrap'
  fontSize='17px'
  lineHeight= '1.1764805882'
  fontWeight= '400'
  letterSpacing= '-0.022em'
  fontFamily= 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
  minWidth= '30px'
  padding='7px 15px'
  borderRadius= '980px'
  background='#0071e3'
  color= '#fff'
  border= '1px solid transparent'
  margin= '14px'
  textDecoration="none"
  _hover={{background:"#0077ED", textDecoration: "none"}}
>
  Buy
</Link>
<br /><br />
<Link href="https://www.apple.com/in/apple-watch-ultra-2/" color="#2997ff" fontWeight="400" marginLeft="15px" marginTop="10px" fontSize="20px" >Learn more &gt;</Link>
        <Center marginTop="20px">
          <Box boxSize={{ base: '60%', md: '187.5%', xl: '281.25%' }}>
            <Image src='https://www.apple.com/in/watch/home/images/overview/ultra/tile_ultra_2__cu2x3w2l0zwy_large.jpg' alt='Dan Abramov' height="40rem" width="120rem" />
          </Box>
        </Center>
      </Box>
<br />
      {/* .............................................image 3....................................... */}
      <Flex flexDirection={{base : 'column' , md: 'row' }}
      bgColor="#f5f5f7">
         {/* .........................................DESCRIPTION BOX................................................ */}
        <Box width= "100%" bgColor="#f5f5f7" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }}  >
            <Center marginTop="30px">
                    <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://www.apple.com/v/watch/bk/images/overview/se/logo_watch_se__fp7w3uhf7uqi_medium.png' alt='Dan Abramov' 
                        height= "5rem" width= "100rem" />
                        </Box>
                    
                    </Flex>
                </Center>
                 
                
                 
                 <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="500">A great deal to love.</Text>
                 <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="400" color="black">From ₹29900.00*</Text>
                
                 <Center>
                 <Flex flexDirection={{base : 'column' , md: 'row' }}>
                 <Link
  href="https://www.apple.com/in/shop/buy-watch/apple-watch-ultra"
 
  
  cursor= "pointer"
  textAlign= 'center'
  whiteSpace= 'nowrap'
  fontSize='17px'
  lineHeight= '1.1764805882'
  fontWeight= '400'
  letterSpacing= '-0.022em'
  fontFamily= 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
  minWidth= '30px'
  padding='7px 15px'
  borderRadius= '980px'
  background='#0071e3'
  color= '#fff'
  border= '1px solid transparent'
  margin= '14px'
  textDecoration="none"
  _hover={{background:"#0077ED", textDecoration: "none"}}
>
  Buy
  </Link>
  <Link href="https://www.apple.com/in/apple-watch-se/" color="#2997ff" fontWeight="400" marginLeft="15px" marginTop="10px" fontSize="20px" >Learn more &gt;</Link>
  
</Flex>

</Center>


        

        </Box>
        {/* ....................................IMAGE BOX............................................. */}
        <Box width= "80%" bgColor="#f5f5f7" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }} >
        <Center>
                     <Box boxSize={{ base: '100%', md: '350px', xl: '900px' }}>
                     <Image src='https://www.apple.com/in/watch/home/images/overview/se/tile_watch_se__cuswe7ukqd6q_medium.jpg' alt='Dan Abramov' 
                     height= "28rem" width= "120rem" />
                     </Box>
                 </Center>
        </Box>

    
      </Flex>
<br />
      
{/* ...................................image 4 ........................... */}


<Box
        width="100%"
        bgColor="#f5f5f7"
        height={{ base: '125%', md: '250%', xl: '293.75%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
        
        
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
      >
        <Center
        >
          <Flex align="center">
            <Box boxSize='312.5%' marginRight="1rem">
              <Image src='https://www.apple.com/v/watch/bk/images/overview/carbon-neutral/logo_carbon_neutral__cinzi2sjzgdy_large.png' alt='Dan Abramov' height="5rem" width="15rem" />
            </Box>
            
          </Flex>
        </Center>

        <Text color="black" fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} fontWeight="700">A first for Apple Watch.</Text>
        <Text color="black"fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}  fontWeight="700">And Apple.</Text>
        <br />
        <Link href="https://www.apple.com/in/environment/" color="#2997ff" fontWeight="400" marginLeft="15px" marginTop="10px" fontSize="20px" >Learn how &gt;</Link>
        <Center marginTop="20px">
          <Box boxSize={{ base: '60%', md: '187.5%', xl: '281.25%' }}>
            <Image src='https://www.apple.com/v/watch/bk/images/overview/carbon-neutral/watch_hw_carbon_neutral__cpxfwradnqmq_large.jpg' alt='Dan Abramov' height="40rem" width="80rem" />
          </Box>
        </Center>
      </Box>
<br />
        
     
{/* .................................................Which Apple Watch is right for you? .............................................*/}

<Center><Text color="black" fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" mb={20} mt={5}>Which Apple Watch is right for you? </Text> </Center>
<Box style={{ display: 'flex', flexWrap: 'wrap' }}>
   
  {data.map((e) => (
    <div key={e._id} style={{ flex: '0 0 calc(33.33% - 16px)', padding: '16px' }}>
      <Center>
      <Box   width="100%"  height={{ base: '100%', md: '150%', xl: '200%' }}>
      <img
        src={e.image}
        alt={e.image}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      </Box>
      <br /><br />
      <Center>
        <Flex>
        <Text
        color="black"
        fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
        fontWeight="bold"
      >
        {e.name}
      </Text>
      <br /><br />
      <Text fontSize={{ base: '0', md: 'lg', xl: 'xl' }} color="gray.500">
        {e.title}
      </Text>
      <br /><br />
      <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="gray.500">
         From ₹{e.price}*
      </Text>
        </Flex>
      </Center>
      
      
      </Center>
      
     
        <Box>
        <Center mt="1rem">
        <Button
  width={{ base: '100%', md: 'auto' }}
  colorScheme="blue"
  type="submit"
  fontSize={{ base: 'lg', md: '2xl' }}
  onClick={() => addToCart(e._id, e)}
>
  Add to Cart
</Button>

        </Center>
        </Box>
         
      
    </div>
  ))}
</Box>



        </Box>
    )
}

export default Watch;