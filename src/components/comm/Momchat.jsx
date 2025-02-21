import React, { useState,useContext } from "react";
import styles from "./MomChat.module.css";
import PageContext from "../page/PageContext";
const MomChat = () => {
    const ctx = useContext(PageContext)
    const {changePage} = ctx
  const [messages, setMessages] = useState([
    { text: "Hello, Mama! 🌸 How can I support you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const getAIResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("sleep")) {
      return "Try a bedtime routine with dim lights and a lullaby. Consistency is key! 🌙";
    } else if (lowerCaseMessage.includes("feeding")) {
      return "For newborns, feed on demand. At 6 months, start introducing soft solids. 🍎";
    } else if (lowerCaseMessage.includes("postpartum")) {
      return "You're doing amazing! 💖 Don't forget to rest, hydrate, and reach out for support.";
    } else {
      return "That sounds important! Tell me more, Mama. 💕";
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    
    setTimeout(() => {
      const botReply = { text: getAIResponse(input), sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);

    setInput("");
  };

  return (
    <div className={styles.chatContainer}>
      <h2 className={styles.chatTitle}>🤱 AI Chat for Moms</h2>
      <div className={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "bot" ? styles.botMessage : styles.userMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything, Mama... 💬"
          className={styles.inputField}
        />
        <button onClick={sendMessage} className={styles.sendButton}>Send</button>
      </div>
      <button onClick={() => changePage("dashboard")}>Back</button>
    </div>
  );
};

export default MomChat;
