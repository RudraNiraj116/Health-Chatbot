import { useState } from "react";
import ChatArea from "../components/ChatArea";

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
            } vh-100 p-3 d-flex flex-column`}
          >
            {!sidebarOpen && (
              <button className="btn btn-dark mb-3" onClick={toggleSidebar}>
                Show Sidebar
              </button>
            )}

            <h4>Chat Section</h4>

            {/* Chat container with scrollable messages and fixed input */}
            <div className="bg-white p-3 rounded flex-grow-1 d-flex flex-column">
              {/* Scrollable message area */}
              <div
                className="flex-grow-1 mb-3 overflow-auto"
                style={{ maxHeight: "100%" }}
              >
                {/* Chat messages can go here */}
                <p>Hi! This is a message.</p>
                <p>Another message...</p>
              </div>

              {/* Input box at bottom */}
              <ChatArea />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainarea;
