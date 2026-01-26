import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Menu - Borcelle Cucina Italiana",
  description: "Explora el auténtico sabor de Italia con nuestro menú exclusivo en Borcelle Cucina Italiana. Desde pastas artesanales hasta pizzas al horno de leña, descubre platos tradicionales preparados con ingredientes frescos y recetas familiares que te transportarán directamente a Italia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
