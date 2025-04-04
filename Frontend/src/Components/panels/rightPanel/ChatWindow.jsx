import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoAddCircleOutline } from "react-icons/io5";
import { sendMessage } from "../../../Store/currentChatSlice";

const ChatWindow = () => {
  const dispatch = useDispatch();
  const chatUser = useSelector((state) => state.currentChat);
  const currentUserId = "u1"; // Simulating the logged-in user ID
  const [messageText, setMessageText] = useState("");

//   npm i @google/genai

  useEffect(() => {
    setMessageText(chatUser?.draft)
  }, [chatUser?.draft])

  if (!chatUser) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-700 text-gray-500">
        Select a chat to start messaging.
      </div>
    );
  }

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    if (currentUserId === chatUser.id) {
        alert("You can't msg for yourself")
        return
    }

    dispatch(
      sendMessage({
        from: currentUserId,
        to: chatUser.id,
        message: messageText,
      })
    );

    setMessageText("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-700 bg-gray-800">
        <img
          src={chatUser.profilePic}
          alt={chatUser.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{chatUser.name}</h2>
          <p className="text-sm text-gray-400">
            {chatUser.status === "online"
              ? "Online"
              : `Last seen ${chatUser.lastSeen}`}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-900">
        {chatUser.messages?.map((msg, index) => {
          const isSender = msg.from === currentUserId;
          return (
            <div
              key={index}
              className={`w-[170px] md:w-[280px] px-4 py-2 rounded-lg text-sm break-words ${
                isSender
                  ? "ml-auto bg-blue-600 text-white"
                  : "mr-auto bg-gray-700 text-gray-100"
              }`}
            >
              <p>{msg.message}</p>
              <span className="block text-xs mt-1 text-right opacity-60">
                {msg.timestamp}
              </span>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center gap-2">
        <label>
          <input type="file" className="w-[100px] hidden" />
          <IoAddCircleOutline className="text-3xl text-slate-400 cursor-pointer hover:text-slate-300" />
        </label>
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 text-sm outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
