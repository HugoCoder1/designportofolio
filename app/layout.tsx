import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/design/footer";
import Header from "@/components/design/header";
import Transition from "@/components/Transition";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Website Sample",
  description: "A portfolio website example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.variable} antialiased`}>
        <Transition>
          <div className="flex flex-col p-10 min-h-screen max-w-[1120px] mx-auto opacity-100">
            <Header />
            {children}
            <div className="pt-4 md:pt-40">
              <Footer />
            </div>
          </div>
        </Transition>
      </body>
    </html>
  );
}
