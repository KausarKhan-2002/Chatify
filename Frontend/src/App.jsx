import { BrowserRouter, Route, Routes } from "react-router-dom";
import PanelContainer from "./Components/panels/panelContainer";
import { lazy } from "react";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Auth = lazy(() => import("./Components/auth/Auth"))
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"))
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/panel" element={<PanelContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
