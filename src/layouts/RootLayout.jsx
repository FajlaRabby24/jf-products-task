import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default RootLayout;
