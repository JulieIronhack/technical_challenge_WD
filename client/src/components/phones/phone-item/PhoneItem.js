import React from 'react'
import './phoneItem.css'

function PhoneItem({name, manufacturer, price, color:phoneColor, imageFileName}) {
  return (
<div className=" m-0">
  <div  className="text-decoration-none d-flex">
    <div className='col-4 p-2 d-flex flex-column booking-card rounded-4 position-relative p-2' style={{backgroundImage:`url(/assets/images/${imageFileName}) `}}/>
    
    <div className="p-3 col-7 justify-content-center align-items-center align-content-center">
      <div className="d-flex  mb-1 border-bottom justify-content-between align-items-baseline ">
        <h3 className="m-0 fs-6 fw-bold col-9">{name}</h3>
        <span className="text-muted views text-end w-100 fw-bold">
          {price && <p className="m-0 fs-8">{price} $</p>
          } 
        </span>
      </div>


      <div className="d-flex my-1 border-bottom justify-content-start align-items-baseline">
        <i className="fa fa-building fa-fw text-secondary fs-8" aria-hidden="true">&nbsp;</i> <p className="m-0 fs-8">&nbsp; {manufacturer}</p>
      </div>

      <div className="d-flex my-1  border-bottom justify-content-start" >
      <i className={`fa fa-fw  justify-content-center align-self-center fs-8 border rounded-5`}  style={{backgroundColor:`${phoneColor}`}} aria-hidden="true">&nbsp; </i>
        <p className="fs-8 m-0">&nbsp; {phoneColor} &nbsp; </p>
      </div>
    </div>

    <div className="col-1 d-flex align-items-center">
        <i className="fa fa-chevron-right d-flex align-items-center align-self-center text-secondary" />
    </div>

  </div>


    </div>
  )
}

export default PhoneItem




PhoneItem.defaultProps = {
  name: "Unknown",
  manufacturer:"Unknown",
  price: "Unknown",
  color: "Unknown",
  imageFileName: "https://picsum.photos/200/300"
};