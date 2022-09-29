import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [selection, setSelection] = useState([]);
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState([true, false]);

 const loader = (state) =>{
    setLoading(state)}

  useEffect(() => {
    axios
      .get("http://localhost:3001/phones")
      .then((response) => {
        loader([true, false])
        setPhones(response.data)
        loader([false, false])
                            })
      .catch((err) => console.log(err));
  }, []);

  const handleSelection = (id) => {
    console.log("request sent to id ", id);
    loader([false, true])

    axios
      .get(`http://localhost:3001/phones/${id}`)
      .then((response) => {
        setSelection(response.data)
        loader([false, false])})
      .catch((err) => console.log(err));
  };


 
console.log(loading)


  return (
    <div className="App">
      <div>
        <h1>List of Phones</h1>
        { loading[0] ? <h2>loading</h2> : null }
        {
        phones.map((phone) => {
          return (
            <div key={phone.id}>
              <h2>{phone.name}</h2>
              <h2>{phone.manufacturer}</h2>
              <h2>{phone.color}</h2>
              <button onClick={(e) => handleSelection(phone.id)}>
                More Details
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Specific Phone</h1>
        { loading[1] ? <h2>loading</h2> : null }
        
        <h2>{selection.name}</h2>
        <img src={selection.imageFileName} alt={selection.name}></img>
        <h2>{selection.manufacturer}</h2>
        <h2>{selection.color}</h2>
        <p>{selection.description}</p>
        <h2>{selection.price}</h2>
        <h2>{selection.processor}</h2>
        <h2>{selection.ram}</h2>
        <h2>{selection.screen}</h2>
      </div>
    </div>
  );
}

export default App;
