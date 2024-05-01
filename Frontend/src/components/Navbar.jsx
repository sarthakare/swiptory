import '../components/css/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar_header">
          <Link to="/" className="home">
            SwipTory
          </Link>
        </div>
        <div className="navbar_buttons">
          <div className="navbar_btn_register">
            <Link to="/register" className="register">
              Register Now
            </Link>
          </div>
          <div className="navbar_btn_login">
            <Link to="/login" className="login">
              Sign In
            </Link>
          </div>
          <div className="navbar_btn_login">
            <Link to="/addstory" className="login">
              Add Story
            </Link>
          </div>
          <div className="navbar_btn_login">
            <Link to="/bookmark" className="login">
              bookmark
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
