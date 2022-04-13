import "./Navbar.css";
import avatar from "../../assets/user.ico";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <h1>ChatBot Admin Panel</h1>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i class="bi bi-search"></i>
        </a>
        <a href="#">
          <i class="bi bi-bell-fill"></i>
        </a>
        <a href="#">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
