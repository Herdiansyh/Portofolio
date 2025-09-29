import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: input,
      });

      const reply = res.data.reply || "Tidak ada balasan dari AI.";
      setMessages([...newMessages, { sender: "ai", text: reply }]);
    } catch (err) {
      const errorMsg =
        err.response?.data?.error || "Tidak bisa menghubungi server.";
      setMessages([
        ...newMessages,
        { sender: "ai", text: `⚠️ Error: ${errorMsg}` },
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating button */}
      <div className="chat-button" onClick={toggleChat}>
        <img src="/whatsapp.png" alt="chat" />
      </div>

      {/* Chat box */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <img src="./assets/bot.png" alt="" style={{ width: 30 }} />
            Herdi Agent
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${
                  msg.sender === "user" ? "user" : "ai"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Kirim</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
