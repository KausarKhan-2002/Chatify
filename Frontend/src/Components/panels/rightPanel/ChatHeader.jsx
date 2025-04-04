import React from "react";

function ChatHeader({ chatUser }) {
  return (
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
  );
}

export default ChatHeader;