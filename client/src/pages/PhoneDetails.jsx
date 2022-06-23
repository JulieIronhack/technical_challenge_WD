import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader'

export default function PhoneDetails() {
    const [phoneInfo, setPhoneInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getPhoneInfo();
    }, [])

    const getPhoneInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/phones/${id}`);
            console.log(response);
            setPhoneInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='bg-white'>
            <Link to={`/`} className="absolute left-0 top-0 bg-cyan-700 px-5 py-2 rounded-xl mt-2 ml-2 text-white">HOME</Link>
            {phoneInfo === null && <div className="App flex flex-row justify-center items-center align-items-center h-full w-full"><DotLoader /></div>}
            {phoneInfo !== null &&
                <div className="phone flex flex-col flex-wrap justify-center items-center align-items-center h-full w-full">
                    <div className='w-5/12 flex flex-row flex-wrap justify-center items-center align-items-center h-full w-full'>
                        <img src={phoneInfo.imageFileName} alt={phoneInfo.name} srcSet="" width={500} className="text-right rounded-3xl" />
                    </div>
                    <div className='w-5/12 bg-gray-900 p-7 rounded-2xl text-white'>
                        <p className="phoneTitle"><span className="font-bold">Phone name:</span> {phoneInfo.name}</p>
                        <p className="manufacturer"><span className="font-bold">Manufacturer:</span> {phoneInfo.manufacturer}</p>
                        <p className="description"><span className="font-bold">Description:</span> {phoneInfo.description}</p>
                        <p className="color"><span className="font-bold">Color:</span> {phoneInfo.color}</p>
                        <p className="price"><span className="font-bold">Price:</span> {phoneInfo.price}€</p>
                        <p className="screen"><span className="font-bold">Screen:</span> {phoneInfo.screen}</p>
                        <p className="processor"><span className="font-bold">Processor:</span> {phoneInfo.processor}</p>
                        <p className="ram"><span className="font-bold">Ram:</span> {phoneInfo.ram}GB</p>
                    </div>
                </div>
            }
        </div>
    )
}
