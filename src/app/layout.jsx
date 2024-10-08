import { Poppins } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

// Import the Poppins font with the desired subsets and weights
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-bodybg`}>
        <div className="max-w-[1500px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
