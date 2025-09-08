import { NavLink } from "react-router";

const NavLinks = ({ children, href }) => {
  return (
    <li>
      <NavLink to={href}>{children}</NavLink>
    </li>
  );
};

export default NavLinks;
