import { Link } from "react-router-dom";



export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">🏫 Academy</Link>
            </div>
        </nav>
    );
}
