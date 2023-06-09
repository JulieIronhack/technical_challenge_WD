import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

import LoadingSpinner from "./LoadingSpinner";
import NotFound from "./NotFound";
import { getPhoneById } from "../service";

const PhoneDetail = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const phoneData = await getPhoneById(id);
        setPhone(phoneData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
        if (error.message === "Phone not found") {
          setNotFound(true);
        }
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (notFound) return <NotFound />;

  return (
    <Box p={5}>
      <Flex align="center" justify="center">
        <Box>
          <Heading as="h2" size="xl" marginBottom={4} textAlign={"center"}>
            {phone.name}
          </Heading>
          <Image
            src={`/images/${phone.imageFileName}`}
            alt={phone.name}
            boxSize="250px"
            objectFit="cover"
            mx="auto"
          />

          <Text fontSize="md" marginBottom={2}>
            <b>Manufacturer:</b> {phone.manufacturer}
          </Text>
          <Text fontSize="md" marginBottom={2}>
            {phone.description}
          </Text>
          <Text fontSize="md" marginBottom={2} textTransform="capitalize">
            <b>Color:</b> {phone.color}
          </Text>
          <Text fontSize="md" marginBottom={2}>
            <b>Screen:</b> {phone.screen}
          </Text>
          <Text fontSize="md" marginBottom={2}>
            <b>Processor:</b> {phone.processor}
          </Text>
          <Text fontSize="md" marginBottom={2}>
            <b>RAM:</b> {phone.ram}GB
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="green.500">
            Price: ${phone.price}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PhoneDetail;
