import './phone-details.css'

function PhonesDetails({ props }) {
    const { name, description, imageFileName, manufacturer, price, processor, ram, screen } = props;

    return (
        <div className="phone-container">
            <div className='info-wrapper'>
                <h3>{name}</h3>
                <p>{manufacturer}</p>
                <div className='description'>{description}</div>
                <div className='tech-info' >
                    <p>{ram} ram</p>
                    <p>{processor} processor</p>
                    <p>{screen} screen</p>
                </div>
                <p>$ {price}</p>
            </div>
            <div className='img-wrapper'>
                <img src={require(`../../images/${imageFileName}`)} alt={`image ${name}`} />
            </div>
        </div>
    )
}

export default PhonesDetails;