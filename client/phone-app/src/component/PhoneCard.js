function PhoneCard (phone) {
    return (
    <>
   {phone.name && (
        <div className={'phoneCard'}>
        <h1>{phone.name}</h1>
        <h2>{phone.manufacturer}</h2>
        <img src={`images/${phone.imageFileName}`}
        alt={phone.name} />
        <p>Price:{phone.price}</p>
        <p>{phone.description}</p>
        <p>{phone.processor}</p>
        <p>RAM (GB): {phone.ram}</p>
    </div>
    )
       
    }
    </>
 
    )
}

export default PhoneCard