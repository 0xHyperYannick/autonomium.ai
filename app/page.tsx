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

function GradientTransition({ direction }: { direction: "dim" | "bright" }) {
  const colors =
    direction === "dim"
      ? "from-surface to-surface-dim"
      : "from-surface-dim to-surface";

  return <div className={`h-24 md:h-32 bg-gradient-to-b ${colors}`} />;
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <GradientTransition direction="dim" />
      <Diagnosis />
      <GradientTransition direction="bright" />
      <Vision />
      <GradientTransition direction="dim" />
      <AutoFramework />
      <GradientTransition direction="bright" />
      <AiosArchitecture />
      <GradientTransition direction="dim" />
      <Audience />
      <GradientTransition direction="bright" />
      <Differentiators />
      <GradientTransition direction="dim" />
      <Offer />
      <Footer />
    </main>
  );
}
