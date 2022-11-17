function PhonesDetails({ props }) {
    const { name, description, imageFileName, manufacturer, price } = props;

    return (
        <div>
            <h2>phone details go here</h2>
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>{manufacturer}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <div>
                    <img src={require(`../../images/${imageFileName}`)} alt={`image ${name}`} />
                </div>
            </div>
        </div>
    )
}

export default PhonesDetails;