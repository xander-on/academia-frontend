import { GeneralLayout } from "../../shared/Layout";
import { ProfesoresList } from "../components";
import { FormAddProfesor } from "../components/FormAddProfesor";



export const ProfesoresPage = () => {
    return (
        <GeneralLayout>
            <ProfesoresList />
            <FormAddProfesor />
        </GeneralLayout>
    );
}
