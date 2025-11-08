import { NavLink } from "react-router-dom";
export default function MyHeader() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/movies/add"}>Add a Movie</NavLink>
      </nav>
    </header>
  );
}
