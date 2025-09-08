import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Page Not Found!</h1>
        <Link to={"/"}>
          <button className="text-black btn btn-primary">
            Back To Home <FaArrowRight size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
