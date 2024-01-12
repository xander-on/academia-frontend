import { Link } from "react-router-dom";
import { GeneralLayout } from "../../shared/Layout";


export const HomePage = () => {

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    const menu = [
        {
            label: '👨‍🏫 Profesores',
            link: '/profesores',
        },
        {
            label: '📚 Materias',
            link: '/materias',
        },
        {
            label: '🏛 Aulas',
            link: '/aulas',
        },
    ];

    return (
        <GeneralLayout>
            <div className="col-6 offset-3">
                <h2 className="mt-5 mb-4">Menú:</h2>
                {
                    menu.map( ( item, index ) => (
                        <Link key={index} to={item.link} style={linkStyle}>
                            <div className="alert alert-primary" role="alert">
                                <h5 className="text-center">{item.label}</h5>
                            </div>
                        </Link>
                    ) )
                }
            </div>
        </GeneralLayout>
    );
}
