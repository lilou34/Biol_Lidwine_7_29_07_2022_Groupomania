import React from 'react';

import Navigation from '../../components/Navigation';

//import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const Home = () => {
    return (

          <React.Fragment>
           
            <CssBaseline />
            <Container maxWidth="sm">
            <h1>Home</h1>
            <Navigation />
              <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
          </React.Fragment>
     
      


            

    )
};

export default Home;