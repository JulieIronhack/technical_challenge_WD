import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/phones">
                <button>Phones</button>
            </Link>

        </nav>
    );
}

export default NavBar;