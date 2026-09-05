import localFont from "next/font/local";
import { Unbounded } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const display = Unbounded({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://fiesta420.vercel.app"),
  title: "420 · Edición 2026",
  description:
    "19 de diciembre, cerca del mediodía. Lugar clasificado (por ahora). Los años pasan, la mística se mantiene.",
  openGraph: {
    title: "420 · Edición 2026",
    description:
      "19 de diciembre. Pague su cuota, vaya señando y no le pregunte al pato por qué no fue.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "420 · Edición 2026",
    description:
      "19 de diciembre. Lugar a confirmar. La mística no se confirma: se sostiene.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
