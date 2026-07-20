export function ContactCard() {
  return (
    <div className="bg-page text-white p-8 md:p-10 rounded-3xl mt-12">
      <h3
        className="text-2xl md:text-3xl mb-4"
        style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
      >
        Need Help or Want to Report an Incident?
      </h3>
      <p className="font-sans text-white/70 mb-8">
        UXINDIA is here to support you. Please don&apos;t hesitate to reach out
        if you experience or witness any violations of this Code of Conduct.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-2">
            Code of Conduct Email
          </p>
          <a
            href="mailto:team@umo.design"
            className="font-sans text-white hover:text-brand transition-colors"
          >
            team@umo.design
          </a>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-2">
            24/7 Hotline
          </p>
          <a
            href="tel:+918096204373"
            className="font-sans text-white hover:text-brand transition-colors"
          >
            +91-8096204373
          </a>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
          <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-2">
            General Inquiries
          </p>
          <a
            href="mailto:team@umo.design"
            className="font-sans text-white hover:text-brand transition-colors"
          >
            team@umo.design
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 pt-6">
        <p className="font-sans text-sm text-white/60">
          <strong className="text-white">Emergency Services:</strong>
          <br />
          Police: Dial 100 | Ambulance: Dial 108 | Women&apos;s Helpline: 1091
        </p>
      </div>
    </div>
  );
}
