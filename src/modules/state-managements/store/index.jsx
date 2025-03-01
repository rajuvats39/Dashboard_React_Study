import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../store/features/TodoSlice";

export const store = configureStore({
    reducer: {
        todo: TodoSlice,
    }
})