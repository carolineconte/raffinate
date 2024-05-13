import PrimaryBtn from "@/components/PrimaryBtn";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/layout/HeroBanner";
import Navbar from "@/components/layout/Navbar";
import TopPage from "@/components/layout/TopPage";


export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <TopPage />
      <Navbar />
      <HeroBanner/>
      <Footer />
    </main>
  );
}
