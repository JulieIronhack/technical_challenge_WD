import React from 'react'

function PhoneItem({ phone }) {
  return (
    <>
      <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={phone.imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{phone.name}</h5>
              {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
              <p className="card-text"><small className="text-body-secondary">{phone.price} €</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneItem