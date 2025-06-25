import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPenToSquare,
  faSearch,
  faHeartbeat,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onToggle }) => {
  return (
    <div className="sidebar">
      <button className="close-btn" onClick={onToggle}>
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <h2 className="sidebar-title">Health Assistant</h2>

      <div className="icon-group">
        <div className="icon-item">
          <FontAwesomeIcon icon={faPenToSquare} />
          <span>Notes</span>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faSearch} />
          <span>Scan</span>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faStethoscope} />
          <span>Checkup</span>
        </div>
        <div className="icon-item">
          <FontAwesomeIcon icon={faHeartbeat} />
          <span>Vitals</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
