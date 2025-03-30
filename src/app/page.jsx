import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-primary w-screen pt-10">
      <Navbar />
      <HeroSection />
    </div>
  );
}
