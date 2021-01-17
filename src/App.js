import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Navbar';
import FAQ from './FAQ';
import alanBtn from '@alan-ai/alan-sdk-web';
import { scroller } from 'react-scroll';

const App = () => {
  const [index, setIndex] = useState(null);

  const alanBtnInstance = useRef(null);

  const [toggleColorFlag, setToggleColorFlag] = useState(false);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          '824b9bae2402342ec158becfe18e4b312e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            // Call the client code that will react to the received command
            setIndex(commandData.faqId - 1);
            scroller.scrollTo(`accordian-item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOut',
            });
          } else if (commandData.command === 'toggleColorMode') {
            setToggleColorFlag(flag => !flag);
          }
        },
      });
    }
  }, []);
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Navbar toggleColorFlag={toggleColorFlag}></Navbar>
        <FAQ index={index} setIndex={setIndex}></FAQ>
      </ChakraProvider>
    </div>
  );
};

export default App;
