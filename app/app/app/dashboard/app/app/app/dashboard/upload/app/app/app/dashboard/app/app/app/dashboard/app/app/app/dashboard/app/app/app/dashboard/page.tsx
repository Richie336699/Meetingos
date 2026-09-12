"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "36px",
                margin: 0,
              }}
            >
              MeetingOS
            </h1>

            <p
              style={{
                color: "#6b7280",
                marginTop: "8px",
              }}
            >
              Company memory. Organized automatically.
            </p>
          </div>

          <Link
            href="/dashboard/upload"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "14px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            + Upload Meeting
          </Link>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "45px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ color: "#6b7280" }}>Meetings</p>
            <h2 style={{ fontSize: "32px", margin: "8px 0" }}>0</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ color: "#6b7280" }}>Decisions</p>
            <h2 style={{ fontSize: "32px", margin: "8px 0" }}>0</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ color: "#6b7280" }}>Action Items</p>
            <h2 style={{ fontSize: "32px", margin: "8px 0" }}>0</h2>
          </div>
        </section>

        <section
          style={{
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "35px",
          }}
        >
          <h2 style={{ fontSize: "24px", marginTop: 0 }}>
            Recent Meetings
          </h2>

          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#6b7280",
            }}
          >
            <div style={{ fontSize: "45px", marginBottom: "15px" }}>
              🧠
            </div>

            <h3 style={{ color: "#111827" }}>
              No meetings yet
            </h3>

            <p>
              Upload your first meeting and MeetingOS will turn it
              into searchable company memory.
            </p>

            <Link
              href="/dashboard/upload"
              style={{
                display: "inline-block",
                marginTop: "15px",
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Upload your first meeting →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
