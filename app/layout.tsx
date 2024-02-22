import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/nav-bar";
import { ThemeProvider } from "./theme-provider";
import { Separator } from "@/components/ui/separator";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aditya Vashisht",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased max-w-2xl  mx-4 lg:mx-auto flex flex-col justify-between  md:h-screen pt-10 pb-8">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div>
            <header className="flex justify-between">
              <NavBar />
            </header>
            <main className="mt-24 mb-8">{children}</main>
          </div>
          <footer>
            <div className="flex items-center justify-between">
              <p>Aditya Vashisht © 2024</p>
              <div className="flex items-center">
                <Link href="https://github.com/adityavashisht9">
                  <GitHubLogoIcon className="w-4 h-4 mr-3" />
                </Link>
                <Link href="https://www.linkedin.com/in/adityavashisht">
                  <LinkedInLogoIcon className="w-4 h-4 mr-3" />
                </Link>
                <Link href="https://twitter.com/vashishtaditya_">
                  <TwitterLogoIcon className="w-4 h-4 mr-3" />
                </Link>
                <Link href="mailto:adityavashisht03@gmail.com">
                  <EnvelopeClosedIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
