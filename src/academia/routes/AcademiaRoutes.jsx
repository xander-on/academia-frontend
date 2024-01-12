import { Route, Routes } from "react-router-dom";
import { 
    ProfesoresPage, 
    MateriasPage, 
    HomePage, 
    ProfesorDetailsPage, 
    MateriaDetailsPage, 
    AulasPage,
    AulaDetailsPage
} from "../pages";


export const AcademiaRoutes = () => {
    return (
        <Routes>
            <Route path=""                element={ <HomePage /> } />
            <Route path="profesores"      element={ <ProfesoresPage /> } />
            <Route path="profesores/:id"  element={ <ProfesorDetailsPage /> } />
            <Route path='materias'        element={ <MateriasPage /> } />
            <Route path="materias/:id"    element={ <MateriaDetailsPage /> } />
            <Route path="aulas"           element={ <AulasPage /> } />
            <Route path="aulas/:id"       element={ <AulaDetailsPage /> } />
        </Routes>
    );
}
