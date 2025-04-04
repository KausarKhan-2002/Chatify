import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import { sendMessage } from "../../../Store/currentChatSlice";
import toast from "react-hot-toast";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageComposer from "./MessageComposer";

const ChatWindow = () => {
  const profile = useSelector(state => state.profile)
  const [messageText, setMessageText] = useState("");

  const chatUser = useSelector((state) => state.currentChat);
  const dispatch = useDispatch();

  useEffect(() => {
    setMessageText(chatUser?.draft || "");
  }, [chatUser?.draft]);

  if (!profile) return

  if (!chatUser) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-700 text-gray-500">
        Select a chat to start messaging.
      </div>
    );
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    // if (!messageText.trim()) return;

    if (profile.id === chatUser.id) {
      alert("You can't msg for yourself");
      return;
    }

    const msg = messageText || chatUser.draft;
    if (msg.length === 0) {
      toast.error("Please write some message");
      return;
    }

    dispatch(
      sendMessage({
        from: profile.id,
        to: chatUser.id,
        message: messageText.trim(),
      })
    );

    setMessageText("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Header */}
      <ChatHeader chatUser={chatUser}/>

      {/* Messages */}
      <Messages chatUser={chatUser} userId={profile.id} />

      {/* Input */}
      <MessageComposer handleSendMessage={handleSendMessage} messageText={messageText} setMessageText={setMessageText} draft={chatUser.draft} />
    </div>
  );
};

export default ChatWindow;