
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import PhoneDetails from './pages/PhoneDetails'
import {Routes , Route} from 'react-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar/>

      <div id="page"> 
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/phone-details/:phoneId" element={<PhoneDetails/>}/> 
      <Route path="/error" element={<Error/>}/>
      <Route path="/*" element={ <NotFound/>}/>

      </Routes>
      
      
      
      </div>

    </div>
  );
}

export default App;
