import { Routes, Route } from "react-router-dom"
import PhonePage from '../routes/PhoneRoutes'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<PhonePage />} />
        </Routes>
    )
}

export default AppRoutes