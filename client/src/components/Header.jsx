import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="w-screen backdrop-blur-md bg-white border fixed top-0 px-8 py-4 border-b-orange-500">
      <Link to="/">
        <h1 className="text-xl text-orange-500 font-extrabold">
          The Phone Cave
        </h1>
      </Link>
    </nav>
  );
};

export default Header;
