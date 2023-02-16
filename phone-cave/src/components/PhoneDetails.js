import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


function PhoneDetails(props) {
  const { phones } = props;
  const { phoneId } = useParams();

  const [details, setDetails] = useState('');

  useEffect(() => {
    const phoneDetails = phones.find(
      (phone) => phone.id == phoneId
    );
    setDetails(phoneDetails);
  }, [phones, phoneId]);


  return (
    <div className="col-7">
      {details? 
      (
        <div>
          <img
            src={``}
            alt={details.name.official}
          />
          <img src={require(`../assets/images/${details.imageFileName}`)} />
          <h1>{details.name} </h1>
          <h2>Manufacturer: {details.manufacturer} </h2>
          <h3>Color: {details.color}</h3>
          <div>{details.description} </div>
          <h4>Price: {details.price}</h4>
          <div>
            <h3>Details:</h3> <br />
            <h5>Screen: {details.screen}</h5>
            <h5>Processor: {details.processor}</h5>
            <h5>Ram: {details.ram}</h5>
          </div>          
        </div>
      )
      : <h1>Loading...</h1>
      }
      <Link to={`/phones`}>Phone List</Link>
    </div>
  );
}

export default PhoneDetails