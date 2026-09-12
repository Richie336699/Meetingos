export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        padding: "60px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            letterSpacing: "-3px",
            marginBottom: "16px",
          }}
        >
          MeetingOS
        </div>

        <p
          style={{
            fontSize: "24px",
            color: "#4b5563",
            marginBottom: "40px",
          }}
        >
          Every meeting becomes searchable company memory.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "16px 28px",
              borderRadius: "10px",
              border: "none",
              background: "#111827",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Upload Meeting
          </button>

          <button
            style={{
              padding: "16px 28px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              background: "#ffffff",
              color: "#111827",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View Dashboard
          </button>
        </div>

        <section
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
            }}
          >
            <h2>🧠 Company Memory</h2>
            <p>
              Turn meetings into organized, searchable knowledge.
            </p>
          </div>

          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
            }}
          >
            <h2>✅ Action Items</h2>
            <p>
              Capture decisions, tasks, owners, and deadlines automatically.
            </p>
          </div>

          <div
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
            }}
          >
            <h2>🔎 Ask Your Meetings</h2>
            <p>
              Find answers from your company's meeting history.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
