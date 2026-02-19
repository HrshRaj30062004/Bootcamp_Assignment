"use client"
import { useContext } from "react"
import { LoaderContext } from "../context/LoaderContext"

export default function Loader() {
    const { loading } = useContext(LoaderContext)

    if (!loading) return null

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                color: "white",
                fontSize: "20px"
            }}
        >
            Loading...
        </div>
    )
}