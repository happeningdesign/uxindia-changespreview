import Nav from "@/components/global/nav/Nav";
import Hero from "@/components/home/hero/Hero";
import SocialProofTicker from "@/components/home/social-proof-ticker/SocialProofTicker";
import MarqueeBanner from "@/components/home/marquee-banner/MarqueeBanner";
import ConferenceShiftSection from "@/components/home/conference-shift-section/ConferenceShiftSection";
import ThreeDistinctPathsSection from "@/components/home/three-distinct-paths-section/ThreeDistinctPathsSection";
import FiveDaysSection from "@/components/home/five-days-section/FiveDaysSection";
import SpeakersSection from "@/components/home/speakers-section/SpeakersSection";
import VideoSection from "@/components/home/video-section/VideoSection";
import TestimonialsSection from "@/components/home/testimonials-section/TestimonialsSection";
import SponsorsSection from "@/components/home/sponsors-section/SponsorsSection";
import VenueSection from "@/components/home/venue-section/VenueSection";
import FAQSection from "@/components/home/faq-section/FAQSection";
import Footer from "@/components/global/footer/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProofTicker />
      <MarqueeBanner />
      <ConferenceShiftSection />
      <ThreeDistinctPathsSection />
      <FiveDaysSection />
      <SpeakersSection />
      <VideoSection />
      <TestimonialsSection />
      <SponsorsSection />
      <VenueSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
