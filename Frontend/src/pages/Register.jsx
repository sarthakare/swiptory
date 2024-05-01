import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Eye_icon from "../assets/images/closed_eye_image.png";
import "../components/css/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    try {
      const { data } = await axios.post("/register", {
        username,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Sucessful. welcome...");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="modalBackground">
      <div id="modalContainer" className="modalContainer">
        <div className="crossButton" onClick={goToHomePage}>
          X
        </div>{" "}
        {/* Added onClick handler */}
        <div className="heading">Register to SwipTory</div>
        <div className="inputFields">
          <form onSubmit={registerUser}>
            <div className="usernameDiv">
              <label className="username">UserName</label>
              <input
                className="usernameInput"
                type="text"
                placeholder="Enter Username"
                value={data.username}
                onChange={(e) => 
                  setData({ ...data, username: e.target.value })}
              />
            </div>
            <div className="passwordDiv">
              <label className="password">Password</label>
              <input
                className="passwordInput"
                type="password"
                placeholder="Enter password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <div className="eyeIcons">
                <img src={Eye_icon} alt="Closed Eye"></img>
              </div>
            </div>
            <button className="registerButton" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
