import { Routes, Route } from "react-router-dom"
import PhonesPage from '../pages/phonePage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/moviles" element={<PhonesPage />} />
        </Routes>

    )
}

export default AppRoutes