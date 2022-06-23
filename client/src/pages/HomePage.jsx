import logo from "../logo.svg";
import "../App.css";
import Phones from "../components/Phones";


function HomePage() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <h1>
        The Phone Cave (WD)
      </h1>
      
      <container>
      <Phones/>
      </container>
    </div>
  );
}

export default HomePage;
