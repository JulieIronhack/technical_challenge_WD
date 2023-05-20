import { useEffect, useState } from "react";
import { useThePhoneCaveContext } from "../context/thePhoneCave";
import { useParams } from "react-router-dom";

const PhoneDetail = () => {
  const [phone, setPhone] = useState();
  const handlePhonesContext = useThePhoneCaveContext();

  const { id } = useParams();

  useEffect(() => {
    async function listPhones() {
      try {
        const singlePhone = await handlePhonesContext("DETAIL", parseInt(id));
        setPhone(singlePhone);
      } catch (error) {
        console.error(error);
      }
    }

    listPhones();
  }, [id]);

  return (
    <div className="w-11/12 mx-auto flex justify-center pt-20 pb-10">
      {phone ? (
        <div className="grid grid-cols-2 place-items-center rounded-lg border-2 border-gray-800 px-5">
          <div>
            <img src={`/images/${phone.imageFileName}`} alt={phone.name} />
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="uppercase font-bold text-2xl">{phone.name}</h1>
            <p className="text-xl">{phone.description}</p>
            <h2 className="font-semibold text-xl">Specifications:</h2>
            <ul className="text-xl flex flex-col gap-2">
              <li>
                <span className="font-bold">Manufacturer:</span>{" "}
                {phone.manufacturer}
              </li>
              <li>
                <span className="font-bold">Model:</span> {phone.name}
              </li>
              <li>
                <span className="font-bold">Screen:</span> {phone.screen}
              </li>
              <li>
                <span className="font-bold">Processor:</span> {phone.processor}
              </li>
              <li>
                <span className="font-bold">RAM:</span> {phone.ram}
              </li>
              <li>
                <span className="font-bold">Color:</span> {phone.color}
              </li>
            </ul>
            <span className="font-bold text-4xl">{phone.price}€</span>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PhoneDetail;
