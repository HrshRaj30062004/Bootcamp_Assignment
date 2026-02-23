"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "../components/Button"

export default function Dashboard() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    if (status === "loading")
        return (
            <div className="flex flex-col items-center justify-center h-screen text-xl">
                <p>Loading...</p>
            </div>
        )

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome {session?.user?.name}
                </h1>
                <Button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                    Logout
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-cyan-400">{user.name}</h2>
                        <p className="text-gray-600 mt-5"><strong>Username: </strong>{user.email}</p>
                        <p className="text-gray-500"><strong>Company: </strong>{user.company.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}