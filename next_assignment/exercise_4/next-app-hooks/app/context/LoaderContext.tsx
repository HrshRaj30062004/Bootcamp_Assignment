"use client"
import { createContext, useState, ReactNode } from "react"

type LoaderContextType = {
    loading: boolean
    setLoading: (value: boolean) => void
}

export const LoaderContext = createContext<LoaderContextType>({
    loading: false,
    setLoading: () => { }
})

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoaderContext.Provider>
    )
}

