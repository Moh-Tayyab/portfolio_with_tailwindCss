import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCursor from "react-animated-cursor";
import ScrollTotop from "@/components/Helper/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protfolio",
  description: "Personal Protfolio with next.js and tailwind css",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custome-scrollbar">
      <body className= {inter.className} >
      <div className="hidden md:block ">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>
        <Navbar />
        
        <main>{children}</main>

        <Footer />
        <ScrollTotop />
        </body>
    </html>
  );
}
