export default function ChatBubble({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:bg-blue-700 transition z-50"
      title="Chat with me"
    >
      💬
    </button>
  );
}
