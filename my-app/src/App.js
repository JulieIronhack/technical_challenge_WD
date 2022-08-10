import { useEffect, useState } from "react";

function App() {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch('')
      .then((info) => info.json())
      .then((datos) => {
        setPhones(datos);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
