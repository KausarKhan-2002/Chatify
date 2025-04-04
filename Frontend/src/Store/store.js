import  {configureStore} from "@reduxjs/toolkit"
import currentChatReducer from "./currentChatSlice"

const store = configureStore({
    reducer: {
        currentChat: currentChatReducer
    }
})

export default store