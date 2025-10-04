import "./globals.css";

export const metadata = {
  title: "Fiesta 420 (2025)",
  description: "By DevZeppelin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
