import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DotLoader from 'react-spinners/DotLoader'

export default function PhoneDetailsComp(props) {
    const [phoneInfo, setPhoneInfo] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const { id } = props

    const getPhoneInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/phones/${id}`);
            console.log(response);
            setPhoneInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    const handleShowDetails = () => {
        setShowDetails(true);
        setTimeout(getPhoneInfo, 2000);
    }


    return (
        <>
            {showDetails === false &&
                <div className="flex flex-row justify-center items-center align-items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleShowDetails}>
                        See Details
                    </button>
                </div>
            }
            {
                showDetails === true && phoneInfo === null && <div className="App flex flex-row flex-wrap justify-center items-center align-items-center h-full w-full"><DotLoader color={"white"} /></div>
            }
            {
                showDetails === true && phoneInfo !== null &&
                <div className="phone flex flex-col flex-wrap justify-center items-center align-items-center h-full w-full">
                    <p className="phoneTitle"><span className="font-bold">Phone name:</span> {phoneInfo.name}</p>
                    <p className="manufacturer"><span className="font-bold">Manufacturer:</span> {phoneInfo.manufacturer}</p>
                    <p className="description"><span className="font-bold">Description:</span> {phoneInfo.description}</p>
                    <p className="color"><span className="font-bold">Color:</span> {phoneInfo.color}</p>
                    <p className="price"><span className="font-bold">Price:</span> {phoneInfo.price}€</p>
                    <p className="screen"><span className="font-bold">Screen:</span> {phoneInfo.screen}</p>
                    <p className="processor"><span className="font-bold">Processor:</span> {phoneInfo.processor}</p>
                    <p className="ram"><span className="font-bold">Ram:</span> {phoneInfo.ram}GB</p>
                </div>
            }
        </>
    )
}
