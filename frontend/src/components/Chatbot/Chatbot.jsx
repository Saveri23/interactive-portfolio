import { useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatWindow from "./ChatWindow";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi 👋 I’m Saveri. Ask me about my projects!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    let reply = "I'm still learning! 😄";

    const text = input.toLowerCase();
    if (text.includes("project")) reply = "I’ve built an AI Portfolio and a Spring Boot app.";
    if (text.includes("skill")) reply = "My skills include React, Java, Spring Boot, and SQL.";
    if (text.includes("hi")) reply = "Hello! 👋 How can I help you?";

    setMessages([...messages, userMsg, { role: "bot", content: reply }]);
    setInput("");
  };

  return (
    <>
      {!open && <ChatBubble onClick={() => setOpen(true)} />}
      {open && (
        <ChatWindow
          messages={messages}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          closeChat={() => setOpen(false)}
        />
      )}
    </>
  );
}
