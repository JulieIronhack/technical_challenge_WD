import PhoneDetails from "../components/PhoneDetails";
import { useState } from 'react';

function PhoneList(props){
const { phones } = props;
const [showComp, setShowComp] = useState(false);


const openComponent = (e) => {
    setShowComp(current => !current)
}

return(
<>
<div className="phoneList">
<h1>Phone Models</h1>

{phones &&
phones.map((phone) => {
return(
    <div key={phone._id} >
<h1>{phone.name}</h1>
<button onClick={openComponent}>See More Details on {phone.name}</button>

{showComp && (

<PhoneDetails phone={phone}/>

)}

</div>
)
})
}

</div>
</>
)
    
}

export default PhoneList;