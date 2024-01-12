import { Link } from "react-router-dom";
import { GeneralLayout } from "../../shared/Layout";



export const HomePage = () => {
    return (
        <GeneralLayout>

            <div className="col-6 offset-3">
                <h2 className="mt-5 mb-4 text-center">Menu</h2>

                <Link to="/profesores">
                    <div className="alert alert-primary" role="alert">
                        <h5>👨‍🏫 Profesores</h5>
                    </div>
                </Link>

                <Link to="/materias">
                    <div className="alert alert-primary" role="alert">
                        <h5>📚 Materias</h5>
                    </div>
                </Link>

                <Link to="aulas">
                    <div className="alert alert-primary" role="alert">
                        <h5>🏛 Aulas</h5>
                    </div>
                </Link>
            </div>
        </GeneralLayout>
    );
}
