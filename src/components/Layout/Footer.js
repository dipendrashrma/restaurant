import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Box, Typography} from "@mui/material"
const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:"center",backgroundColor:"black",color:"white",p:3,}}>
            <Box sx={{my:2,"& svg":{
              fontSize:"25px",
              cursor:"pointer",
              margin:0.5, 
            },
            "svg:hover":{
              color:"goldenrod",
              transform:"translateX(2px)",
              transition:"All 300ms"
            }
            }}>
                {/* {social icon} */}
                <InstagramIcon/>
                <FacebookIcon/>
                <XIcon/>
                <YouTubeIcon/>
                <WhatsAppIcon/>
                <CallIcon/>
            </Box>
            <Typography variant='h5' sx={{"@media(min-width:600px)":{
              fontSize:"1rem"
            }}}>
                All Rights Reserved &copy; My Resturant 2025
            </Typography>
        </Box>
    </>
  )
}

export default Footer
