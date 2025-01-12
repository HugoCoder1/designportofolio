import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/design/footer";
import Header from "@/components/design/header";
import Transition from "@/components/Transition";

export const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Website Sample",
  description: "A portofolio website example",
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
            <div className="pt-40">
              <Footer />
            </div>
          </div>
        </Transition>
      </body>
    </html>
  );
}
