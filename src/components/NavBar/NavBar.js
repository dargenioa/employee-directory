import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(158, 52, 235)"}}>
      <Link className="navbar-brand"
      to="/"
      >
        Employee Directory
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
