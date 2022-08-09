function PhoneDetails(props) {

const { phone } = props;
    
    return(
<div className='phoneDeets'>

<div className='one'>
<img src={`../assets/${phone.imageFileName}`} alt="phone"/>

</div>

<div className='one'>
<h2>Manufacturer:</h2>
<p>{phone.manufacturer}</p>
</div>

<div className='one'>
<h2>Description:</h2>
<p>{phone.description}</p>
</div>

<div className='one'>
<h2>Color:</h2>
<p>{phone.color}</p>
</div>

<div className='one'>
<h2>Cost:</h2>
<p>${phone.price}</p>
</div>

</div>
)}
export default PhoneDetails;