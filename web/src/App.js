import { Route, Routes} from 'react-router-dom'
import './App.css';
import { Detail } from './components';
import FrontpageScreen from './screens/frontpage/FrontpageScreen';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route  path="/phones" element={<FrontpageScreen/>} /> 
        <Route  path="/phones/:id" element={<FrontpageScreen/>} /> 
        
    </Routes>
    </div>
  );
}

export default App;
