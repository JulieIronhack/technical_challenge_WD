import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Center,
  Grid,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import LoadingSpinner from "./LoadingSpinner";
import { getPhones } from "../service";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPhones();
        setPhones(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
        navigate("/error");
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) return <LoadingSpinner />;

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
      padding={3}
    >
      {phones.map((phone) => (
        <LinkBox
          as="article"
          key={phone.id}
          p={5}
          borderWidth={1}
          rounded="md"
          overflow="hidden"
          _hover={{ shadow: "lg" }}
        >
          <Center>
            <Text fontSize="xl" fontWeight="semibold" mb={3}>
              {phone.name}
            </Text>
          </Center>
          <Center>
            <LinkOverlay as={Link} to={`/phones/${phone.id}`}>
              <Image
                src={`/images/${phone.imageFileName}`}
                alt={phone.name}
                objectFit="cover"
                width="100%"
                height="300px"
              />
            </LinkOverlay>
          </Center>
        </LinkBox>
      ))}
    </Grid>
  );
};

export default PhoneList;
