import { useEffect, useRef, useState } from "react";
import ChatArea from "./ChatArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import "./ChatSection.css";

const ChatSection = ({ showSidebar, onToggleSidebar }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef();

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userMsg = { text, type: "user", timestamp: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          { text: data.reply, type: "bot", timestamp: new Date().toISOString() },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: data.error || "Bot did not respond.",
            type: "bot",
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } catch (e) {
      console.error("Fetch error:", e);
      setMessages((prev) => [
        ...prev,
        {
          text: "Error connecting to server.",
          type: "bot",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (iso) =>
    new Date(iso).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="chat-section">
      {!showSidebar && (
        <button className="toggle-sidebar" onClick={onToggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      <div className="chat-messages" ref={chatRef}>
        {!messages.length && !loading && (
          <p className="start-msg">Ask me anything health-related!</p>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`message-bubble ${m.type}`}>
            <div className="msg-text">
              <ReactMarkdown>{m.text}</ReactMarkdown>
            </div>
            <span className="msg-time">{formatTime(m.timestamp)}</span>
          </div>
        ))}

        {loading && (
          <div className="message-bubble bot">
            <em>Typing...</em>
          </div>
        )}
      </div>

      <div className="chat-input-wrapper">
        <ChatArea onSend={sendMessage} />
      </div>
    </div>
  );
};

export default ChatSection;
