import React from "react";
import ChatList from "./ChatList";

function LeftPanelContainer({ showLeftPanel }) {
  return (
    <div
      className={`bg-slate-400 w-[40%] hidden sm:block lg:w-[35%]  ${
        !showLeftPanel && "hidden"
      }`}
    >
      <ChatList />
    </div>
  );
}

export default LeftPanelContainer;
