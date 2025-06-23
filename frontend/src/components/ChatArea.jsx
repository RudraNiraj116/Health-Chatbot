import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const ChatArea = () => {
  return (
    <>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
}

export default ChatArea
