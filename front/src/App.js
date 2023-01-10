import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Route, Routes } from 'react-router-dom';
import { DetailPage, Homepage } from './views';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/detail/:id' element={<DetailPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
