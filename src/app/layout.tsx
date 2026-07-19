import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ioffice.com"),
  title: "iOffice: Your team's virtual office",
  description:
    "iOffice is a spatial virtual office: presence, spatial audio and video, screen share, hubs and calls, so remote teams work together like they're in the room.",
  openGraph: {
    title: "iOffice: Your team's virtual office",
    description:
      "A spatial virtual office for remote teams: presence, spatial audio/video, screen share, hubs and calls.",
    url: "https://ioffice.com",
    siteName: "iOffice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iOffice: Your team's virtual office",
    description:
      "A spatial virtual office for remote teams: presence, spatial audio/video, screen share, hubs and calls.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-body`}>{children}</body>
    </html>
  );
}
