import React from 'react'


export default function Telephone(props) {
    const {allPhones} =  props

  return (
    <div>
    {allPhones.map((element, index) => {
      return (
        <div key={element._id}>
      
        {element.name}
        {element.imageFileName}
        </div>
      )
    })}

     
    </div>
  )
}
