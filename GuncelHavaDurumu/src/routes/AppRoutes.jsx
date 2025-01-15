import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePages.jsx";
import WeatherPage from "../pages/WeatherPage.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather/:city" element={<WeatherPage />} />
        </Routes>
    );
}

export default AppRoutes;
