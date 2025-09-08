import { Link } from "react-router";

const Logo = ({ className, width }) => {
  return (
    <Link to={"/"} className={` ${className} bg-white rounded-full z-50`}>
      <img width={width || `60px`} src="/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
