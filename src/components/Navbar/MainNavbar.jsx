import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillApple, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextApi/Context';


function MainNavbar() {

  const {name,setName,CartData} = useContext(AuthContext);

  const link = {
    color: '#ffffffcc'
  }
  const listItemStyle = {
    textDecoration: 'none', // Remove underline from list items
    listStyle: 'none',
    fontSize: '12px',
    padding: '8px', // Remove default list bullets
  };
  const stickyNavbarStyle = {
    color: "black",
    position: 'sticky',
    top: 0, // Stick to the top of the viewport
    backgroundColor: "black", // Customize the background color as needed
    zIndex: 1000, // Ensure it's above other content
  };


  return (
    <Box margin="auto" style={stickyNavbarStyle} >
      <Flex
        as="ul"
        align="center"
        justify="space-between"
        padding={2}
        flexWrap={['wrap', 'nowrap']}
        listStyle="none"
      >
        <li style={listItemStyle}>
          <Link to = "/" style={link} _hover={{color:"white",textDecoration:'none' }}>
          <button>
            <h1 >
              <AiFillApple />
            </h1>
          </button>
          </Link>
         
        </li>
        <li style={listItemStyle}>
          <Link to="/" style={link} _hover={{color:"white",textDecoration:'none' }}>
            <Box display={ {base: 'none', md:"block" }}>

              Store
            </Box>
          </Link>
          
        </li>
        <li style={listItemStyle}>
        <Link href="http://localhost:3001/" style={link} _hover={{color:"white",textDecoration:'none' }}>
            <Box display={ {base: 'none', md:"block" }}>

              Mac
            </Box>
          </Link>
        </li>
        <li style={listItemStyle}>
        <Link to="/" style={link} _hover={{color:"white",textDecoration:'none' }}>
            <Box display={ {base: 'none', md:"block" }}>

              iPad
            </Box>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to = "/iphone15" style={link} _hover={{color:"white",textDecoration:'none' }}>
          <Box display={ {base: 'none', md:"block" }}>
           iPhone
          </Box>
          </Link>
     
        </li>
        
        <li style={listItemStyle}>
          <Link to = "/watch" style={link} _hover={{color:"white",textDecoration:'none' }}>
          <Box display={ {base: 'none', md:"block" }}>
           Watch
          </Box>
          </Link>
       
        </li>
        <li style={listItemStyle}>
        <Link to = "/airpods" style={link} _hover={{color:"white",textDecoration:'none' }}>
        <Box display={ {base: 'none', md:"block" }}>
           AirPods
          </Box>
          </Link>
        </li>
        <li style={listItemStyle}>
        <Link to="/" style={link} _hover={{color:"white",textDecoration:'none' }}>
            <Box display={ {base: 'none', md:"block" }}>

              TV & Home
            </Box>
          </Link>
        </li>
        <li style={listItemStyle}>
        <Link to="/" style={link} _hover={{color:"white",textDecoration:'none' }}>
            <Box display={ {base: 'none', md:"block" }}>

              Entertainment
            </Box>
          </Link>
        </li>
        <li style={listItemStyle}>
        <Link to="/" style={link} _hover={{color:"white",textDecoration:'none' }}>
            <Box display={ {base: 'none', md:"block" }}>

              Accessories
            </Box>
          </Link>
        </li>
        <li style={listItemStyle}>
        <Link to="/" style={link} _hover={{color:"white",textDecoration:'none' }}>
            <Box display={ {base: 'none', md:"block" }}>

              Support
            </Box>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Box display={['block', 'flex']} alignItems="center">
            <AiOutlineSearch className="icon" />
          </Box>
        </li>
        <Link to = "cart" style={link} _hover={{color:"white",textDecoration:'none' }}>
        <li style={listItemStyle}>
          <Box display={['block', 'flex']} alignItems="center">
            <Flex>
              <Box>

            <AiOutlineShoppingCart className="icon" />
              </Box>
              <Box>
            <h3  style={{marginBottom:"-7px",color:'white', fontWeight:"bold"}}>{CartData.length}</h3>
              </Box>
            </Flex>
          </Box>
        </li>
        </Link>
       
        <li style={{ ...listItemStyle, display: { base: 'none' } }}>
          <Menu display={ {base: 'block', md:"none" , lg: "none" }}>
            <MenuButton
              as={IconButton}
              display={ {base: 'block', md:"none" , lg: "none" }}
              aria-label="Menu"
              icon={<FaBars />}
              variant="ghost"
              colorScheme="gray"
              _hover={{
                color: 'teal.500',
                backgroundColor: 'transparent',
              }}
            />
            <MenuList>
              <MenuItem>Mac</MenuItem>
              <MenuItem>Store</MenuItem>
              <Link to="/iphone15" style={link} _hover={{color:"white",textDecoration:'none' }}>
              <MenuItem>iPhone</MenuItem>
              </Link>

              
              

              <Link to = "/watch" style={link} _hover={{color:"white",textDecoration:'none' }}>  <MenuItem>Watch</MenuItem> </Link>
              <MenuItem>TV & Home</MenuItem>
              <MenuItem>Accosseroies</MenuItem>
              <Link to = "/airpods" style={link} _hover={{color:"white",textDecoration:'none' }}><MenuItem>Airpods</MenuItem></Link>
              <MenuItem>Entertainment</MenuItem>
             <Link to = "/login" style={link} _hover={{color:"white",textDecoration:'none' }}>
             <MenuItem>
              {name !== "" ? name : "Login"}
              </MenuItem>
             </Link> 
            
            </MenuList>
          </Menu>
        </li>

        <li style={{ ...listItemStyle, display: { base: 'none' } }}>
        <Link to = "/login" style={link} _hover={{color:"white",textDecoration:'none' }}>   <Box display={ {base: 'none', md:"block" }}>
          {name !== "" ? name : "Login"} 
          </Box>
         </Link> 
          </li>
      </Flex>
    </Box>
  );
}
export default MainNavbar;

