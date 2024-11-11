import localFont from "next/font/local";
import "./globals.css";

const lexend = localFont({
  src: "./fonts/Lexend-VariableFont_wght.ttf",
  variable: "--font-lexend",
  weight: "400 500 600",
});

export const metadata = {
  title: "ChatApp",
  description: "Fast, easy & unlimited team chats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
