import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Degital project",
  description: "Architectural designs site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
