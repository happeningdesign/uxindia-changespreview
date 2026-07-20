"use client";

import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

import { TicketsArcHero } from "@/components/tickets/tickets-arc-hero/TicketsArcHero";

import { SummitTrackColumn } from "@/components/tickets/summit-track-column/SummitTrackColumn";
import { ForumTrackColumn } from "@/components/tickets/forum-track-column/ForumTrackColumn";

import { BundleBanner } from "@/components/tickets/bundle-banner/BundleBanner";
import { TicketsFAQ } from "@/components/tickets/tickets-faq/TicketsFAQ";
import { PoliciesSection } from "@/components/tickets/policies-section/PoliciesSection";

// data
import { summitTiers } from "@/data/tickets/summitTiers";
import { forumProfessionalTiers } from "@/data/tickets/forumTiers";
import { studentTiers } from "@/data/tickets/studentTiers";

export default function TicketsPage() {
  return (
    <>
      {/* global nav */}
      <Nav forceSolid />

      <main className="tickets-page bg-page">
        <TicketsArcHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-8">
            <SummitTrackColumn tiers={summitTiers} />
            <ForumTrackColumn
              professionalTiers={forumProfessionalTiers}
              studentTiers={studentTiers}
            />
          </div>

          <BundleBanner />
        </section>

        <PoliciesSection />
        <TicketsFAQ />
      </main>

      {/* global footer */}
      <Footer />
    </>
  );
}
