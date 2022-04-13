import "./Sidebar.css";
import logo from "../../assets/mphasis-logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Mphasis</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
            <i class="bi bi-house-fill"></i>
            <a href="#">Dashboard</a>
        </div>
        <h2>Controls</h2>
        <div className="sidebar__link">
            <i class="bi bi-file-plus-fill"></i>
            <a href="#">Add New Question</a>
        </div>

        <div className="sidebar__link">
            <i class="bi bi-check2-square"></i>
            <a href="#">Modify Question</a>
        </div>

        <div className="sidebar__link">
            <i class="bi bi-trash3"></i>
            <a href="#">Remove Question</a>
        </div>

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
