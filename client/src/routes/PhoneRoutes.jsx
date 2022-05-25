import { Routes, Route } from "react-router-dom"
import PhonePage from '../pages/PhonePage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<PhonePage />} />
        </Routes>
    )
}

export default AppRoutes