import About from "@/components/layout/About";
import Avaliacoes from "@/components/layout/Avaliacoes";
import Contato from "@/components/layout/Contato";
import Diferenciais from "@/components/layout/Diferenciais";
import Especialidades from "@/components/layout/Especialidades";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/layout/HeroBanner";
import Local from "@/components/layout/Local";
import Navbar from "@/components/layout/Navbar";
import TopPage from "@/components/layout/TopPage";
import { Toaster } from 'react-hot-toast'


export default function Home() {
  return (
    <>
      <Toaster position='top-right' />
      <Navbar />
      <HeroBanner />
      <main className="">
        <Especialidades />
        <About />
        <Diferenciais />
        <Avaliacoes />
        <Local />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
