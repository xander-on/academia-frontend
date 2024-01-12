import { Route, Routes } from "react-router-dom";
import { AcademiaRoutes } from "../academia/routes/AcademiaRoutes";



export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<AcademiaRoutes />} />
        </Routes>
    );
}
