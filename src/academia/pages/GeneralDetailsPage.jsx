import { Link, useNavigate } from "react-router-dom";
import { GeneralLayout } from "../../shared/Layout";


export const GeneralDetailsPage = ({ children }) => {

    const navigate = useNavigate();
    const navigateBack = () => navigate(-1);

    return (
        <GeneralLayout>
            <Link className="btn" onClick={ navigateBack }>
                <i className="bi bi-arrow-left-short"></i>
                Back to List
            </Link>

            <div className="col-8 offset-2">
                { children }
            </div>
        </GeneralLayout>
    );
}

