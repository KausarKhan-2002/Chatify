import React from "react";
import { useSelector } from "react-redux";

function RightPanelContainer({ showLeftPanel }) {
  const currentChat = useSelector((store) => store.currentChat);
  console.log(currentChat);

  return (
    <div
      className={`bg-red-400 w-[100%] sm:w-[60%]`}
    >
      Right panel
    </div>
  );
}

export default RightPanelContainer;
