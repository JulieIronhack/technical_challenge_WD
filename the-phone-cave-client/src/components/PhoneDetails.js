function PhoneDetails(props) {
    return (
        <>
        <h4>{props.manufacturer}</h4>
        <h4>{props.color}</h4>
        <h4>{props.screen}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
      </>
    );
  }
  
  export default PhoneDetails;