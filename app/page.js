import Footer from "@/components/Footer";
import Machines from "@/components/Machines";
import TrophySection from "@/components/TrophySection";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-[#FFE5AD]">
      <div className="mb-10">
        <TrophySection />
      </div>

      <div className="mb-10">
        <Machines />
      </div>

      <div className="w-[98%] h-[80%] mb-3 max-md:mb-2">
        <Footer />
      </div>
    </div>
  );
}
