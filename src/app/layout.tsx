import Sheet from "./components/Sheet";
import Navigation from "./components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barry Song's Blog",
  author : "Barry Song",
  
  description: "Barry Song's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`inter.className  `}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
