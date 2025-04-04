import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {
        addProfile: (state, action) => {
            return action.payload
        }
    }
})

export default profileSlice.reducer
export const {addProfile} = profileSlice.actions