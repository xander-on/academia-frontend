import { GeneralLayout } from "../../shared/Layout/GeneralLayout"
import { FormAddMateria, MateriasList } from "../components"



export const MateriasPage = () => {
    return (
        <GeneralLayout>
            <MateriasList />
            <FormAddMateria />
        </GeneralLayout>
    )
}
