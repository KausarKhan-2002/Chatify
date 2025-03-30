import React from 'react'

function LeftPanelContainer({showLeftPanel}) {
  return (
    <div className={`bg-slate-400 w-[30%] ${!showLeftPanel && "hidden"}`}>
      Left panel
    </div>
  )
}

export default LeftPanelContainer
