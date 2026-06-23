import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "UXINDIA 2026 — Where Design Leads",
  description:
    "India's premier design leadership conference. Theatre talks, curated roundtables, and connections that last. Bengaluru, September 2026.",
  image: "/og/og-default.jpg",
  keywords: [
    "UX India",
    "design conference",
    "design leadership",
    "UX conference India",
    "Bengaluru 2026",
  ],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E85520",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} relative`}>
      <body
        suppressHydrationWarning={true}
        className="font-sans antialiased bg-cream text-page relative"
      >
        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1407067830620459&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}

        {/* GTM & GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5SHEJ46HKV"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5SHEJ46HKV');`}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1407067830620459');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Zipchat */}
        <Script
          src="https://app.zipchat.ai/widget/zipchat.js?id=SgS8O2oe4BBKPq41egTQ"
          data-no-optimize="1"
          strategy="afterInteractive"
        />
        <Script id="zipchat-color-override" strategy="afterInteractive">
          {`(() => {
          const orange = '#E85520';

          const applyColor = () => {
            const host = document.getElementById('zipchat-shadow-host');
            const button = host?.shadowRoot?.getElementById('widget-chat-button');
            if (button) {
              button.style.backgroundColor = orange;
            }
          };

          const startObserver = () => {
            applyColor();

            const host = document.getElementById('zipchat-shadow-host');
            if (!host || !host.shadowRoot) return;

            const observer = new MutationObserver(applyColor);
            observer.observe(host.shadowRoot, { childList: true, subtree: true });
            window.addEventListener('beforeunload', () => observer.disconnect(), { once: true });
          };

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startObserver, { once: true });
          } else {
            startObserver();
          }
          })();`}
        </Script>

        <Analytics />
      </body>
    </html>
  );
}
