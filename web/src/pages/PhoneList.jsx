import { useEffect, useState } from "react";
import { useThePhoneCaveContext } from "../context/thePhoneCave";

const PhoneList = () => {
  const [phones, setPhones] = useState();
  const handlePhonesContext = useThePhoneCaveContext();

  useEffect(() => {
    async function listPhones() {
      try {
        const allPhones = await handlePhonesContext("ALL");
        setPhones(allPhones);
      } catch (error) {
        console.error(error);
      }
    }

    listPhones();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 w-11/12 mx-auto place-items-center gap-y-20 pt-20 pb-10">
      {phones ? (
        phones.map((phone) => (
          <div key={phone.id} className="flex flex-col justify-between rounded-lg border-2 border-gray-600 w-[300px] h-[450px]">
            <div className="w-[200px] m-auto">
              <img src={`./images/${phone.imageFileName}`} alt={phone.name} className="rounded-lg" />
            </div>
            <div className="flex flex-col px-8 gap-4 pb-6">
              <h1 className="text-center font-bold text-3xl">{phone.name}</h1>
              <span className="text-end font-semibold text-2xl">{phone.price}€</span>
              <a href={`/phones/${phone.id}`} rel="noopener noreferrer" className="bg-blue-600 text-center rounded-lg text-xl uppercase text-gray-50 w-3/4 px-4 py-2 mx-auto">
                Learn More
              </a>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PhoneList;
