import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './pages/main';

function App() {
  return (
   <>
<Routes>
  <Route path='/phones' element={<Main></Main>}></Route>
</Routes>
   </>
  );
}

export default App;
