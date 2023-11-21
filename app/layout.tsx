import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "PriceTrackerHub - Your Ultimate Amazon and Flipkart Price Tracking Solution",
  description: "Welcome to PriceTrackerHub, your one-stop destination for effortlessly monitoring and comparing prices of Amazon and Flipkart products. Never miss a deal again as our intuitive platform helps you stay updated on price drops, discounts, and special offers, ensuring you always get the best value for your money. Start tracking prices today and make smarter shopping decisions with PriceTrackerHub!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
