import { Annie_Use_Your_Telescope, Caveat_Brush } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; // 👈 import here

const annie = Annie_Use_Your_Telescope({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-annie",
});

const caveat = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
});

export const metadata = {
  title: "Lulu & Remi",
  description: "Coloring books where every page becomes a sticker!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${annie.variable} ${caveat.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
