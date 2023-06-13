import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box position="relative">
      <Box color="brand.creme" mt="100">
        <Heading
          fontSize="70"
          fontWeight="700"
          lineHeight="90%"
          mb="10"
          align="center"
        >
          WELCOME TO YOUR PHONEBOOK
        </Heading>
      </Box>
    </Box>
  );
}
