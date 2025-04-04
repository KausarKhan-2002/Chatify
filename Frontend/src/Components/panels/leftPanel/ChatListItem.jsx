import React from "react";
import { chatUsers } from "../../../Utils/testingUser";
import { PhoneCall } from "lucide-react"; // Call icon

function ChatListItem() {
    const handleChatUsers = (user) => {
        console.log(user);
        
    }
  return (
    <div className="bg-gray-900 p-4 rounded-l-2xl shadow-lg h-[94vh] overflow-auto">
      <h2 className="text-lg font-semibold text-white mb-3">Chats</h2>

      {chatUsers.map((user) => {
        // Get last message if available
        const lastMessage =
          user.messages.length > 0
            ? user.messages[user.messages.length - 1]
            : null;
        const unreadMessages =
          user.messages.length > 0 ? user.messages.length : 0;

        return (
          <div
            key={user.id}
            onClick={() => handleChatUsers(user)}
            className="flex items-center gap-7 px-3 py-3 rounded-lg hover:bg-gray-800 transition relative"
          >
            {/* Profile Picture or Group Stack */}
            <div className="relative w-12 h-12">
              {user.groups.length > 0 ? (
                <div className="flex items-center">
                  {user.contacts.slice(0, 3).map((contactId, index) => {
                    const contact = chatUsers.find((u) => u.id === contactId);
                    return (
                      contact && (
                        <img
                          key={contact.id}
                          src={contact.profilePic}
                          alt={contact.name}
                          className={`w-8 h-8 rounded-full border-2 top-1 border-gray-900 absolute`}
                          style={{
                            left: `${index * 15}px`,
                            zIndex: user.contacts.length - index,
                          }}
                        />
                      )
                    );
                  })}
                </div>
              ) : (
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border border-gray-700"
                />
              )}
              {/* Status Indicator */}
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-900 ${
                  user.status === "online" ? "bg-green-500" : "bg-gray-500"
                }`}
              ></span>
            </div>

            {/* Chat Details */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-white font-medium">{user.name}</h2>
                {/* Last Seen / Timestamp */}
                <p className="text-gray-500 text-xs">{user.lastSeen}</p>
              </div>

              {/* Bio/Occupation */}
              <p className="text-gray-400 text-xs">
                {user.bio || "No Bio Available"}
              </p>

              {/* Last Message */}
              <p className="text-gray-400 text-sm truncate max-w-[200px]">
                {lastMessage ? lastMessage.message : "No messages yet"}
              </p>
            </div>

            {/* Right Side */}
            <div className="text-right flex flex-col items-end">
              {/* Unread Messages */}
              {unreadMessages > 0 && (
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  {unreadMessages}
                </span>
              )}

              {/* Call Icon */}
              {user.contacts.length > 0 && (
                <PhoneCall
                  className="text-gray-400 hover:text-gray-200 cursor-pointer"
                  size={18}
                />
              )}
            </div>

            {/* Pinned Chat Indicator */}
            {user.pinnedChats.length > 0 && (
              <span className="absolute text-sm left-2 top-2 text-yellow-400">
                📌
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ChatListItem;
