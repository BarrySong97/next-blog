import Sheet from "./components/Sheet";
import SideBar from "./components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`inter.className flex bg-stone-50 `}>
        <main className="relative mx-2 flex min-h-screen max-w-4xl flex-col  md:mx-4 md:mt-0 md:flex-row md:pt-20 lg:mx-auto ">
          <SideBar />
          <Sheet>{children}</Sheet>
        </main>
      </body>
    </html>
  );
}
