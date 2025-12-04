import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Container from "../components/container";
import Footer from "../components/Footer";
import Link from "next/link";



export const metadata: Metadata = {
  title: {
    default: "TSWind Blog",
    template: "%s | TSWind Blog",
  },
  description: "Um blog com NextJs, TypeScript e TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>

        <Container>

          <Header />

            {children}

        </Container>

        <Footer />

      </body>
    </html>
  );
}
