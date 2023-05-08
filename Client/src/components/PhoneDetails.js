import axios from "axios";
import { useEffect, useState } from "react";


function PhoneDetails(props){
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
          .get(`http://localhost:5005/api/phones/${props.id}`)
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      },[props.id]);
    return(
        <>
        <h1>phoneDetails</h1>
        {data &&
            data.map((phone) => {
              return (
                <>
                  <h1>{phone.name}</h1>
                  <h2>{phone.color}</h2>
                  <h2>{phone.description}</h2>
                  <h2>{phone.manufacturer}</h2>
                </>
              );
            })}
        </>
    )
}
export default PhoneDetails