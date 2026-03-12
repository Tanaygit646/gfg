import { useState } from "react";
import "./ChatPanel.css";

export default function ChatPanel() {

  const [messages, setMessages] = useState([
    { text: "Hello! How can I help?", sender: "bot" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };

    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "This is a reply message.", sender: "bot" }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chat-container">

      <div className="chat-messages">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}

      </div>

      <div className="chat-input">

        <button className="plus">+</button>

      <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") sendMessage(e);
  }}
  placeholder="Ask something..."
/>

        <button onClick={sendMessage}>Send</button>

      </div>

    </div>
  );
}