import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserAccess } from "../../../../Store/userAccessSlice";

const ChatListItem = ({ users }) => {
  const [active, setActive] = useState("");
  const dispatch = useDispatch();

  function handleChatUser(user) {
    setActive(user.id);

    dispatch(getUserAccess(user));
  }

  return (
    <section className="relative">
      {users.map((user) => (
        <div
          onClick={() => handleChatUser(user)}
          key={user.id}
          className={`${
            active == user.id && "bg-slate-900"
          } relative flex justify-between items-center gap-3 px-3 cursor-pointer border-t-[1px] py-3 border-slate-700 hover:bg-slate-900`}
        >
          <div>
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={user.image}
              alt="Profile"
            />
          </div>

          <div className="flex justify-between w-[84%] border-slate-600">
            <div>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-xs">{user.chats[0]}</p>
            </div>
            <p className="text-slate-400 text-xs">{user.lastTime}</p>
          </div>

          {/* Message notification */}
          {user.newMessage && (
            <p className="absolute right-3 top-9 flex justify-center items-center text-xs font-bold bg-green-500 rounded-full min-w-6 h-6">
              {Math.floor(Math.random() * 20)}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default ChatListItem;
