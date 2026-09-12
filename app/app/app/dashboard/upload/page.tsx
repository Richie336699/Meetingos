"use client";

import { useState } from "react";

export default function UploadMeeting() {
  const [fileName, setFileName] = useState("");

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
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Upload Meeting
        </h1>

        <p style={{ color: "#6b7280", marginBottom: "35px" }}>
          Upload an audio or video recording and turn it into searchable
          company memory.
        </p>

        <div
          style={{
            background: "#ffffff",
            border: "2px dashed #d1d5db",
            borderRadius: "16px",
            padding: "60px 30px",
            textAlign: "center",
          }}
        >
          <h2>Choose a meeting recording</h2>

          <p style={{ color: "#6b7280" }}>
            MP3, WAV, M4A, MP4, and other common formats
          </p>

          <input
            type="file"
            accept="audio/*,video/*"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (file) {
                setFileName(file.name);
              }
            }}
            style={{
              marginTop: "25px",
            }}
          />

          {fileName && (
            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                background: "#f3f4f6",
                borderRadius: "10px",
              }}
            >
              Selected: <strong>{fileName}</strong>
            </div>
          )}

          <button
            disabled={!fileName}
            style={{
              marginTop: "25px",
              padding: "14px 24px",
              borderRadius: "10px",
              border: "none",
              background: fileName ? "#111827" : "#d1d5db",
              color: "#ffffff",
              fontWeight: "600",
              cursor: fileName ? "pointer" : "not-allowed",
            }}
          >
            Process Meeting
          </button>
        </div>
      </div>
    </main>
  );
}
