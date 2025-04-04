import React from "react";
import { useSelector } from "react-redux";
import ChatWindow from "./ChatWindow";

function RightPanelContainer({ showLeftPanel }) {
  const currentChat = useSelector((store) => store.currentChat);
  console.log(currentChat);

  return (
    <div
      className={`w-[100%] sm:w-[60%]`}
    >
     <ChatWindow />
    </div>
  );
}

export default RightPanelContainer;
