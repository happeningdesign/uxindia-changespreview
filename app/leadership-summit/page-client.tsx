"use client";

import { useState } from "react";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import LeadershipSummitHero from "@/components/events/leadership-summit/LeadershipSummitHero";
import WhoAttends from "@/components/events/WhoAttends";
import SpeakersGrid from "@/components/events/SpeakersGrid";
import VenueSection from "@/components/events/VenueSection";

export default function LeadershipSummitPageClient() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main>
      <Nav forceSolid={false} />
      <LeadershipSummitHero activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content section with blur overlay when Schedule is active */}
      <div className={activeTab === "schedule" ? "relative" : ""}>
        {activeTab === "schedule" && (
          <div className="absolute inset-0 z-40 backdrop-blur-md bg-black/30 flex items-center justify-center">
            <div className="text-center">
              {/* Skeletal schedule structure */}
              <div className="space-y-6 mb-12 max-w-md mx-auto">
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded w-32 mx-auto" />
                  <div className="h-3 bg-white/10 rounded w-48 mx-auto" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded w-32 mx-auto" />
                  <div className="h-3 bg-white/10 rounded w-48 mx-auto" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/10 rounded w-32 mx-auto" />
                  <div className="h-3 bg-white/10 rounded w-48 mx-auto" />
                </div>
              </div>

              {/* "Schedule Announcing Soon" text */}
              <h3 className="font-leadership text-3xl md:text-4xl text-white text-center mb-4">
                Schedule
              </h3>
              <p className="font-sans text-base md:text-lg text-white/70 text-center">
                Announcing Soon
              </p>
            </div>
          </div>
        )}
        
        <section className="bg-[#0D0D0D] w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-leadership text-4xl md:text-5xl text-white mb-6">
                {activeTab === "overview" ? "Overview" : "Schedule"}
              </h2>
              <p className="font-sans text-base text-white/70 leading-relaxed">
                {activeTab === "overview"
                  ? "The Leadership Summit 2026 brings together the most influential design voices to shape the future of design leadership."
                  : ""}
              </p>
            </div>
          </div>
        </section>
      </div>

      {activeTab === "overview" && (
        <>
          <WhoAttends
            title="Who Attends"
            description="Built for leaders who decide."
            subtitle="Three days of high-signal conversation — on stage, in curated roundtables, and over CXO dinners — designed exclusively for design and product leaders shaping the future of businesses and systems."
          />
          <SpeakersGrid
            speakers={[
              {
                name: "Mohan Krishnaraj",
                role: "Global Head, Cognizant",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohan%202-K9AB5pP4ZHPfre7Q7Go5ODw5e2M2UX.png",
              },
              {
                name: "Kate Moran",
                role: "VP Research, N/NG",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kate-LDTO53yItpEnoSxHsyiNn0H6302DJW.png",
              },
              {
                name: "Prof. Kirti Trivedi",
                role: "VDP, IIT Indore",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kirti%202%202-bzGwR92irRSkBQmceiZr6uK8VKQkWD.png",
              },
              {
                name: "Rucha Humnabadkar",
                role: "Director Of Design, Youtube",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rucha%202-D6aWBOcA3BXuuOmwat1GTMaPDMPrDb.png",
              },
              {
                name: "Mirjam Wouters",
                role: "Experience Labs Lead, Royal Philips",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mirjam%205-su1y8iJkrQl7NGkUZ6TEnCIEkAa3Go.png",
              },
              {
                name: "Donald Chesnut",
                role: "CDO, CANDESCENT",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Donald%202-QrVCcZvm0T90MBDsDxYFH2zLqlunQF.png",
              },
              {
                name: "Ravinder Singh",
                role: "Co-Founder, Rishihood",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ravinder%202-Ma6qnJURvXf7yIu5JfMG0c79LiCfRF.png",
              },
            ]}
            showMorePlaceholder={true}
          />
          <VenueSection />
        </>
      )}
      <Footer />
    </main>
  );
}
