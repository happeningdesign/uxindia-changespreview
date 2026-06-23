import { policySections } from "@/data/ticketsFaq";

export function PoliciesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-uxi text-4xl font-medium leading-[1.1] text-text-primary md:text-5xl lg:text-6xl">
            Policies &amp; Terms
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-text-primary/40">
            Important information about registrations, cancellations, and event policies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {policySections.map((section) => (
            <article
              key={section.title}
              className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6 transition hover:border-white/20"
            >
              <h3 className="font-sans text-lg font-semibold text-text-primary">
                {section.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-text-primary/60">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
