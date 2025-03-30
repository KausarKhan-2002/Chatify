import React from "react";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full bg-slate-100 flex justify-between items-center px-20 py-1">
      <div>Logo</div>
      <nav className="flex gap-5">
        <p className="py-3">Home</p>
        <p className="py-3">About</p>
      </nav>
    </div>
  );
}

export default Navbar;
