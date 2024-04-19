import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Site from "@/components/layout/site";
import { supersimpleTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CurrentUserProvider } from "../internal/user-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperSimple App",
  description: "Sample Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-w-[100%] p-0 m-0"}>
        <ThemeProvider theme={supersimpleTheme}>
          <CurrentUserProvider>
            <Site>{children}</Site>
          </CurrentUserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
