import { Geist, Geist_Mono, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kaustuv Karan | Software Engineer",
  description:
    "Portfolio for Kaustuv Karan, focused on scalable systems, technical product design, and modern React experiences.",
};

const themeInitScript = `
  (() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = stored || (systemPrefersLight ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.variable} antialiased min-h-screen flex flex-col`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
