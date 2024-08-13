import { Lato} from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"], variable: '--font-lato'});

export const metadata = {
  title: "Maximo Signiorini",
  description: "Maximo Signiorini personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.variable}>
      <Header />
      {/* <StairTransition /> */}
      <PageTransition>
      {children}
      </PageTransition>
        
        </body>
    </html>
  );
}
