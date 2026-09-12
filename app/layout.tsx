import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeetingOS",
  description: "Every meeting becomes searchable company memory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
