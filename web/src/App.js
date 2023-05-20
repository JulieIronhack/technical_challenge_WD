
import { Route, Routes } from 'react-router-dom'
import PhonesDashboardPage from './pages/PhonesDashboardPage';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/phones' element={<PhonesDashboardPage></PhonesDashboardPage>}></Route>
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
