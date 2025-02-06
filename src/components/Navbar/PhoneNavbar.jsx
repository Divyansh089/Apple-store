import { Box, Center, Grid, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PhoneNavbar = () => {
  const [isLargerThan768, isLargerThan600] = useMediaQuery([
    "(min-width: 800px)",
    "(min-width: 300px)",
  ]);

  return (
    <Box
      display="flex"
      justifyContent={isLargerThan768 ? "space-around" : "center"}
      flexWrap={isLargerThan600 ? "wrap" : "nowrap"} mt={7} mb={4}
    >
      <Grid>
        <Link to ="/iphone15preorder" _hover={{textDecoration:"none"}} textDecoration="none">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
          <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/iphone_15_light__euftnkhrzdea_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          
          <Text fontSize="sm"  ml="0">iPhone 15 Pro</Text>
        </Box>
       </Link>
     </Grid>

     <Grid>
        <Link to ="/iphone15">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
        <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/iphone_14_light__fwknsxkf80uq_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          <Text  fontSize="sm"  ml="0">iPhone 15</Text>
        </Box>
        </Link>
      </Grid>


      <Grid>
        <Link to ="/iphone14">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
        <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/iphone_15_pro_light__diyvo6c7yu82_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          <Text  fontSize="sm"  ml="0">iPhone 14</Text>
        </Box>
        </Link>
      </Grid>

      <Grid>
        <Link to = "/iphone13">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
        <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/iphone_13_light__ewo3e0sf67o2_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          <Text fontSize="sm" ml="0">iPhone 13</Text>
        </Box>
        </Link>
      </Grid>

      <Grid>
        <Link to = "/iphone11">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
        <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/iphone_15_light__euftnkhrzdea_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          <Text fontSize="sm" ml="0">iPhone 11</Text>
        </Box>
        </Link>
       
      </Grid>

      <Grid>
        <Link to = "/iphone10">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
        <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/iphone_15_light__euftnkhrzdea_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          <Text fontSize="sm" ml="0">iPhone X</Text>
        </Box>
        </Link>
       
      </Grid>

      <Grid>
        <Link to = "/iphonese">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
        <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/iphone_se_light__fhg8duy6ffau_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          <Text fontSize="sm" ml="0">iPhone SE</Text>
        </Box>
        </Link>
       
      </Grid>

      <Grid>
        <Link to = "/airpods">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
        <Center>
          <Image
            src='https://www.apple.com/v/iphone/home/bu/images/chapternav/airpods_light__8oj157p2476a_large.svg'
            alt='Dan Abramov'
            height="40px"
            width="40px"
          />
          </Center>
          <Text fontSize="sm" ml="0" mt="3">AirPods</Text>
        </Box>
        </Link>
        
      </Grid>

      <Grid>
        <Link to = "/watch">
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
          <Center>
            <Image
              src='https://static.thenounproject.com/png/310593-200.png'
              alt='Dan Abramov'
              height="40px"
              width="40px"
            />
          </Center>
          <Text fontSize="sm" ml="0" mt="3">Apple Watch</Text>
        </Box>
        </Link>
        
      </Grid>

      <Grid>
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
          <Center>
            <Image
              src='https://www.apple.com/v/iphone/home/bu/images/chapternav/accessories_light__ed5l6ipsevqu_large.svg'
              alt='Dan Abramov'
              height="40px"
              width="40px"
            />
          </Center>
          <Text fontSize="sm" ml="0">Accessories</Text>
        </Box>
      </Grid>

      <Grid>
        <Box ml={isLargerThan768 ? "0" : "10"} mt={isLargerThan768 ? "0" : "50"}>
          <Center>
            <Image
              src='https://www.apple.com/v/iphone/home/bu/images/chapternav/shop_iphone_light__b2toggskllle_large.svg'
              alt='Dan Abramov'
              height="40px"
              width="40px"
            />
          </Center>
          <Text fontSize="sm" ml="0">Shop iPhone</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default PhoneNavbar;