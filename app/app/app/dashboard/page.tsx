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
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "36px",
                margin: 0,
              }}
            >
              MeetingOS Dashboard
            </h1>

            <p
              style={{
                color: "#6b7280",
                marginTop: "8px",
              }}
            >
              Your company meetings, decisions, and action items.
            </p>
          </div>

          <button
            style={{
              padding: "14px 22px",
              borderRadius: "10px",
              border: "none",
              background: "#111827",
              color: "#ffffff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            + Upload Meeting
          </button>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "24px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p>Meetings</p>
            <h2 style={{ fontSize: "32px", margin: 0 }}>0</h2>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "24px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p>Action Items</p>
            <h2 style={{ fontSize: "32px", margin: 0 }}>0</h2>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "24px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p>Decisions</p>
            <h2 style={{ fontSize: "32px", margin: 0 }}>0</h2>
          </div>
        </section>

        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "28px",
          }}
        >
          <h2>Recent Meetings</h2>

          <div
            style={{
              padding: "40px 20px",
              textAlign: "center",
              color: "#6b7280",
            }}
          >
            No meetings yet.

            <br />

            Upload your first meeting to start building company memory.
          </div>
        </section>
      </div>
    </main>
  );
}
