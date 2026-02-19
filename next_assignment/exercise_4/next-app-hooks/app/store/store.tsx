"use client"

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { ReactNode } from "react"
import quotesReducer from "./qoutesSlice"

export const store = configureStore({
  reducer: {
    quotes: quotesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// ✅ THIS WAS MISSING
export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}