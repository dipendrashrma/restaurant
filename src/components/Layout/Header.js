import React,{useState} from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, Divider } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';

 const Header = () => {
  const[mobileOpen, setMobileOpen]=useState(false)
  
  
  // handel menu click
  const handelDrawerToggle=() =>{
    setMobileOpen(!mobileOpen)
  }
  // menu drawer
  const drawer= (
    <Box onClick={handelDrawerToggle} sx={{textAlign:"center"}}>

      <Typography  
                  color={"goldenrod"} 
                  variant='h6' 
                  component="div"
                  sx={{flexGrow:1,my:2}}
                  
                  >
                  <FastfoodIcon/>
                  My Resturant
               </Typography>
               <Divider/>
                 <ul className='mobile-navigation-menu'>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>

                  <li>
                    <Link to={"/Menu"}>Menu</Link>
                  </li>

                  <li>
                    <Link to={"/About"}>About</Link>
                  </li>

                  <li>
                    <Link to={"/Contact"}>Contact</Link>
                  </li>

                 </ul>
  
    </Box>
  )
   return (
     <>
       <Box>
          <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
              <IconButton 
                color='inherit' 
                aria-label='open drawer' 
                edge="start"
                sx={{mr:2, display:{sm:"none"}}}
                onClick={handelDrawerToggle}
                >
                <MenuIcon/>
              </IconButton>
              <Typography  
                  color={"goldenrod"} 
                  variant='h6' 
                  component="div"
                  sx={{flexGrow:1}}
                  
                  >
                  <FastfoodIcon/>
                  My Resturant
               </Typography>
               <Box sx={{display:{xs:"none",sm:"block"}}}>
                 <ul className='navigation-menu'>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>

                  <li>
                    <Link to={"/Menu"}>Menu</Link>
                  </li>

                  <li>
                    <Link to={"/About"}>About</Link>
                  </li>

                  <li>
                    <Link to={"/Contact"}>Contact</Link>
                  </li>

                 </ul>
               </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
              <Drawer variant='temporary' open={mobileOpen} 
                onClose={handelDrawerToggle}
                sx={{display:{xs:"block",sm:"none"},
                "& .MuiDrawer-paper":{
                    boxSizing:"border-box",
                    width:"250px"
                }
              }}
                >
                  {drawer}
              </Drawer>
          </Box>
          <Box>
          <Toolbar/>
          </Box>
       </Box>
     </>
   )
 }
 
 export default Header
 