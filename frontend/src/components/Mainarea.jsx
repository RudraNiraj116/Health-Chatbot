import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";

const Mainarea = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="d-flex" style={{ height: "100vh", width: "100%" }}>
      {sidebarOpen && <Sidebar onToggle={toggleSidebar} />}
      <ChatSection showSidebar={sidebarOpen} onToggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Mainarea;
