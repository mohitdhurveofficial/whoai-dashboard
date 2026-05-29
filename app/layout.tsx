import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhoAI",
  description: "Runtime Governance Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="texture min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
