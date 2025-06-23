import ChatArea from "./ChatArea";

const ChatSection = ({ showSidebar, onToggleSidebar }) => {
  return (
    <div
      className="flex-grow-1 p-3 d-flex flex-column"
      style={{ height: "100vh" }}
    >
      {!showSidebar && (
        <button
          className="btn btn-dark mb-3"
          onClick={onToggleSidebar}
          style={{ width: "fit-content" }}
        >
          Show Sidebar
        </button>
      )}

      <h4>Chat Section</h4>

      <div className="bg-white p-3 rounded flex-grow-1 d-flex flex-column">
        <div className="flex-grow-1 mb-3 overflow-auto">
          <p>Hi! This is a message.</p>
          <p>Another message...</p>
        </div>

        <ChatArea />
      </div>
    </div>
  );
};

export default ChatSection;
