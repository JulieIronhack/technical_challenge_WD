import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
// import PhoneDetailsPage from "../pages/PhonesPage/PhoneDetailsPage"
import PhonesPage from "../pages/PhonesPage/PhonesPage"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhonesPage />} />
            {/* <Route path="/phones/:id" element={<PhoneDetailsPage />} /> */}
            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}
export default AppRoutes