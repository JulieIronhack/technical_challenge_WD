import React from 'react'

function PhoneItem({ phone, onClick:handleClick }) {
  return (
    <>
      <div className="card mb-3" style={{maxWidth: '540px'}} onClick={handleClick}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={phone.imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{phone.name}</h5>
              <h6><span className="badge bg-warning" style={{color: 'black'}}>{phone.price} €</span></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneItem