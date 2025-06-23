import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const ChatArea = () => {
  return (
    <>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Type your message here..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default ChatArea;
