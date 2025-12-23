import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EdenKingDom Corporation — Built from Genesis, Designed for Eternity",
  description:
    "A Civilização Corporativa Consciente da Nova Era. Inovação, Fé, Ciência, Tecnologia, Justiça e Humanidade — unidas pela visão de transformar o mundo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-eden bg-pearl text-deepblue">
        {children}
      </body>
    </html>
  );
}
