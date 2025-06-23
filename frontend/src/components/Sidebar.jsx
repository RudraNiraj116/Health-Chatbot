const Sidebar = ({ onToggle }) => {
  return (
    <div
      className="bg-danger text-white p-3"
      style={{ width: "300px", height: "100vh" }}
    >
      <button className="btn btn-light mb-3" onClick={onToggle}>
        Hide Sidebar
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
        eligendi ad exercitationem...
      </p>
    </div>
  );
};

export default Sidebar;
