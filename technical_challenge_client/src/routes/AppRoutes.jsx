import { Routes, Route } from "react-router-dom"
import AllPhones from './../pages/AllPhonePages'
import PhoneDetails from './../pages/PhoneDetailsPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AllPhones />} />
            <Route path="/" element={<PhoneDetails />} />
        </Routes>
    )
}

export default AppRoutes