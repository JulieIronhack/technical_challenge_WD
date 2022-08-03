function PhoneDetails(props) {
  const { phone } = props;

  return (
    <div className="flex flex-col h-full justify-between p-12">
      <div>
        <h2 className="text-4xl font-medium">{phone.name}</h2>
        <h3 className="text-lg text-gray-400">{phone.manufacturer}</h3>
      </div>

      <img
        className="mx-auto max-w-xs"
        src={`/images/${phone.imageFileName}`}
        alt="beer taps"
      ></img>
      <div className="flex flex-col gap-2">
        <p className="text-left">{phone.description}</p>
        <div className="flex justify-center gap-5">
          <p>
            <span className="font-bold">Color</span>: {phone.color}
          </p>
          <p>
            <span className="font-bold">Price: </span>
            {phone.price}€
          </p>
        </div>
        
        <div className="flex justify-center gap-5">
          <p>
            <span className="font-bold">Screen: </span>
            {phone.screen}
          </p>
          <p>
            <span className="font-bold">Processor: </span>
            {phone.processor}
          </p>
          <p>
            <span className="font-bold">RAM: </span>
            {phone.ram}
          </p>
        </div>
      </div>
    </div>
  );
}
export default PhoneDetails;
