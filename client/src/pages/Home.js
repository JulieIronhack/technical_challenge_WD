import { Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularIndeterminate from "../components/Progress";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Container } from "@mui/system";

const Home = () => {
  const [phones, setPhones] = useState([]);
  console.log("phones", phones);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/phones`)
      .then((resPhones) => setPhones(resPhones.data))
      .catch((err) => console.log(err));
  }, []);

  if (!phones) {
    <CircularIndeterminate />;
  }

  return (
    <Container >
      <Typography mt={2} variant="h2" color="primary">Phones</Typography>
      <List>
        {phones.map((phone) => {
          return (
            <Link key={phone.id} to={`/phones/${phone.id}`} style={{textDecoration: "none", color:"gray"}}>
              <ListItem>
                <ListItemAvatar>
                  <PhoneIphoneIcon color="primary"/>
                </ListItemAvatar>
                <ListItemText primary={phone.name}></ListItemText>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Link>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
