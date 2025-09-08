import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router";
import Container from "../common/Container";
import Logo from "../common/Logo";
import NavLinks from "../common/NavLinks";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Shop",
      href: "/shop",
    },
    {
      id: 3,
      name: "Blog",
      href: "/blog",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
    },
  ];
  const linksMap = links.map((link) => (
    <NavLinks key={link.id} href={link.href}>
      {link.name}
    </NavLinks>
  ));
  return (
    <Container>
      <nav className="navbar relative">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" pr-3  md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {linksMap}
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden md:flex  space-x-4">
            {linksMap}
          </ul>
          <Logo width="45px" className="md:hidden" />
        </div>
        <div className="navbar-center hidden md:flex ">
          <Logo className="absolute mt-6 p-2" />
        </div>
        <div className="navbar-end space-x-5">
          <Link to={"/auth/login"}>
            <button className="btn btn-primary rounded-full px-6 text-black border-0">
              Login <FiUser size={15} />
            </button>
          </Link>
          <span>
            <CiSearch size={25} />
          </span>
          <span>
            <MdOutlineShoppingBag size={25} />
          </span>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
