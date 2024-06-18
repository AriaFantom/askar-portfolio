import { Staatliches, Tauri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const staat = Staatliches({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-staatliches",
});
const tauri = Tauri({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tauri",
});

export const metadata = {
  title: "Portfolio | Askar",
  description: "Portfolio Site of Askar aka Priyanshu Debnath and Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background ${staat.variable} ${tauri.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
