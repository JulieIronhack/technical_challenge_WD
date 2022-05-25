import { Routes, Route } from "react-router-dom"
import PhonesPage from "../pages/PhonesPage/PhonesPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/phones" element={<PhonesPage />} />
        </Routes>
    )
}

export default AppRoutes