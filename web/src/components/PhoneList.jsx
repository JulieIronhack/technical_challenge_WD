import React, { useState } from 'react';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';

function PhoneList({ phones, onPhoneSelect }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePhoneClick = (phoneId) => {
    onPhoneSelect(phoneId);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="md:w-1/3">
      <h2 className="text-2xl font-bold mb-2">Phone List</h2>
      <div className="relative">
        <button
          className="w-full text-left border-solid border-black rounded px-3 py-2 mb-2 md:hidden flex items-center justify-between"
          onClick={toggleDropdown}
        >
          <span className="flex items-center">
            <span>Select a phone</span>
            <MdOutlineArrowDropDownCircle
              className={`h-5 w-5 ml-2 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
            />
          </span>
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 w-full bg-white border-solid border-black rounded px-3 py-2 md:hidden">
            {phones.map((phone) => (
              <li
                key={phone.id}
                className="cursor-pointer mb-2 text-blue-500 px-3 py-2 boder-solid border-black"
                onClick={() => handlePhoneClick(phone.id)}
              >
                {phone.name}
              </li>
            ))}
          </ul>
        )}
        <ul className="hidden md:block">
          {phones.map((phone) => (
            <li
              key={phone.id}
              className="cursor-pointer mb-2 text-blue-500 border rounded px-3 py-2"
              onClick={() => handlePhoneClick(phone.id)}
            >
              {phone.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhoneList;
