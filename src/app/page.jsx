import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServiceStats from "../components/serviceStats";

export default function Home() {
  return (
    <div className="bg-primary w-screen pt-10">
      <Navbar />
      <HeroSection />
      <ServiceStats />
    </div>
  );
}
