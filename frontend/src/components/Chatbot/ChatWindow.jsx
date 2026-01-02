export default function ChatWindow({
  messages,
  input,
  setInput,
  sendMessage,
  closeChat
}) {
  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-3">
        <span className="font-semibold">Saverii AI 🤖</span>
        <button onClick={closeChat} className="text-xl">✖</button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] p-2 rounded-lg text-sm ${
              m.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 p-3 border-t dark:border-gray-700">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          className="flex-1 px-3 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white text-sm"
          placeholder="Ask about my projects..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
