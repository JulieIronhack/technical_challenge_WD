import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import AllPhones from "../pages/AllPhonesPage/AllPhonesPage"
import PhoneDetails from "../pages/PhoneDetailsPage/PhoneDetailsPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<AllPhones />} />
            <Route path="/phones/:id" element={<PhoneDetails />} />
        </Routes>
    )
}

export default AppRoutes    