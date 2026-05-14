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

export const metadata = {
  metadataBase: new URL("https://muverox.com"),
  title: "Muverox · Agencia digital para pymes",
  description:
    "Diseñamos webs que venden y automatizamos la comunicación con tus clientes. Presupuesto cerrado, sin sorpresas. Para pymes en España y Latinoamérica.",
  keywords: [
    "agencia digital",
    "diseño web",
    "Next.js",
    "automatización",
    "chatbot",
    "WhatsApp Business",
    "pymes",
    "España",
    "Latinoamérica",
  ],
  authors: [{ name: "Muverox" }],
  openGraph: {
    title: "Muverox · Agencia digital para pymes",
    description:
      "Webs profesionales + automatización. Presupuesto cerrado desde 500€. Respuesta en 24h.",
    url: "https://muverox.com",
    siteName: "Muverox",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muverox · Agencia digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muverox · Agencia digital para pymes",
    description:
      "Webs profesionales + automatización. Presupuesto cerrado desde 500€.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}