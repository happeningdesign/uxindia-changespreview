import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";
import UXFocussedOrgsPage from "./ux-focussed-orgs-page";

export const metadata = {
  title: "UX Focused Organisations | UXINDIA 2026",
  description:
    "Discover the organisations that are shaping the future of design in India and beyond — companies that invest deeply in UX as a strategic discipline.",
};

export default function Page() {
  return (
    <>
      <Nav forceSolid />
      <UXFocussedOrgsPage />
      <Footer />
    </>
  );
}
