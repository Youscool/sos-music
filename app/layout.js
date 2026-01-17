import { Poppins }  from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Providers from "./AudioProvider"


const poppins = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata = {
  title: "$O$-Music",
  description: "Studio moderne d'enregistrement basé au Mali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
