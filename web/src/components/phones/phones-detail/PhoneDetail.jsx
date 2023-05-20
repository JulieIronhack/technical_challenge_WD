import React from 'react'

export default function PhoneDetail({ phone }) {
  return (
    <div>
      <img src={`/images/${phone.imageFileName}`} alt={phone.name} />
      <div>{phone.name}</div>
      <div>{phone.manufacturer}</div>
      <div>{phone.description}</div>
      <div>{phone.color}</div>
      <div>{phone.price}</div>
      <div>{phone.screen}</div>
      <div>{phone.processor}</div>
      <div>{phone.ram}</div>
    </div>
  )
}
