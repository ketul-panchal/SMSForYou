import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";
import { thunk } from "redux-thunk"; 

const store = configureStore({
    reducer: chatReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
});

export default store;
