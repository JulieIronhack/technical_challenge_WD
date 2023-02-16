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
      {details && (
        <div>
          <img
            src={``}
            alt={details.name.official}
          />
          <h1>{details.name} </h1>
          <div>{details.manufacturer} </div>
          <div>{details.description} </div>
          
        </div>
      )}
    </div>
  );
}

export default PhoneDetails