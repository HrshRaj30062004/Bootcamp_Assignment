import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>404 - Page Not Found </h1>
      <p>The page you are looking for does not exist.</p>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "8px 14px",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}