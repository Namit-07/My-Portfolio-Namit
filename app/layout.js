import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Namit Tickoo - Full Stack Developer Portfolio",
  description: "Portfolio of Namit Tickoo - Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building beautiful web applications and aiming for GSoC 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased lg:cursor-none`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <CursorGlow />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
