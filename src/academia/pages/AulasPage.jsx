import { GeneralLayout } from "../../shared/Layout";
import { AulasList, FormAddAula } from "../components";

export const AulasPage = () => {
    return (
        <GeneralLayout>
            <AulasList />
            <FormAddAula/>
        </GeneralLayout>
    );
}
