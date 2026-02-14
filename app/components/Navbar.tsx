import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-xl sm:text-2xl font-bold text-gradient leading-tight">CV Analyzer</p>
            </Link>
            <Link to="/upload" className="primary-button navbar-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar