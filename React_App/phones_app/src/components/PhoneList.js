import { useState } from "react";

export function PhoneList(props) {
    const [selectedPhoneId, setSelectedPhoneId] = useState(-1);

    const viewPhoneDetails = (phoneId) => {
        setSelectedPhoneId(phoneId)
    }

    return (
        <div className="phoneList">
            <ul>
                {props.phones &&
                props.phones.map((phone) => {
                    return (
                        <li key={phone.id}>
                            <img width={200} src={require(`../../public/assets/${phone.imageFileName}`)} alt={`${phone.name} Pic`} />
                            <h3>{phone.name}</h3>
                            {selectedPhoneId !== phone.id
                             ? <button className="detailsBtn" onClick={ () => viewPhoneDetails(phone.id) }>Details</button>
                             : <>
                                    <p><b>Manufacturer: </b>{phone.manufacturer}</p>
                                    <p><b>Description: </b>{phone.description}</p>
                                    <p><b>Color: </b>{phone.color}</p>
                                    <p><b>Price: </b>{phone.price + " EUR"}</p>
                                    <p><b>Screen: </b>{phone.screen}</p>
                                    <p><b>Processor: </b>{phone.processor}</p>
                                    <p><b>RAM: </b>{phone.ram}</p>
                                    <button className="closeDetailsBtn" onClick={ () => setSelectedPhoneId(-1) }>Close</button>
                               </> 
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}