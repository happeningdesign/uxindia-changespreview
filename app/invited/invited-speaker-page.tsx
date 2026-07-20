"use client";

import { useState, useRef, useEffect } from "react";
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
import { MultiSelectCard } from "@/components/forms/multi-select-card/MultiSelectCard";

export default function InvitedSpeakerSubmissionPage() {
  // Local Storage For Form Drafting
  const STORAGE_KEY = "uxindia-invited-speaker-draft";

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Form state
  const [track, setTrack] = useState("");

  // Formats
  const [formats, setFormats] = useState<string[]>([]);

  // Sessions
  const [sessions, setSessions] = useState<
    {
      format: string;
      category: string;
      talkTitle: string;
      talkAbstract: string;
      learningOutcomes: string;
      presentationLink: string;
    }[]
  >([]);

  // Speaker Details
  const [speakerName, setSpeakerName] = useState("");
  const [speakerEmail, setSpeakerEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [speakerPhone, setSpeakerPhone] = useState("");
  const [speakerTitle, setSpeakerTitle] = useState("");
  const [speakerBio, setSpeakerBio] = useState("");
  const [speakerPhotoUrl, setSpeakerPhotoUrl] = useState("");
  const [speakerLinkedin, setSpeakerLinkedin] = useState("");
  const [speakerWebsite, setSpeakerWebsite] = useState("");
  const [speakerTwitter, setSpeakerTwitter] = useState("");

  // Additional Requirements
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [attendeeMaterials, setAttendeeMaterials] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // Confirmations
  const [confirmOriginal, setConfirmOriginal] = useState(false);
  const [confirmNonPromotional, setConfirmNonPromotional] = useState(false);
  const [confirmAvailable, setConfirmAvailable] = useState(false);
  const [confirmIteration, setConfirmIteration] = useState(false);
  const [confirmRecording, setConfirmRecording] = useState(false);
  const [confirmCoc, setConfirmCoc] = useState(false);

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form submission state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Clear Errors
  const clearError = (field: string) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  // Section ID Mapping
  const errorSectionMap: Record<string, string> = {
    formats: "format-section",

    speakerName: "speaker-section",
    speakerEmail: "speaker-section",
    speakerPhone: "speaker-section",
    speakerTitle: "speaker-section",
    speakerBio: "speaker-section",
    speakerPhotoUrl: "speaker-section",

    confirmOriginal: "confirmations-section",
    confirmNonPromotional: "confirmations-section",
    confirmAvailable: "confirmations-section",
    confirmIteration: "confirmations-section",
    confirmRecording: "confirmations-section",
    confirmCoc: "confirmations-section",
  };

  // Store Form Draft To Local Storage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);

      setTrack(parsed.track ?? "");
      setFormats(parsed.formats ?? []);
      setSessions(parsed.sessions ?? []);

      setSpeakerName(parsed.speakerName ?? "");
      setSpeakerEmail(parsed.speakerEmail ?? "");
      setCountryCode(parsed.countryCode ?? "+91");
      setSpeakerPhone(parsed.speakerPhone ?? "");
      setSpeakerTitle(parsed.speakerTitle ?? "");
      setSpeakerBio(parsed.speakerBio ?? "");
      setSpeakerPhotoUrl(parsed.speakerPhotoUrl ?? "");

      setSpeakerLinkedin(parsed.speakerLinkedin ?? "");
      setSpeakerWebsite(parsed.speakerWebsite ?? "");
      setSpeakerTwitter(parsed.speakerTwitter ?? "");

      setSpecialRequirements(parsed.specialRequirements ?? "");
      setAttendeeMaterials(parsed.attendeeMaterials ?? "");

      setConfirmOriginal(parsed.confirmOriginal ?? false);
      setConfirmNonPromotional(parsed.confirmNonPromotional ?? false);
      setConfirmAvailable(parsed.confirmAvailable ?? false);
      setConfirmIteration(parsed.confirmIteration ?? false);
      setConfirmRecording(parsed.confirmRecording ?? false);
      setConfirmCoc(parsed.confirmCoc ?? false);

      setAdditionalNotes(parsed.additionalNotes ?? "");
    } catch (err) {
      console.error("Failed to restore draft", err);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const formData = {
        track,
        formats,
        sessions,

        speakerName,
        speakerEmail,
        countryCode,
        speakerPhone,

        speakerTitle,
        speakerBio,
        speakerPhotoUrl,

        speakerLinkedin,
        speakerWebsite,
        speakerTwitter,

        specialRequirements,
        attendeeMaterials,

        confirmOriginal,
        confirmNonPromotional,
        confirmAvailable,
        confirmIteration,
        confirmRecording,
        confirmCoc,

        additionalNotes,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }, 300);

    return () => clearTimeout(timeout);
  }, [
    track,
    formats,
    sessions,

    speakerName,
    speakerEmail,
    countryCode,
    speakerPhone,

    speakerTitle,
    speakerBio,
    speakerPhotoUrl,

    speakerLinkedin,
    speakerWebsite,
    speakerTwitter,

    specialRequirements,
    attendeeMaterials,

    confirmOriginal,
    confirmNonPromotional,
    confirmAvailable,
    confirmIteration,
    confirmRecording,
    confirmCoc,

    additionalNotes,
  ]);

  // Toogle Format
  const toggleFormat = (format: string) => {
    const exists = formats.includes(format);

    if (exists) {
      setFormats((prev) => prev.filter((f) => f !== format));

      setSessions((prev) =>
        prev.filter((session) => session.format !== format),
      );
    } else {
      setFormats((prev) => [...prev, format]);

      setSessions((prev) => [
        ...prev,
        {
          format,
          category: "",
          talkTitle: "",
          talkAbstract: "",
          learningOutcomes: "",
          presentationLink: "",
        },
      ]);
    }
  };

  const updateSession = (format: string, field: string, value: string) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.format === format ? { ...session, [field]: value } : session,
      ),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({});

    const payload = {
      speakerName,
      speakerEmail,
      countryCode,
      speakerPhone,

      speakerTitle,
      speakerBio,

      speakerPhotoUrl,
      speakerLinkedin,
      speakerWebsite,
      speakerTwitter,

      track,

      formats,
      sessions,

      specialRequirements,
      attendeeMaterials,

      confirmOriginal,
      confirmNonPromotional,
      confirmAvailable,
      confirmIteration,
      confirmRecording,
      confirmCoc,

      additionalNotes,
    };

    try {
      const res = await fetch("/api/invited-speaker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const formattedErrors: Record<string, string> = {};

        // Zod flatten() format
        if (data.errors?.fieldErrors) {
          Object.entries(data.errors.fieldErrors).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
              formattedErrors[key] = value[0];
            }
          });
        }

        // Zod issues array format
        else if (Array.isArray(data.errors)) {
          data.errors.forEach((err: any) => {
            if (err.path?.[0]) {
              formattedErrors[err.path.join(".")] = err.message;
            }
          });
        }

        setErrors(formattedErrors);

        const firstErrorKey = Object.keys(formattedErrors)[0];

        if (firstErrorKey) {
          let sectionId = errorSectionMap[firstErrorKey];

          if (!sectionId && firstErrorKey.startsWith("sessions.")) {
            const match = firstErrorKey.match(/^sessions\.(\d+)/);

            if (match) {
              sectionId = `session-${match[1]}`;
            }
          }

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

      // Success
      setErrors({});

      // Clean Draft from Local Storage
      localStorage.removeItem(STORAGE_KEY);

      setIsSubmitted(true);
      // window.scrollTo({ top: 0, behavior: "smooth" });
      document
        .getElementById("form-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Calculate progress
  const calculateProgress = () => {
    let filled = 0;
    const total = 13;

    if (speakerName) filled++;
    if (speakerEmail) filled++;
    if (speakerPhone) filled++;
    if (speakerTitle) filled++;
    if (speakerBio) filled++;

    if (formats.length > 0) filled++;

    if (
      sessions.length > 0 &&
      sessions.every((s) => s.talkTitle && s.talkAbstract && s.learningOutcomes)
    ) {
      filled++;
    }

    if (confirmOriginal) filled++;
    if (confirmAvailable) filled++;

    if (confirmNonPromotional) filled++;
    if (confirmIteration) filled++;
    if (confirmRecording) filled++;
    if (confirmCoc) filled++;

    return Math.round((filled / total) * 100);
  };

  return (
    <>
      {/* global nav */}
      <Nav forceSolid />

      <main className="bg-cream">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] overflow-hidden bg-page"
        >
          <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
            <Image
              src="/images/bg/default.jpg"
              alt="UXINDIA conference stage"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/60 to-transparent" />
          </motion.div>

          <div className="relative z-10 flex flex-col justify-end pb-20 md:pt-28 md:pb-16 px-6">
            <div className="max-w-5xl mx-auto w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-xs text-brand uppercase tracking-[0.25em] mb-4"
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
                Invited Speakers
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-2xl md:text-3xl text-brand italic mb-8"
              >
                Designing What Could Possibly Go Right
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl"
              >
                <p className="font-sans text-lg text-white/80 leading-relaxed mb-4">
                  <strong className="text-white">
                    Leadership in the Age of AI.
                  </strong>
                </p>
                <p className="font-sans text-base text-white/70 leading-relaxed mb-4">
                  UXINDIA Design Leadership Week 2026 invites bold, generous
                  leaders to share the real stories behind how you are shaping
                  design in the age of AI.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-12" id="form-section">
          <div className="max-w-3xl mx-auto px-6">
            {!isSubmitted ? (
              <>
                {/* Sticky Progress Bar - Outside rounded container for sticky to work */}
                <div className="sticky top-[60px] z-40 bg-cream pt-4 pb-4 -mx-6 px-6 mb-4">
                  <div className="bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm text-page/60">
                        Progress
                      </span>
                      <span className="font-sans text-sm font-semibold text-brand">
                        {calculateProgress()}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-page/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand to-[#FF8C5A] rounded-full transition-all duration-500"
                        style={{ width: `${calculateProgress()}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  {/* Submission details callout */}
                  <div className="flex flex-wrap items-center gap-2 p-4 mb-10 bg-cream rounded-xl border border-page/10">
                    <span className="font-sans text-sm text-page/70">
                      For official guidelines, themes, and submission policies,
                      see
                    </span>
                    <Link
                      href="https://2026.ux-india.org/call-for-speakers/"
                      target="_blank"
                      className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-brand hover:underline"
                    >
                      Submission Details
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </Link>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Section 1: Speaker Information */}
                    <FormSection
                      sectionId="speaker-section"
                      number="01"
                      title="Speaker Information"
                      description="Help us get to know you. All fields marked with * are required."
                    >
                      <FormInput
                        label="Full Name"
                        required
                        value={speakerName}
                        onChange={setSpeakerName}
                        error={errors.speakerName}
                        clearError={clearError}
                        fieldName="speakerName"
                      />

                      <FormInput
                        label="Email Address"
                        required
                        type="email"
                        value={speakerEmail}
                        onChange={setSpeakerEmail}
                        error={errors.speakerEmail}
                        clearError={clearError}
                        fieldName="speakerEmail"
                      />
                      {/* Phone Number with Country Code */}
                      <div className="space-y-2 mb-2">
                        <label className="block font-sans text-sm font-medium text-page">
                          Phone Number <span className="text-brand">*</span>
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-[120px] px-3 py-3 rounded-xl border border-page/20 bg-white font-sans text-sm text-page focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230D0D0D'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 8px center",
                              backgroundSize: "16px",
                              paddingRight: "32px",
                            }}
                          >
                            <option value="+91">+91 IN</option>
                            <option value="+1">+1 US</option>
                            <option value="+44">+44 UK</option>
                            <option value="+61">+61 AU</option>
                            <option value="+49">+49 DE</option>
                            <option value="+33">+33 FR</option>
                            <option value="+81">+81 JP</option>
                            <option value="+86">+86 CN</option>
                            <option value="+65">+65 SG</option>
                            <option value="+971">+971 AE</option>
                            <option value="+966">+966 SA</option>
                            <option value="+92">+92 PK</option>
                            <option value="+880">+880 BD</option>
                            <option value="+94">+94 LK</option>
                            <option value="+977">+977 NP</option>
                            <option value="+60">+60 MY</option>
                            <option value="+62">+62 ID</option>
                            <option value="+63">+63 PH</option>
                            <option value="+82">+82 KR</option>
                            <option value="+64">+64 NZ</option>
                            <option value="+27">+27 ZA</option>
                            <option value="+234">+234 NG</option>
                            <option value="+254">+254 KE</option>
                            <option value="+55">+55 BR</option>
                            <option value="+52">+52 MX</option>
                            <option value="+31">+31 NL</option>
                            <option value="+46">+46 SE</option>
                            <option value="+41">+41 CH</option>
                            <option value="+39">+39 IT</option>
                            <option value="+34">+34 ES</option>
                            <option value="+351">+351 PT</option>
                            <option value="+48">+48 PL</option>
                            <option value="+7">+7 RU</option>
                            <option value="+90">+90 TR</option>
                            <option value="+20">+20 EG</option>
                            <option value="+972">+972 IL</option>
                          </select>
                          <input
                            type="tel"
                            placeholder="Phone number"
                            value={speakerPhone}
                            onChange={(e) => {
                              clearError("speakerPhone");
                              setSpeakerPhone(e.target.value);
                            }}
                            // className="flex-1 px-4 py-3 rounded-xl border border-page/20 bg-white font-sans text-sm text-page placeholder:text-page/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                            className={`flex-1 px-4 py-3 rounded-xl border bg-white font-sans text-sm text-page placeholder:text-page/40 focus:outline-none focus:ring-2 transition-all ${
                              errors.speakerPhone
                                ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                                : "border-page/20 focus:ring-brand/30 focus:border-brand"
                            }`}
                          />
                        </div>
                        {errors.speakerPhone && (
                          <p className="font-sans text-sm text-red-500 mt-2">
                            {errors.speakerPhone}
                          </p>
                        )}
                        <p className="font-sans text-xs text-page/50">
                          We&apos;ll use this for urgent communication only
                        </p>
                      </div>

                      <FormInput
                        label="Professional Title"
                        hint={`Current role and organization (e.g., "Head of Design at Acme Corp")`}
                        required
                        value={speakerTitle}
                        onChange={setSpeakerTitle}
                        error={errors.speakerTitle}
                        clearError={clearError}
                        fieldName="speakerTitle"
                      />

                      <FormTextarea
                        label="Speaker Bio"
                        hint="Professional bio for the conference program. Third-person, 100-200 words. Highlight relevant expertise and accomplishments."
                        required
                        maxLength={1500}
                        value={speakerBio}
                        onChange={setSpeakerBio}
                        rows={5}
                        error={errors.speakerBio}
                        clearError={clearError}
                        fieldName="speakerBio"
                      />

                      <FormInput
                        label="Professional Photo URL"
                        hint="Provide a high-resolution headshot public link (Google Drive, Dropbox, CDN, or personal site). Minimum 800x800px recommended."
                        // type="url"
                        placeholder="https://your-image-url.com/photo.jpg"
                        value={speakerPhotoUrl}
                        onChange={setSpeakerPhotoUrl}
                        error={errors.speakerPhotoUrl}
                        clearError={clearError}
                        fieldName="speakerPhotoUrl"
                      />

                      <FormInput
                        label="LinkedIn Profile"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={speakerLinkedin}
                        onChange={setSpeakerLinkedin}
                        clearError={clearError}
                      />

                      <FormInput
                        label="Website / Portfolio"
                        placeholder="https://"
                        value={speakerWebsite}
                        onChange={setSpeakerWebsite}
                        clearError={clearError}
                      />

                      <FormInput
                        label="Twitter / X Handle"
                        placeholder="@handle"
                        value={speakerTwitter}
                        onChange={setSpeakerTwitter}
                        clearError={clearError}
                      />
                    </FormSection>

                    {/* Section 2: Track Selection */}
                    <FormSection
                      sectionId="track-section"
                      number="02"
                      title="Choose Your Track"
                      description="Select which conference track best fits your experience level and target audience."
                    >
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl mb-6">
                        <p className="font-sans text-sm text-blue-800">
                          <strong>Optional.</strong> Select the track that best
                          aligns with your session.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <OptionCard
                          name="track"
                          id="track-leadership"
                          value="leadership"
                          title="Leadership Summit"
                          duration="23, 24 & 25 Sept"
                          description="For practicing and senior leaders (7+ years to C-level). Strategy, business impact, organizational change, scaling design, AI-driven practice transformation."
                          selected={track === "leadership"}
                          onChange={(value) => {
                            clearError("track");
                            setTrack(value);
                          }}
                          fieldName="track"
                          error={errors.track}
                        />
                        <OptionCard
                          name="track"
                          id="track-rising"
                          value="rising"
                          title="Rising Leaders Forum"
                          duration="26 & 27 Sept"
                          description="For students and emerging leaders (0-7 years experience). Accessible, de-jargonized real stories made actionable for rising talent. Mentorship and skill development."
                          selected={track === "rising"}
                          onChange={(value) => {
                            clearError("track");
                            setTrack(value);
                          }}
                          fieldName="track"
                          error={errors.track}
                        />
                      </div>
                      {errors.track && (
                        <p className="font-sans text-sm text-red-500 mt-3">
                          {errors.track}
                        </p>
                      )}
                    </FormSection>

                    {/* Section 3: Session Format */}
                    <FormSection
                      sectionId="format-section"
                      number="03"
                      title="Session Formats"
                      description="Select one or more formats you'd like to participate in. A separate session details section will appear for each format selected."
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <MultiSelectCard
                          name="formats"
                          id="format-keynote"
                          value="keynote"
                          title="Grand Keynote"
                          duration="40 min"
                          description="Major ballroom keynotes for Day 1 of Leadership Summit. High-level strategic vision framing the theme."
                          selected={formats.includes("keynote")}
                          onChange={(value) => {
                            clearError("formats");
                            toggleFormat(value);
                          }}
                          fieldName="formats"
                          error={errors.formats}
                        />

                        <MultiSelectCard
                          name="formats"
                          id="format-plenary"
                          value="plenary"
                          title="Plenary Keynote"
                          duration="30 min"
                          description="Full-audience sessions for Leadership Summit Day 1. Strategic frameworks and organizational insights."
                          selected={formats.includes("plenary")}
                          onChange={(value) => {
                            clearError("formats");
                            toggleFormat(value);
                          }}
                          fieldName="formats"
                          error={errors.formats}
                        />

                        <MultiSelectCard
                          name="formats"
                          id="format-deep-dive"
                          value="deep-dive"
                          title="Deep Dive Talk"
                          duration="30 min"
                          description="In-depth explorations with substantial, accessible content for mixed professional and student audiences."
                          selected={formats.includes("deep-dive")}
                          onChange={(value) => {
                            clearError("formats");
                            toggleFormat(value);
                          }}
                          fieldName="formats"
                          error={errors.formats}
                        />

                        <MultiSelectCard
                          name="formats"
                          id="format-spark"
                          value="spark"
                          title="Spark Session"
                          duration="18 min"
                          description="High-energy, focused talks with strong teaching value. Quick insights with audience interaction."
                          selected={formats.includes("spark")}
                          onChange={(value) => {
                            clearError("formats");
                            toggleFormat(value);
                          }}
                          fieldName="formats"
                          error={errors.formats}
                        />

                        <MultiSelectCard
                          name="formats"
                          id="format-panel"
                          value="panel"
                          title="Panel Discussion"
                          duration="40-60 min"
                          description="Moderated dialogue with multiple perspectives on a focused topic. Requires coordination with other panelists."
                          selected={formats.includes("panel")}
                          onChange={(value) => {
                            clearError("formats");
                            toggleFormat(value);
                          }}
                          fieldName="formats"
                          error={errors.formats}
                        />

                        <MultiSelectCard
                          name="formats"
                          id="format-workshop"
                          value="workshop"
                          title="Workshop / Masterclass"
                          duration="2.5-3 hours"
                          description="Hands-on sessions with advanced skills, strategic tools, frameworks. Day 3 Leadership Summit or Day 2 Rising Leaders."
                          selected={formats.includes("workshop")}
                          onChange={(value) => {
                            clearError("formats");
                            toggleFormat(value);
                          }}
                          fieldName="formats"
                          error={errors.formats}
                        />
                      </div>

                      {errors.formats && (
                        <p className="font-sans text-sm text-red-500 mt-3">
                          {errors.formats}
                        </p>
                      )}
                    </FormSection>

                    {/* Section 4: Talk Details */}
                    {sessions.map((session, index) => (
                      <FormSection
                        sectionId={`session-${index}`}
                        key={session.format}
                        number={`04.${index + 1}`}
                        title={`${session.format
                          .replaceAll("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())} Details`}
                        description="Tell us about this session."
                      >
                        {/* Category */}
                        <h3 className="font-sans font-medium text-page mb-3">
                          Submission Category{" "}
                          <span className="text-brand">*</span>
                        </h3>

                        {errors[`sessions.${index}.category`] && (
                          <p className="font-sans text-sm text-red-500 mb-3">
                            {errors[`sessions.${index}.category`]}
                          </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <OptionCard
                            name={`category-${session.format}`}
                            id={`${session.format}-design-practice`}
                            value="design-practice"
                            title="Design Practice"
                            description="Methods, systems, UX, research, service design."
                            selected={session.category === "design-practice"}
                            onChange={(value) => {
                              clearError(`sessions.${index}.category`);
                              updateSession(session.format, "category", value);
                            }}
                          />

                          <OptionCard
                            name={`category-${session.format}`}
                            id={`${session.format}-entrepreneurship`}
                            value="entrepreneurship"
                            title="Entrepreneurship"
                            description="Building products, businesses, and ventures."
                            selected={session.category === "entrepreneurship"}
                            onChange={(value) => {
                              clearError(`sessions.${index}.category`);
                              updateSession(session.format, "category", value);
                            }}
                          />

                          <OptionCard
                            name={`category-${session.format}`}
                            id={`${session.format}-emerging-tech`}
                            value="emerging-tech"
                            title="Emerging Tech"
                            description="AI, automation, future technologies."
                            selected={session.category === "emerging-tech"}
                            onChange={(value) => {
                              clearError(`sessions.${index}.category`);
                              updateSession(session.format, "category", value);
                            }}
                          />

                          <OptionCard
                            name={`category-${session.format}`}
                            id={`${session.format}-social-impact`}
                            value="social-impact"
                            title="Social Impact"
                            description="Public good, sustainability, healthcare, education."
                            selected={session.category === "social-impact"}
                            onChange={(value) => {
                              clearError(`sessions.${index}.category`);
                              updateSession(session.format, "category", value);
                            }}
                          />
                        </div>

                        {/* Talk Title */}
                        <FormInput
                          label="Talk Title"
                          required
                          value={session.talkTitle}
                          onChange={(value) =>
                            updateSession(session.format, "talkTitle", value)
                          }
                          error={errors[`sessions.${index}.talkTitle`]}
                          clearError={clearError}
                          fieldName={`sessions.${index}.talkTitle`}
                        />

                        {/* Talk Abstract */}
                        <FormTextarea
                          label="Abstract"
                          required
                          value={session.talkAbstract}
                          onChange={(value) =>
                            updateSession(session.format, "talkAbstract", value)
                          }
                          error={errors[`sessions.${index}.talkAbstract`]}
                          clearError={clearError}
                          fieldName={`sessions.${index}.talkAbstract`}
                        />

                        {/* Key Takeaways */}
                        <FormTextarea
                          label="Key Takeaways"
                          required
                          value={session.learningOutcomes}
                          onChange={(value) =>
                            updateSession(
                              session.format,
                              "learningOutcomes",
                              value,
                            )
                          }
                          error={errors[`sessions.${index}.learningOutcomes`]}
                          clearError={clearError}
                          fieldName={`sessions.${index}.learningOutcomes`}
                        />

                        {/* Presentation URL */}
                        <FormInput
                          label="Presentation / Deck URL"
                          value={session.presentationLink}
                          onChange={(value) =>
                            updateSession(
                              session.format,
                              "presentationLink",
                              value,
                            )
                          }
                          error={errors[`sessions.${index}.presentationLink`]}
                          clearError={clearError}
                          fieldName={`sessions.${index}.presentationLink`}
                        />
                      </FormSection>
                    ))}

                    {/* Section 5: Additional Details */}
                    <FormSection
                      sectionId="additional-section"
                      number="05"
                      title="Additional Details"
                      description="Help us prepare for your session."
                    >
                      <FormTextarea
                        label="Special Requirements"
                        hint="Any accessibility needs, equipment, or setup requirements"
                        value={specialRequirements}
                        onChange={setSpecialRequirements}
                        clearError={clearError}
                        rows={3}
                      />
                      <FormTextarea
                        label="Materials for Attendees"
                        hint="Will you provide handouts, worksheets, or downloadable resources? (Optional but encouraged for workshops)"
                        value={attendeeMaterials}
                        onChange={setAttendeeMaterials}
                        clearError={clearError}
                        rows={3}
                      />
                    </FormSection>

                    {/* Section 6: Confirmations */}
                    <FormSection
                      sectionId="confirmations-section"
                      number="06"
                      title="Confirmations"
                      description="Please review and confirm the following."
                    >
                      <div className="space-y-4">
                        <CheckboxItem
                          id="confirm-original"
                          label="Original Content"
                          description="This talk is based on original work and real experience, not recycled content or pure theory."
                          checked={confirmOriginal}
                          // onChange={setConfirmOriginal}
                          onChange={(checked) => {
                            clearError("confirmOriginal");
                            setConfirmOriginal(checked);
                          }}
                        />
                        {errors.confirmOriginal && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmOriginal}
                          </p>
                        )}
                        <CheckboxItem
                          id="confirm-non-promotional"
                          label="Non-Promotional"
                          description="This is not a product pitch or disguised advertisement. The focus is on insights and learnings."
                          checked={confirmNonPromotional}
                          // onChange={setConfirmNonPromotional}
                          onChange={(checked) => {
                            clearError("confirmNonPromotional");
                            setConfirmNonPromotional(checked);
                          }}
                        />
                        {errors.confirmNonPromotional && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmNonPromotional}
                          </p>
                        )}
                        <CheckboxItem
                          id="confirm-available"
                          label="Availability"
                          description="I understand that the final date of my session(s) will be communicated once the conference schedule is finalized, and I will make myself available accordingly."
                          checked={confirmAvailable}
                          // onChange={setConfirmAvailable}
                          onChange={(checked) => {
                            clearError("confirmAvailable");
                            setConfirmAvailable(checked);
                          }}
                        />
                        {errors.confirmAvailable && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmAvailable}
                          </p>
                        )}
                        <CheckboxItem
                          id="confirm-iteration"
                          label="Collaboration"
                          description="I am willing to iterate on my content with the curation team to ensure quality and alignment."
                          checked={confirmIteration}
                          // onChange={setConfirmIteration}
                          onChange={(checked) => {
                            clearError("confirmIteration");
                            setConfirmIteration(checked);
                          }}
                        />
                        {errors.confirmIteration && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmIteration}
                          </p>
                        )}
                        <CheckboxItem
                          id="confirm-recording"
                          label="Recording Consent"
                          description="I consent to my session being recorded and shared for educational purposes."
                          checked={confirmRecording}
                          // onChange={setConfirmRecording}
                          onChange={(checked) => {
                            clearError("confirmRecording");
                            setConfirmRecording(checked);
                          }}
                        />
                        {errors.confirmRecording && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmRecording}
                          </p>
                        )}
                        <CheckboxItem
                          id="confirm-coc"
                          label="Code of Conduct"
                          description="I agree to abide by UXINDIA's Code of Conduct and create an inclusive, respectful environment."
                          checked={confirmCoc}
                          // onChange={setConfirmCoc}
                          onChange={(checked) => {
                            clearError("confirmCoc");
                            setConfirmCoc(checked);
                          }}
                          linkText="Code of Conduct"
                          linkHref="/code-of-conduct"
                        />
                        {errors.confirmCoc && (
                          <p className="font-sans text-sm text-red-500">
                            {errors.confirmCoc}
                          </p>
                        )}
                      </div>
                    </FormSection>

                    {/* Section 7: Additional Notes */}
                    <FormSection
                      number="07"
                      title="Additional Notes (Optional)"
                      description="Anything else you'd like the organizers to know?"
                    >
                      <FormTextarea
                        label="Additional Comments"
                        hint="Share any context, constraints, preferences, or questions for the organizing team"
                        value={additionalNotes}
                        onChange={setAdditionalNotes}
                        rows={4}
                      />
                    </FormSection>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                      <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-semibold px-8 py-4 rounded-full hover:bg-[#D14910] transition-colors cursor-pointer"
                      >
                        Submit Your Information
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
                      {/* <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 border-2 border-page/20 text-page font-sans font-semibold px-8 py-4 rounded-full hover:border-page/40 transition-colors"
                      >
                        Save as Draft
                      </button> */}
                    </div>

                    {/* Bottom callout */}
                    <div className="flex flex-wrap items-center gap-2 p-4 mt-8 bg-cream rounded-xl border border-page/10">
                      <span className="font-sans text-sm text-page/70">
                        For official guidelines, themes, and submission
                        policies, see
                      </span>
                      <Link
                        href="https://2026.ux-india.org/call-for-speakers/"
                        target="_blank"
                        className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-brand hover:underline"
                      >
                        Submission Details
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </Link>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              /* Success Message */
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
                  Thank you for sharing your speaker information!
                </h2>
                <p className="font-sans text-lg text-page/70 mb-8 max-w-md mx-auto">
                  We appreciate you taking the time to share your information.
                  Your session details have been received successfully.
                </p>

                <div className="bg-cream rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                  <p className="font-sans text-sm text-page/60 mb-1">
                    We'll be sending you a confirmation to
                  </p>
                  <p className="font-sans font-semibold text-page mb-4">
                    {speakerEmail || "your email address"} shortly.
                  </p>
                  <p className="font-sans text-sm text-page/60">
                    Questions? Contact us at{" "}
                    <a
                      href="mailto:speakers@ux-india.org"
                      className="text-brand font-semibold hover:underline"
                    >
                      team@umo.design
                    </a>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 border-2 border-page text-page font-sans font-semibold px-8 py-3 rounded-full hover:bg-page hover:text-white transition-colors"
                  >
                    Back to Home
                  </Link>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      // Reset form - in a real app you'd clear all state
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-[#D14910] transition-colors"
                  >
                    Make Another Submission
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* global footer */}
      <Footer />
    </>
  );
}
