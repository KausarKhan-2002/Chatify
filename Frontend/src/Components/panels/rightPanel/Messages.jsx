import React from "react";

function Messages({ chatUser, userId }) {
  return (
    <div className="flex-1 overflow-y-auto dark-scrollbar p-4 space-y-3 bg-gray-900">
      {chatUser.messages?.map((msg, index) => {
        const isSender = msg.from === userId;
        return (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 rounded-xl text-sm break-words shadow ${
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
  );
}

export default Messages;