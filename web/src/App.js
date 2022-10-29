import './App.css';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import * as Screens from './screens';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={"/phones"} replace={true} />}></Route>
        <Route path="/phones" element={<Screens.ListPhoneScreen />}></Route>
        <Route path="/phones/:id" element={<Screens.DetailPhoneScreen />}></Route>
      </Routes>
    </div>
  );
}