import { useState } from "react";
import { useGeminiAI } from "../../../Hooks/useGeminiAI";
import { IoAddCircleOutline, IoSend } from "react-icons/io5";
import toast from "react-hot-toast";
import { FaMagic } from "react-icons/fa";

function MessageComposer({
  handleSendMessage,
  messageText,
  setMessageText,
  draft,
}) {
  const [loading, setLoading] = useState(false);
  const gemini = useGeminiAI();

  const handleGeminiAI = () => {
    const msg = messageText || draft;
    if (msg.length === 0) {
      toast.error("Please write some message");
      return;
    }
    gemini(msg, setMessageText, setLoading);
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="p-4 border-t border-gray-700 bg-gray-800 flex items-center gap-3"
    >
      <label className="cursor-pointer">
        <input type="file" className="hidden" />
        <IoAddCircleOutline className="text-3xl text-slate-400 hover:text-slate-300 transition duration-200" />
      </label>

      <div className="flex items-center gap-2 flex-1 bg-gray-700 px-3 py-2 rounded-lg border border-gray-600">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent text-white text-sm placeholder-gray-400 outline-none"
        />
        {loading && (
          <div className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
        )}
        <FaMagic
          onClick={handleGeminiAI}
          className="text-lg text-purple-400 hover:text-purple-300 cursor-pointer transition duration-200"
        />
      </div>

      <button
        type="submit"
        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-200"
      >
        <IoSend className="text-xl" />
      </button>
    </form>
  );
}

export default MessageComposer;
