import { Routes, Route } from "react-router-dom"
import IndexPage from "../pages/IndexPage/IndexPage"
import PhonesListPage from "../pages/PhonesListPage/PhonesListPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/phones" element={<PhonesListPage />} />
            <Route path="*" element={<h1>Esto es un 404 jeje</h1>} />
        </Routes>
    )
}

export default AppRoutes