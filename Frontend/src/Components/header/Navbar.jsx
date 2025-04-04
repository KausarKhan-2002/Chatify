import React, { lazy, Suspense, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";

const SearchDialog = lazy(() => import("./Search"));
const NewGroupDialog = lazy(() => import("./NewGroup"));
const NotificationDialog = lazy(() => import("./Notification"));

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const openGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const naivateToGroup = () => navigate("/groups");

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div className="fixed bg-slate-900/30 top-0 left-0 w-full  flex justify-between items-center px-20 py-1">
      <div className="text-lg font-medium">Logo</div>

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-5 text-lg">
          <li className="py-3">
            <IoSearchOutline onClick={openSearch} className="text-xl" />
          </li>
          <li className="py-3">
            <IoAdd onClick={openGroup} className="text-2xl" />
          </li>
          <li>
            <FaUserGroup />
          </li>
          <li>
            {" "}
            <IoNotifications onClick={openNotification} />
          </li>
          <li>
            <RiLogoutCircleRLine className="text-xl" />
          </li>
        </ul>
      </nav>

      <button
        // onClick={() => setShowleftPanel(!showLeftPanel)}
        className="sm:hidden text-xl fixed top-[9px] right-17 cursor-pointer text-slate-900 hover:text-slate-700 transition duration-100"
      >
        <FaBarsStaggered />
      </button>

      <div className="absolute">
        {isSearch && (
          <Suspense fallback={<h2>Loading...</h2>}>
            <SearchDialog />
          </Suspense>
        )}

        {isNotification && (
          <Suspense fallback={<h2>Loading...</h2>}>
            <NotificationDialog />
          </Suspense>
        )}

        {isNewGroup && (
          <Suspense fallback={<h2>Loading...</h2>}>
            <NewGroupDialog />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default Navbar;
