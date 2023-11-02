import {  configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./Article";
export const store = configureStore({
    reducer: {[articleApi.reducerPath]: articleApi.reducer},
    Middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})