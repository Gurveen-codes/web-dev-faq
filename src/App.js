import { chakra } from '@chakra-ui/react';
import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Navbar></Navbar>
      </ChakraProvider>
    </div>
  );
};

export default App;
