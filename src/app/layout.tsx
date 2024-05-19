import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import NavBar from "@/common/nav-bar";
import { SocketContextProvider } from "@/context/socket-context";
import { AuthContextProvider } from "context/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Addaa",
  description: "A simple chat app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <SocketContextProvider>
            <NavBar />
            {children}
          </SocketContextProvider>
        </AuthContextProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
