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

const FAQ = ({ index, setIndex }) => {
  return (
    <div>
      <Flex direction="column" p="4">
        <Box mb="8">
          <Heading size="md">Frequently Asked Questions</Heading>
          <Accordion allowtoggle="true" index={index}>
            {FAQ_LIST.map(faq => {
              return (
                <AccordionItem key={faq.id} name={`accordian-item-${faq.id}`}>
                  <AccordionButton
                    onClick={() => {
                      setIndex(faq.id - 1);
                    }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="semibold">{faq.question}</Text>
                    </Box>
                    <AccordionIcon></AccordionIcon>
                  </AccordionButton>
                  <AccordionPanel pb="4">{faq.answer}</AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      </Flex>
    </div>
  );
};

export default FAQ;
