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
      <body className="min-h-screen flex flex-col px-6 pt-8 max-w-3xl mx-auto">
        <ThemeProvider attribute="class" defaultTheme="system">
          <header className="flex justify-between">
            <NavBar />
          </header>
          <main className="pt-12">{children}</main>

          <footer className="mt-auto mb-14 sm:mb-8">
            <div className="flex items-center justify-between">
              <p className="text-sm">Aditya Vashisht © 2024</p>
              <div className="flex items-center">
                <Link
                  href="https://github.com/adityavashisht9"
                  target="_blank"
                  className="hover:bg-accent p-2"
                >
                  <GitHubLogoIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/adityavashisht"
                  target="_blank"
                  className="hover:bg-accent p-2"
                >
                  <LinkedInLogoIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com/vashishtaditya_"
                  target="_blank"
                  className="hover:bg-accent p-2"
                >
                  <TwitterLogoIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="mailto:adityavashisht03@gmail.com"
                  className="hover:bg-accent p-2"
                >
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
