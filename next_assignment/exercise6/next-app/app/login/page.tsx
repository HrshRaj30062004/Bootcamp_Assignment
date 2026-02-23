"use client"

import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Button from "../components/Button"

export default function LoginPage() {
    const { status } = useSession()
    const router = useRouter()
    const [seconds, setSeconds] = useState(5)

    useEffect(() => {
        if (status !== "authenticated")
            return

        if (seconds === 0) {
            router.push("/dashboard")
            return
        }

        const timer = setTimeout(() => {
            setSeconds((prev) => prev - 1)
        },1000)

        return () => clearTimeout(timer)

    }, [status, seconds, router])

    if (status === "loading") {
        return(
            <div className="flex flex-col items-center justify-center h-screen text-xl">
                <p>Checking Aunthentication{seconds}</p>
            </div>
        )

    }

    if (status === "authenticated") {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-xl">
                <p>Already logged in, Redirecting you in {seconds}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <h1 className="text-3xl font-bold">Login Page</h1>
            <Button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer"
            >
                Login with Google
            </Button>
        </div>
    )
}