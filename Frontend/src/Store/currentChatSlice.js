import { createSlice } from "@reduxjs/toolkit";

const currentChatSlice = createSlice({
  name: "currentChat",
  initialState: null,
  reducers: {
    openNewChat: (state, action) => {
      return action.payload;
    },

    sendMessage: (state, action) => {
      const { from, to, message } = action.payload;
      const timestamp = new Date().toLocaleTimeString(); // You can format as needed
      const newMessage = { from, to, message, timestamp };

      // Check if the currentChat is either the sender or receiver
      if (state && (state.id === from || state.id === to)) {
        state.messages.push(newMessage);
      }
    },

    receiveMessage: (state, action) => {
      const { from, to, message, timestamp } = action.payload;
      const newMessage = { from, to, message, timestamp };

      if (state && (state.id === from || state.id === to)) {
        state.messages.push(newMessage);
      }
    },
  }
});

export const { openNewChat, sendMessage, receiveMessage } = currentChatSlice.actions;
export default currentChatSlice.reducer;
