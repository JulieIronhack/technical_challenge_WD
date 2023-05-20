import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-700 text-gray-50 px-3 py-5">
      <NavLink to={"/phones"} className="uppercase font-bold tracking-widest text-xl mr-4">Phones</NavLink>
      <NavLink to={"/"} className="uppercase font-bold tracking-widest text-xl">Home</NavLink>
    </nav>
  );
};

export default NavBar;
