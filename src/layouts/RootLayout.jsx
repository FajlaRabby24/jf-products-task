import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <div>
      <ToastContainer position="top-left" autoClose={1500} />
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
