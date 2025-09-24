import React from 'react'
import Layout from '../components/Layout/Layout'
import EmailIcon from '@mui/icons-material/Email';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
            <Box sx={{my:10, ml:10,"& h4":{
              // fontSize:"3.5rem"
              fontWeight:"bold",
              mb:2,
            }}}>
                <Typography variant='h4'>
                  Contact My restaurant
                </Typography>
                <p>
                  <b>(Friendly & Welcoming)</b>Got a question or just want to say hello? We’re here for you! Fill out the contact form or drop us an email, and we’ll respond quickly. Your thoughts and feedback mean a lot to us.
                </p>
            </Box>
            <Box>
              <TableContainer component={Paper}>
                <Table aria-label='contact table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Contact Details
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <EmailIcon sx={{
                          color:"black", pt:1,
                        }} /> My Resturant
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
    </Layout>
  );
};

export default Contact