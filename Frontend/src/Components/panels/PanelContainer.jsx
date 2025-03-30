import { useState } from "react";
import Navbar from "../header/Navbar";
import LeftPanelContainer from "./leftPanel/LeftPanelContainer";
import RightPanelContainer from "./rightPanel/RightPanelContainer";
import { CiCircleChevLeft } from "react-icons/ci";

function panelContainer() {
  const [showLeftPanel, setShowleftPanel] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="flex pt-14">
        <LeftPanelContainer showLeftPanel={showLeftPanel} />
        <RightPanelContainer showLeftPanel={showLeftPanel}/>
      </div>
      <button onClick={() => setShowleftPanel(!showLeftPanel)} className="text-3xl fixed top-7 cursor-pointer text-slate-400 hover:text-slate-700 transition duration-100">
        <CiCircleChevLeft />
      </button>
    </div>
  );
}

export default panelContainer;
