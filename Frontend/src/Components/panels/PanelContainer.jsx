import { useState } from "react";
import Navbar from "../header/Navbar";
import LeftPanelContainer from "./leftPanel/LeftPanelContainer";
import RightPanelContainer from "./rightPanel/RightPanelContainer";
import { FaBarsStaggered } from "react-icons/fa6";
import Profile from "./profilePanel/Profile";

function panelContainer() {
  const [showLeftPanel, setShowleftPanel] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="fixed w-full flex pt-9 sm:pt-14 h-[100vh]">
        <LeftPanelContainer showLeftPanel={showLeftPanel} />
        <RightPanelContainer showLeftPanel={showLeftPanel} />
        <Profile />
      </div>
      <button
        onClick={() => setShowleftPanel(!showLeftPanel)}
        className="hidden text-3xl fixed top-0 right-0 cursor-pointer text-slate-400 hover:text-slate-700 transition duration-100"
      >
        <FaBarsStaggered />
      </button>
    </div>
  );
}

export default panelContainer;