import "@src/app/globals.css";
import { Poppins } from "next/font/google";
import Navigationbar from "../components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Flowiix",
  description: "Flowixx",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={poppins.className}>
      <Navigationbar />
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
