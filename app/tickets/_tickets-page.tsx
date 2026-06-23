"use client";

import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
// import TicketsSection from "@/components/tickets/tickets-section/TicketsSection";
// import PolicySection from "@/components/tickets/policy-section/PolicySection";
// import TicketsFAQSection from "@/components/tickets/tickets-faq-section/TicketsFAQSection";

export default function TicketsPage() {
  return (
    <>
      <Nav forceSolid />
      <main className="bg-page">
        {/* <TicketsSection />
        <PolicySection />
        <TicketsFAQSection /> */}
      </main>
      <Footer />
    </>
  );
}
