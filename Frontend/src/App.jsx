import { BrowserRouter, Route, Routes } from "react-router-dom";
import PanelContainer from "./Components/panels/panelContainer";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./Components/auth/ProtectRoute";

const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./Components/auth/Auth"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"))

const user = true;
function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/panel" element={<PanelContainer />} />
        </Route>

        {/* If user already login, protect login and signup page */}
        <Route
          path="/auth"
          element={
            <ProtectRoute user={!user} redirect={"/"}>
              <Auth />
            </ProtectRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
