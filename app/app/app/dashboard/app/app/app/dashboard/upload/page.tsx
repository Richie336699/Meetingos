"use client";

import { useState } from "react";

export default function UploadMeeting() {
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
      setMessage("");
    }
  };

  const handleUpload = () => {
    if (!fileName) {
      setMessage("Please select a meeting file first.");
      return;
    }

    setMessage(`"${fileName}" is ready to process.`);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
        padding: "50px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <a
          href="/dashboard"
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          ← Back to Dashboard
        </a>

        <h1
          style={{
            fontSize: "40px",
            marginTop: "35px",
            marginBottom: "10px",
          }}
        >
          Upload Meeting
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#6b7280",
            marginBottom: "35px",
          }}
        >
          Turn your meeting into searchable company memory.
        </p>

        <div
          style={{
            background: "white",
            border: "2px dashed #d1d5db",
            borderRadius: "16px",
            padding: "50px 30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              marginBottom: "15px",
            }}
          >
            📁
          </div>

          <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
            Select a meeting recording
          </h2>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "25px",
            }}
          >
            Upload an audio or video file from your meeting.
          </p>

          <label
            style={{
              display: "inline-block",
              background: "#111827",
              color: "white",
              padding: "13px 24px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Choose File

            <input
              type="file"
              accept="audio/*,video/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>

          {fileName && (
            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                background: "#f3f4f6",
                borderRadius: "10px",
              }}
            >
              <strong>Selected file:</strong>
              <br />
              {fileName}
            </div>
          )}

          <button
            onClick={handleUpload}
            style={{
              display: "block",
              width: "100%",
              marginTop: "25px",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
              fontSize: "17px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Process Meeting
          </button>

          {message && (
            <p
              style={{
                marginTop: "20px",
                fontWeight: "600",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
