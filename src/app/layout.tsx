import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppifySheets · Replace the legacy app. Keep the people who run it.",
  description:
    "We rebuild the spreadsheets and aging desktop apps that quietly run your business. Your own team does the work under our supervision, with AI on the repetitive parts. You keep the source code and the institutional knowledge.",
  metadataBase: new URL("https://appifysheets.com"),
  openGraph: {
    title: "AppifySheets · Replace the legacy app. Keep the people who run it.",
    description:
      "Spreadsheets and legacy apps onto a proper web stack. Your team does the porting. We supervise.",
    url: "https://appifysheets.com",
    siteName: "AppifySheets",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
