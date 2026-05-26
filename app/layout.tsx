import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VaultPoint Systems",
  description:
    "Secure, scalable technology for modern businesses. VaultPoint Systems builds dependable infrastructure and security solutions.",
  metadataBase: new URL("https://vaultpoint.systems"),
  openGraph: {
    title: "VaultPoint Systems",
    description:
      "Secure, scalable technology for modern businesses.",
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
