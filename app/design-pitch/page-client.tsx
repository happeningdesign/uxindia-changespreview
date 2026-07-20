import Header from "@/components/design-pitch/header/Header";
import Footer from "@/components/global/footer/Footer";

import Hero from "@/components/design-pitch/hero/Hero";
import About from "@/components/design-pitch/about/About";
import WhyNow from "@/components/design-pitch/why-now/WhyNow";
import HumanCenteredInnovation from "@/components/design-pitch/human-centered/HumanCentered";
import WhoIsThisFor from "@/components/design-pitch/who-is-it-for/WhoIsItFor";
import WaysToEnter from "@/components/design-pitch/ways-to-enter/WaysToEnter";
import PrimaryDomains from "@/components/design-pitch/primary-domains/PrimaryDomains";
import HowItWorks from "@/components/design-pitch/how-it-works/HowItWorks";
import HowWeJudge from "@/components/design-pitch/how-we-judge/HowWeJudge";
import Recognition from "@/components/design-pitch/recognition/Recognition";
import Awards from "@/components/design-pitch/awards/Awards";
import BeyondAwards from "@/components/design-pitch/beyond-awards/BeyondAwards";
import ShowcaseExperience from "@/components/design-pitch/showcase-experience/ShowcaseExperience";
import Jury from "@/components/design-pitch/jury/Jury";
import Timeline from "@/components/design-pitch/timeline/Timeline";
import HowToEnter from "@/components/design-pitch/how-to-enter/HowToEnter";

export default function DesignPitchPageClient() {
  return (
    <>
      <Header
        logo="/images/logos/design-pitch.webp"
        items={[
          { label: "About", href: "#about" },
          { label: "Pitch", href: "#pitch" },
          { label: "Criteria", href: "#criteria" },
          { label: "Submit", href: "#submit" },
        ]}
      />
      <Hero />
      <About />
      <WhyNow />
      <HumanCenteredInnovation />
      <WhoIsThisFor />
      <WaysToEnter />
      <PrimaryDomains />
      <HowItWorks />
      <HowWeJudge />
      <Recognition />
      <Awards />
      <BeyondAwards />
      <ShowcaseExperience />
      <Jury />
      <Timeline />
      <HowToEnter />

      <Footer />
    </>
  );
}
