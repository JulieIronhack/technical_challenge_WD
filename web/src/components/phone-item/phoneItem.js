import React from 'react'

function PhoneItem({ phone }) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{phone.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneItem