import { createSlice } from "@reduxjs/toolkit";

const currentChatSlice = createSlice({
    name: "currentChat",
    initialState: null,
    reducers: {
        openNewChat: (state, action) => {
            return action.payload
        }
    }
})

export default currentChatSlice.reducer
export const {openNewChat} = currentChatSlice.actions