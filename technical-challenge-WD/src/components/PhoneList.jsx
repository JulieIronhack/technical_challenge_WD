import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PhoneDetails = () => {
  const [phones, setPhones] = useState([]);
  const [phone, setPhone] = React.useState("");

  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  // Fetch all phone data
  useEffect(() => {
    axios
      .get("http://localhost:5000/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching phone data:", error);
      });
  }, []);

  return (
    <div>
      <h2>The Phone Cave</h2>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Phone</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={phone}
            label="Phone"
            onChange={handleChange}
          >
            {phones.map((phone) => (
              <MenuItem key={phone.id} value={phone.id}>
                {phone.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default PhoneDetails;
