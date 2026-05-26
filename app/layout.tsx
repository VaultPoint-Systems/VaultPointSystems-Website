import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VaultPoint Systems — Cybersecurity for modern businesses",
  description:
    "VaultPoint Systems delivers accessible, scalable cybersecurity for startups and small businesses.",
  metadataBase: new URL("https://vaultpoint.systems"),
  openGraph: {
    title: "VaultPoint Systems",
    description:
      "Cybersecurity built for modern businesses.",
    url: "https://vaultpoint.systems",
    siteName: "VaultPoint Systems",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
