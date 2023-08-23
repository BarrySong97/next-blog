import { Metadata } from "next";
import Navigation from "./components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Providers from "./providers";
import { Toaster } from "./components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://barrysong4real.cc/"),
  title: "Barry Song's Blog",
  description: "Barry Song's Blog",
  twitter: {
    card: "summary_large_image",
    title: `来自BarrySong的的博客 - Barry Song's Blog`,
    creator: "@BarrySong97",
    images:
      "https://images-1253529509.cos.ap-chengdu.myqcloud.com/1691569263568.jpg",
    site: "@BarrySong97",
  },
  openGraph: {
    title: `来自BarrySong的的博客 - Barry Song's Blog`,
    locale: "zh_CN",
    type: "article",
    siteName: "Barry Song's Blog",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    images: [
      {
        url: "https://images-1253529509.cos.ap-chengdu.myqcloud.com/1691569263568.jpg",
        width: 800,
        height: 600,
        alt: "Barry Song blog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
