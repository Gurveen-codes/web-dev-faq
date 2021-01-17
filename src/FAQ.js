import React from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from '@chakra-ui/react';

import FAQ_LIST from './faq.json';

const FAQ = () => {
  return (
    <div>
      <Flex direction="column" p="4">
        <Box mb="8">
          <Heading size="md">Frequently Asked Questions</Heading>
          <Accordion></Accordion>
        </Box>
      </Flex>
    </div>
  );
};

export default FAQ;
