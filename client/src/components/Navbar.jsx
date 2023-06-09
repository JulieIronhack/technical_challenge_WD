import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
  Flex,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import axios from "axios";

const Navbar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/phones");
        setPhones(response.data);
      } catch (error) {
        console.error("Error fetching phones for navbar: ", error);
      }
    };

    fetchPhones();
  }, []);

  return (
    <Box bg="blue.500" p="4" color="white" mb={3}>
      <Flex align="center" justify="space-between">
        <Flex
          align="center"
          display={{ base: "none", sm: "flex" }}
          justifyContent="space-between"
        >
          <Link as={RouterLink} to="/" m="4" fontWeight="bold">
            Home
          </Link>
          {phones.map((phone) => (
            <Link
              as={RouterLink}
              to={`/phones/${phone.id}`}
              key={phone.id}
              m="4"
              fontWeight="bold"
            >
              {phone.name}
            </Link>
          ))}
        </Flex>

        <Flex ml="auto">
          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              display={{ sm: "none" }}
              color="white"
            />
            <MenuList>
              <MenuItem as={RouterLink} to="/" color="blue.500">
                Home
              </MenuItem>
              {phones.map((phone) => (
                <MenuItem
                  as={RouterLink}
                  to={`/phones/${phone.id}`}
                  key={phone.id}
                  color="blue.500"
                >
                  {phone.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
