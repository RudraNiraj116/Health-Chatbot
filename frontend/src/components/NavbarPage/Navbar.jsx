import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const user = { name: "John Doe" }; // Replace with actual user from context/state

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing token, redirecting)
    console.log("User logged out");
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-3">
      <div className="container d-flex justify-content-between align-items-center w-100">
        <a className="navbar-brand fw-bold text-white" href="#">
          <FontAwesomeIcon icon={faRobot} />
          Health Chatbot
        </a>

        <div className="user-info">
          <span>{user.name}</span>
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
