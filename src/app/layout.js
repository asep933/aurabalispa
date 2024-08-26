import { Merriweather } from "next/font/google";
import NavbarComponent from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ContextInformasiProvider from "@/context";
import { ThemeModeScript } from "flowbite-react";
import ButtonWhatsApp from "@/components/ButtonWhatsApp";
import ButtonGoTop from "@/components/ButtonGoTop";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export const metadata = {
  title: "aurabalispa",
  description: "best massage spa in bali",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      id="html"
      className={`${merriweather.className} scroll-smooth`}
    >
      <head>
        <ThemeModeScript />
      </head>

      <body>
        <ContextInformasiProvider>
          <NavbarComponent />
          <main className="bg-primary">{children}</main>
          <ButtonGoTop />
          <ButtonWhatsApp />
          <Footer />
        </ContextInformasiProvider>
      </body>
    </html>
  );
}
