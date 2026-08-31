"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Form Components
import { FormSection } from "@/components/forms/form-section/FormSection";
import { OptionCard } from "@/components/forms/option-card/OptionCard";
import { CheckboxItem } from "@/components/forms/checkbox-item/CheckboxItem";
import { FormInput } from "@/components/forms/form-input/FormInput";
import { FormTextarea } from "@/components/forms/form-textarea/FormTextArea";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function ContributorsPage() {
  // ============================================================================
  // Local Storage
  // ============================================================================

  const STORAGE_KEY = "uxindia-contributors-draft";

  // ============================================================================
  // Hero Animation
  // ============================================================================

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // ============================================================================
  // Form State
  // ============================================================================

  // Conference Role

  const [role, setRole] = useState("");
  const [otherRole, setOtherRole] = useState("");

  // Personal Information

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  //   const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  // Professional Information

  const [professionalTitle, setProfessionalTitle] = useState("");
  const [professionalBio, setProfessionalBio] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");

  // Additional Notes

  const [additionalNotes, setAdditionalNotes] = useState("");

  // Consent

  const [confirmInformation, setConfirmInformation] = useState(false);
  const [confirmMediaConsent, setConfirmMediaConsent] = useState(false);

  // ============================================================================
  // UI State
  // ============================================================================

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  // ============================================================================
  // Error Helpers
  // ============================================================================

  const clearError = (field: string) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const errorSectionMap: Record<string, string> = {
    role: "role-section",
    otherRole: "role-section",

    fullName: "personal-section",
    email: "personal-section",
    phone: "personal-section",

    professionalTitle: "professional-section",
    professionalBio: "professional-section",
    photoUrl: "professional-section",

    confirmInformation: "consent-section",
    confirmMediaConsent: "consent-section",
  };

  // ============================================================================
  // Restore Draft
  // ============================================================================

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);

      setRole(parsed.role ?? "");
      setOtherRole(parsed.otherRole ?? "");

      setFullName(parsed.fullName ?? "");
      setEmail(parsed.email ?? "");

      setPhone(parsed.phone ?? "");

      setProfessionalTitle(parsed.professionalTitle ?? "");
      setProfessionalBio(parsed.professionalBio ?? "");

      setPhotoUrl(parsed.photoUrl ?? "");

      setLinkedin(parsed.linkedin ?? "");
      setTwitter(parsed.twitter ?? "");
      setWebsite(parsed.website ?? "");

      setAdditionalNotes(parsed.additionalNotes ?? "");

      setConfirmInformation(parsed.confirmInformation ?? false);
      setConfirmMediaConsent(parsed.confirmMediaConsent ?? false);
    } catch (err) {
      console.error("Failed to restore contributor draft", err);
    }
  }, []);

  // ============================================================================
  // Auto Save Draft
  // ============================================================================

  useEffect(() => {
    const timeout = setTimeout(() => {
      const formData = {
        role,
        otherRole,

        fullName,
        email,

        phone,

        professionalTitle,
        professionalBio,

        photoUrl,

        linkedin,
        twitter,
        website,

        additionalNotes,

        confirmInformation,
        confirmMediaConsent,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }, 300);

    return () => clearTimeout(timeout);
  }, [
    role,
    otherRole,

    fullName,
    email,
    phone,

    professionalTitle,
    professionalBio,

    photoUrl,

    linkedin,
    twitter,
    website,

    additionalNotes,

    confirmInformation,
    confirmMediaConsent,
  ]);

  // ============================================================================
  // Submit
  // ============================================================================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({});

    const payload = {
      role,
      otherRole,

      fullName,
      email,

      phone,

      professionalTitle,
      professionalBio,

      photoUrl,

      linkedin,
      twitter,
      website,

      additionalNotes,

      confirmInformation,
      confirmMediaConsent,
    };

    try {
      const res = await fetch("/api/contributors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const formattedErrors: Record<string, string> = {};

        if (data.errors?.fieldErrors) {
          Object.entries(data.errors.fieldErrors).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
              formattedErrors[key] = value[0];
            }
          });
        } else if (Array.isArray(data.errors)) {
          data.errors.forEach((err: any) => {
            if (err.path?.[0]) {
              formattedErrors[err.path.join(".")] = err.message;
            }
          });
        }

        setErrors(formattedErrors);

        const firstErrorKey = Object.keys(formattedErrors)[0];

        if (firstErrorKey) {
          const sectionId = errorSectionMap[firstErrorKey];

          setTimeout(() => {
            const section = document.getElementById(sectionId);

            if (section) {
              const y =
                section.getBoundingClientRect().top + window.pageYOffset - 120;

              window.scrollTo({
                top: y,
                behavior: "smooth",
              });
            }
          }, 100);
        }

        return;
      }

      localStorage.removeItem(STORAGE_KEY);

      setErrors({});

      setIsSubmitted(true);

      document
        .getElementById("form-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    }
  };

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <>
      {/* Global Navigation */}
      <Nav forceSolid />

      <main className="bg-cream">
        {/* ============================================================================
            Hero
        ============================================================================ */}

        <section
          ref={heroRef}
          className="relative min-h-[60vh] overflow-hidden bg-page"
        >
          <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
            <Image
              src="/images/bg/default.jpg"
              alt="UXINDIA Contributors"
              fill
              priority
              className="object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />
          </motion.div>

          <div className="relative z-10 flex flex-col justify-end pb-20 md:pt-28 md:pb-16 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-xs uppercase tracking-[0.25em] text-brand mb-4"
              >
                UXINDIA 2026
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl text-white mb-4"
                style={{
                  fontFamily: "'UXILeadershipCondensed'",
                  fontWeight: 500,
                }}
              >
                Contributor Information
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-2xl md:text-3xl italic text-brand mb-8"
              >
                Help us introduce you to the community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl"
              >
                <p className="font-sans text-lg text-white/80 leading-relaxed mb-4">
                  Please share your latest profile information so our team can
                  prepare conference communications, website listings, event
                  materials, and other participant resources.
                </p>

                <p className="font-sans text-base text-white/60 leading-relaxed">
                  This form is for speakers, workshop leads, panelists,
                  moderators, mentors, volunteers, core team members, and other
                  contributors.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================================================
            Form
        ============================================================================ */}

        <section id="form-section" className="py-16 md:py-12">
          <div className="max-w-3xl mx-auto px-6">
            {!isSubmitted ? (
              <>
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  {/* Intro Callout */}

                  <div className="p-4 mb-10 rounded-xl border border-page/10 bg-cream">
                    <p className="font-sans text-sm text-page/70 leading-relaxed">
                      Complete this form once using your latest professional
                      information. We'll use these details across the conference
                      website, speaker pages, event materials, communications,
                      and internal coordination where applicable.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <FormSection
                      sectionId="role-section"
                      number="01"
                      title="Conference Role"
                      description="Tell us how you'll be participating in UXINDIA 2026."
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <OptionCard
                          name="role"
                          id="speaker"
                          value="Speaker"
                          title="Speaker"
                          description="Conference speaker or keynote."
                          selected={role === "Speaker"}
                          onChange={(value) => {
                            clearError("role");
                            setRole(value);
                          }}
                        />

                        <OptionCard
                          name="role"
                          id="workshop-lead"
                          value="Workshop Lead"
                          title="Workshop Lead"
                          description="Hands-on workshop facilitator."
                          selected={role === "Workshop Lead"}
                          onChange={(value) => {
                            clearError("role");
                            setRole(value);
                          }}
                        />

                        <OptionCard
                          name="role"
                          id="panelist"
                          value="Panelist"
                          title="Panelist"
                          description="Panel discussion participant."
                          selected={role === "Panelist"}
                          onChange={(value) => {
                            clearError("role");
                            setRole(value);
                          }}
                        />

                        <OptionCard
                          name="role"
                          id="core-team"
                          value="Core Team"
                          title="Core Team"
                          description="UXINDIA organizing team."
                          selected={role === "Core Team"}
                          onChange={(value) => {
                            clearError("role");
                            setRole(value);
                          }}
                        />

                        <OptionCard
                          name="role"
                          id="volunteer"
                          value="Volunteer"
                          title="Volunteer"
                          description="Conference volunteer."
                          selected={role === "Volunteer"}
                          onChange={(value) => {
                            clearError("role");
                            setRole(value);
                          }}
                        />

                        <OptionCard
                          name="role"
                          id="other"
                          value="Other"
                          title="Other"
                          description="Any other contributor."
                          selected={role === "Other"}
                          onChange={(value) => {
                            clearError("role");
                            setRole(value);
                          }}
                        />
                      </div>

                      {errors.role && (
                        <p className="font-sans text-sm text-red-500 mt-3">
                          {errors.role}
                        </p>
                      )}

                      {role === "Other" && (
                        <div className="mt-6">
                          <FormInput
                            label="Please specify your role"
                            required
                            value={otherRole}
                            onChange={setOtherRole}
                            error={errors.otherRole}
                            clearError={clearError}
                            fieldName="otherRole"
                          />
                        </div>
                      )}
                    </FormSection>

                    {/* ============================================================================
                        Section 02 — Personal Information
                    ============================================================================ */}

                    <FormSection
                      sectionId="personal-section"
                      number="02"
                      title="Personal Information"
                      description="These details help us communicate with you throughout the conference."
                    >
                      <FormInput
                        label="Full Name"
                        required
                        value={fullName}
                        onChange={setFullName}
                        error={errors.fullName}
                        clearError={clearError}
                        fieldName="fullName"
                      />

                      <FormInput
                        label="Email Address"
                        required
                        type="email"
                        value={email}
                        onChange={setEmail}
                        error={errors.email}
                        clearError={clearError}
                        fieldName="email"
                      />

                      {/* Phone */}

                      <div className="rounded-xl border border-page/20 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-brand/30 focus-within:border-brand transition">
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          countryCallingCodeEditable
                          value={phone}
                          onChange={(value) => setPhone(value ?? "")}
                          className="phone-input"
                        />
                      </div>
                    </FormSection>

                    {/* ============================================================================
                        Section 03 — Professional Information
                    ============================================================================ */}

                    <FormSection
                      sectionId="professional-section"
                      number="03"
                      title="Professional Information"
                      description="These details may appear on the conference website and other official materials."
                    >
                      <FormInput
                        label="Professional Title"
                        hint="Current role and organization"
                        value={professionalTitle}
                        onChange={setProfessionalTitle}
                        error={errors.professionalTitle}
                        clearError={clearError}
                        fieldName="professionalTitle"
                      />

                      <FormTextarea
                        label="Professional Bio"
                        required
                        rows={5}
                        maxLength={1500}
                        hint="100–200 words recommended."
                        value={professionalBio}
                        onChange={setProfessionalBio}
                        error={errors.professionalBio}
                        clearError={clearError}
                        fieldName="professionalBio"
                      />

                      <FormInput
                        label="Professional Photo URL"
                        placeholder="https://drive.google.com/..."
                        hint="Google Drive, Dropbox, OneDrive or other public cloud link."
                        value={photoUrl}
                        onChange={setPhotoUrl}
                        error={errors.photoUrl}
                        clearError={clearError}
                        fieldName="photoUrl"
                      />

                      <FormInput
                        label="LinkedIn"
                        placeholder="https://linkedin.com/in/username"
                        value={linkedin}
                        onChange={setLinkedin}
                        clearError={clearError}
                      />

                      <FormInput
                        label="Twitter / X"
                        placeholder="https://x.com/username"
                        value={twitter}
                        onChange={setTwitter}
                        clearError={clearError}
                      />

                      <FormInput
                        label="Website / Portfolio"
                        placeholder="https://"
                        value={website}
                        onChange={setWebsite}
                        clearError={clearError}
                      />
                    </FormSection>

                    {/* ============================================================================
                        Section 04 — Additional Notes
                    ============================================================================ */}

                    <FormSection
                      sectionId="additional-section"
                      number="04"
                      title="Additional Information"
                      description="Anything else you'd like the organizing team to know."
                    >
                      <FormTextarea
                        label="Additional Notes"
                        hint="Share any preferences, accessibility requirements, travel constraints, dietary requirements, or anything else that would help us support you."
                        rows={4}
                        value={additionalNotes}
                        onChange={setAdditionalNotes}
                        clearError={clearError}
                      />
                    </FormSection>

                    {/* ============================================================================
                        Section 05 — Consent
                    ============================================================================ */}

                    <FormSection
                      sectionId="consent-section"
                      number="05"
                      title="Consent & Confirmation"
                      description="Please review and confirm the following."
                    >
                      <div className="space-y-5">
                        <CheckboxItem
                          id="confirm-information"
                          label="Information Accuracy"
                          description="I confirm that the information provided is accurate and up to date."
                          checked={confirmInformation}
                          onChange={(checked) => {
                            clearError("confirmInformation");
                            setConfirmInformation(checked);
                          }}
                        />

                        {errors.confirmInformation && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmInformation}
                          </p>
                        )}

                        <CheckboxItem
                          id="confirm-media"
                          label="Profile & Media Consent"
                          description="I authorize UXINDIA to use my name, professional bio, profile photo, designation, organization, and public social links across conference websites, event materials, communications, recordings, and promotional content."
                          checked={confirmMediaConsent}
                          onChange={(checked) => {
                            clearError("confirmMediaConsent");
                            setConfirmMediaConsent(checked);
                          }}
                        />

                        {errors.confirmMediaConsent && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmMediaConsent}
                          </p>
                        )}
                      </div>
                    </FormSection>

                    {/* ============================================================================
                        Submit
                    ============================================================================ */}

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                      <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-[#D14910] transition-colors cursor-pointer"
                      >
                        Submit Information
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </div>

                    {/* ============================================================================
                        Footer Callout
                    ============================================================================ */}

                    <div className="mt-8 rounded-xl border border-page/10 bg-cream p-4">
                      <p className="font-sans text-sm text-page/70 leading-relaxed">
                        Thank you for taking the time to complete your
                        contributor profile. If any of your details change
                        before the conference, simply submit this form again
                        with your updated information.
                      </p>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <>
                {/* ============================================================================
                    Success State
                ============================================================================ */}

                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <h2
                    className="text-3xl md:text-4xl text-page mb-4"
                    style={{
                      fontFamily: "'UXILeadershipCondensed'",
                      fontWeight: 500,
                    }}
                  >
                    Thank You!
                  </h2>

                  <p className="font-sans text-lg text-page/70 leading-relaxed max-w-lg mx-auto mb-8">
                    We've successfully received your contributor information.
                    Our team will use these details for conference
                    communications, website listings, printed materials, and
                    internal coordination where applicable.
                  </p>

                  <div className="bg-cream rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                    <p className="font-sans text-sm text-page/60 mb-1">
                      A confirmation will be sent to
                    </p>

                    <p className="font-sans font-semibold text-page mb-4">
                      {email || "your email address"}
                    </p>

                    <p className="font-sans text-sm text-page/60">
                      Need to update something?
                    </p>

                    <a
                      href="mailto:team@umo.design"
                      className="font-sans text-brand font-semibold hover:underline"
                    >
                      team@umo.design
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-page text-page font-sans font-semibold hover:bg-page hover:text-white transition-colors"
                    >
                      Back to Home
                    </Link>

                    <button
                      onClick={() => {
                        localStorage.removeItem(STORAGE_KEY);

                        setRole("");
                        setOtherRole("");

                        setFullName("");
                        setEmail("");

                        setPhone("");

                        setProfessionalTitle("");
                        setProfessionalBio("");

                        setPhotoUrl("");

                        setLinkedin("");
                        setTwitter("");
                        setWebsite("");

                        setAdditionalNotes("");

                        setConfirmInformation(false);
                        setConfirmMediaConsent(false);

                        setErrors({});

                        setIsSubmitted(false);

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand text-white font-sans font-semibold hover:bg-[#D14910] transition-colors"
                    >
                      Submit Another Response
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
