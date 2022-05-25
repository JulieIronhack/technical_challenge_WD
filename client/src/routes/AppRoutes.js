import { Routes, Route } from "react-router-dom"
import IndexPage from "../pages/HomePage/HomePage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            {/* <Route path="/:id" element={<DetailPage />} /> */}
            <Route path="*" element={<h1>Esto es un 404</h1>} />
        </Routes>
    )
}

export default AppRoutes