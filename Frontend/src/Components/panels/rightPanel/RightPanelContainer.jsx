import React from 'react'

function RightPanelContainer({showLeftPanel}) {
  return (
    <div className={`bg-red-400 ${showLeftPanel ? "w-[70%]" : "w-full"}`}>
      Right panel
    </div>
  )
}

export default RightPanelContainer
