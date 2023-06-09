import { Flex, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Flex justify="center" align="center" height="100vh">
      <Spinner size="xl" color="blue.500" />
    </Flex>
  );
};

export default LoadingSpinner;
