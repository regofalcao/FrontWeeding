import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Literata } from "next/font/google";

const literata = Literata({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Album",
  description: "Friends Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-[#FFFBF5]" lang="en">
      <body className={literata.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
