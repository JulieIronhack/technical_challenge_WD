import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import data from "../../data/phones.json"
import "./list.css"
import { useParams } from "react-router";
import FadeInOut from '../fade/FadeInOut'
function List() {
  const [phoneList, setPhoneList] = useState([])
  const [info, setInfo] = useState(false)
  const handleInfo = () => {
        setInfo(!info)
  }

  const { id } = useParams();
console.log("el id", id)
  useEffect(() => {
    const timeout = setTimeout(() => {
        setPhoneList(data)
    }, 4000)
    return () => {
        clearTimeout(timeout)
    }
}, [])
if (phoneList.length === 0){
    return <div>
    <center className="mt-5 loading-background"><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1668698058/donGions%20imgs/demo_rgr63q.gif" width="300px" alt="Loading img" /></center>
    <h1>Loading...</h1>
    </div>
}

  return (
    <div align="center">
      <div className='title-page'>Choose your favorite among the best<br /> 50% discount in the next 17 minutes</div>
        <div className="list-css">
          {data.map((p) =>(
              <div key={p.name}>
                    <ul>
                        <list className='list-items'>
                            <Link onClick={handleInfo} to={`/phones/${p.id}`}><img src={p.img} alt="Phones" height="10%" /> </Link>
                        </list>
                    </ul>
                    {info && 
                    <FadeInOut show={info} ration={500} >
                              <div>

                              <div> <h4>{p.name}</h4>  </div>
                                <div className='description'>                                
                                    <div>Manufacturer: {p.manufacturer} </div>
                                    <div>Color: {p.color} </div>
                                    <div>Model: {p.imageFileName} </div>
                                    <div>Screen: {p.screen} </div>
                                    <div>Processor: {p.processor} </div>
                                    <div> Ram: {p.ram} </div>
                                    <div>Price: {p.price} </div>
                              </div>
                          </div>
                    </FadeInOut>
                    }
              </div>

            ))}
        </div>

    </div>
  )
}

export default List