import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material';


const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign :"center",
        p:"2",
        
        "& h3=":{
          fontWeight: "bold",
          my:2,
          

        },
        "& p":{
          // textAlign: "justify",
          // fontWeight: "bold",
          // fontFamily: "",
          fontStyle: "italic",
          fontSize:"1.3rem",
        },
        "@media(max-width:600px)":{
          mt:0,
          "& h3":{
            fontSize:"3.2rem",
          }
        }
      }}>
        <Typography variant='h3'>
           Welcome to My Resturant
        </Typography>
        <p><i>
          A hotel is a commercial establishment providing <b>accommodation, services, </b>and facilities for travelers and others for payment. Hotels offer rooms and common areas like lobbies and dining rooms, with services such as housekeeping, room service, and food and beverage amenities available to guests for overnight stays.
        </i></p> <br/>
        <p>
          They range from budget-friendly hostels to luxury resorts and boutique establishments, serving various traveler needs and offering diverse experiences, from quick roadside stops to extended stays.  
        </p>
      </Box>
    </Layout>
  );
};

export default About


