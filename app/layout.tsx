import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinifica - Trazabilidad Premium para Vinicultores",
  description: "Protege cada lote con trazabilidad simple mediante QR. Identifica dónde se dañó un lote, optimiza procesos y fortalece la reputación de tu bodega. Sin hardware especial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

