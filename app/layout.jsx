import { Lato } from "next/font/google";
import "./globals.css";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";


const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"], variable: '--font-lato' });

export const metadata = {
  title: "Maximo Signiorini",
  description: "Maximo Signiorini personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:url" content="https://maximosigniorini.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Maximo Signiorini"/>
        <meta property="og:title" content="Maximo Signiorini"/>
        <meta property="og:description" content="Maximo Signiorini - Sound Designer & Music Producer"/>
        <meta property="og:image" content="/assets/web-thumbnail.png"/>
      </head>
      <body className={lato.variable}>
        <GoogleCaptchaWrapper>
          <Header />
          <PageTransition>
            {children}
          </ PageTransition>
        </GoogleCaptchaWrapper>

      </body>
    </html>
  );
}
