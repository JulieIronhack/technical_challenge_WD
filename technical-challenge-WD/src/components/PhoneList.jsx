import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneDetails from "./PhoneDetails";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [phone, setPhone] = React.useState("");
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event) => {
    const selectedPhoneId = event.target.value;
    setPhone(selectedPhoneId);

    const selectedPhone = phones.find((phone) => phone.id === selectedPhoneId);
    setSelectedPhone(selectedPhone);
  };

  // Fetch all phone data
  useEffect(() => {
    setIsLoading(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      axios
        .get("http://localhost:5000/phones")
        .then((response) => {
          setPhones(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching phone data:", error);
          setIsLoading(false);
        });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <h2>The Phone Cave</h2>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
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
          <br />
        </>
      )}

      {!isLoading && selectedPhone && (
        <div className="pt-3">
          <PhoneDetails selectedPhone={selectedPhone} />
        </div>
      )}
    </div>
  );
};

export default PhoneList;
