import { Link, NavLink } from "react-router-dom";
import "./../assets/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="nav-title text-[40px] font-semibold">Module App</div>
        </Link>
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Event</NavLink>
          </li>
          <li>
            <NavLink to="/taskbar">Booked Details</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
