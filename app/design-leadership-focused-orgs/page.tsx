import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import DesignLeadershipFocusedOrganizationsPage from "./design-leadership-focused-orgs-page";

export const metadata = {
  title: "Design Leadership Focused Organizations | UXINDIA 2026",
  description:
    "Discover the organisations that are shaping the future of design in India and beyond — companies that invest deeply in UX and Design Leadership as a strategic discipline.",
};

export default function Page() {
  return (
    <>
      <Nav forceSolid />
      <DesignLeadershipFocusedOrganizationsPage />
      <Footer />
    </>
  );
}
