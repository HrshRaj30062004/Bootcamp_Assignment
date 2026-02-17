"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link
          href="/"
          className={`navLink ${isActive("/") ? "active" : ""}`}
        >
          Home
        </Link>

        <Link
          href="/users"
          className={`navLink ${isActive("/users") ? "active" : ""}`}
        >
          Users
        </Link>

        <Link
          href="/todos"
          className={`navLink ${isActive("/todos") ? "active" : ""}`}
        >
          Todos
        </Link>
      </nav>
    </header>
  );
}