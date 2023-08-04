import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextUser } from "../../context/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  const { auth, setAuth } = useContext(ContextUser);
  const [menu, setMenu] = useState(false);
  const handelLogout = () => {
    setAuth({ id: "", username: "", email: "", profile: "" });
  };

  return (
    <div className="nav_container container">
      <div>
        <Link to="/">
          <h1 className="logo">memoir.</h1>
        </Link>
      </div>
      <div className="nav_link">
        <span className=" toggle">
          {" "}
          {menu ? (
            <IoCloseSharp onClick={() => setMenu(!menu)} />
          ) : (
            <GiHamburgerMenu onClick={() => setMenu(!menu)} />
          )}
        </span>
        <div className={menu ? "mobile_links" : `links_container`}>
          {auth.username && <Link to="/profile">Profile </Link>}
          {auth.username && <Link to="/newpost">Create post </Link>}
          {auth.username && (
            <Link to="/" onClick={handelLogout}>
              Logout
            </Link>
          )}
          {!auth.username && <Link to="/register">Register </Link>}
          {!auth.username && <Link to="/login">Login </Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
