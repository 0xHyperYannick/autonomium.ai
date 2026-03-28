import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Diagnosis from "@/components/Diagnosis";
import Vision from "@/components/Vision";
import AutoFramework from "@/components/AutoFramework";
import AiosArchitecture from "@/components/AiosArchitecture";
import Audience from "@/components/Audience";
import Differentiators from "@/components/Differentiators";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Diagnosis />
      <Vision />
      <AutoFramework />
      <AiosArchitecture />
      <Audience />
      <Differentiators />
      <Offer />
      <Footer />
    </main>
  );
}
