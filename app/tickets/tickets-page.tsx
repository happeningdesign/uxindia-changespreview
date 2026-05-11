"use client";

import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import TicketsSection from "@/components/tickets/TicketsSection";
import PolicySection from "@/components/tickets/PolicySection";
import TicketsFAQSection from "@/components/tickets/TicketsFAQSection";

export default function TicketsPage() {
  return (
    <>
      <Nav forceSolid />
      <main className="bg-[#0D0D0D]">
        <TicketsSection />
        <PolicySection />
        <TicketsFAQSection />
      </main>
      <Footer />
    </>
  );
}
