import { configureStore } from "@reduxjs/toolkit";
import currentChatReducer from "./currentChatSlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    currentChat: currentChatReducer,
    profile: profileReducer,
  },
});

export default store;
