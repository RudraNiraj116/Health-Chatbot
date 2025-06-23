import { useState } from "react";

const Mainarea = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="col-md-3 bg-danger vh-100 p-3">
              <button className="btn btn-light mb-3" onClick={toggleSidebar}>
                Hide Sidebar
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt et eligendi ad exercitationem...
              </p>
            </div>
          )}

          {/* Chat Section */}
          <div
            className={`${
              sidebarOpen ? "col-md-9" : "col-md-12"
            } bg-info vh-100 p-3`}
          >
            {!sidebarOpen && (
              <button className="btn btn-dark mb-3" onClick={toggleSidebar}>
                Show Sidebar
              </button>
            )}
            <h4>Chat Section</h4>
            <div
              className="bg-white p-3 rounded"
              style={{ height: "85%", overflowY: "auto" }}
            >
              {/* Chat messages go here */}
              <p>sdsfs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainarea;
