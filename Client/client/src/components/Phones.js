import { useEffect, useState } from "react";
import axios from "axios";


function Phones () {

    const[phones, setPhones] = useState("")


    useEffect(() => {                       
        axios
          .get(`${process.env.REACT_APP_API_URL}/phones`)
          .then((response) => {
            console.log('response.data', response.data);
            setPhones(response.data)
          });
    }, [] );




    return (
        <div>
                <h1>This is the phones list</h1>
                <div>
                    {phones.length === 0 ? 
                    <h1>Loading...</h1>
                    : (
                        phones.map((e) => {
                           <section>
                               <p>Name:{e.phone.name}</p>
                           </section>
                        })
                    )
                }
                </div>

        </div>
    )
}

export default Phones;