import { Link } from "react-router-dom";
import {
  Center,
  Heading,
  Text,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";

const Error = () => {
  return (
    <Center height="100vh" textAlign="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" mb={6}>
          404 - Page Not Found
        </Heading>
        <Text fontSize="xl" mb={6}>
          We're sorry, but the page you requested could not be found.
        </Text>
        <ChakraLink as={Link} to="/" color="blue.500" fontSize="xl">
          Go back to home page
        </ChakraLink>
      </VStack>
    </Center>
  );
};

export default Error;
