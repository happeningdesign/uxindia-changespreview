"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Form section component
function FormSection({
  number,
  title,
  description,
  children,
  sectionId,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
  sectionId?: string;
}) {
  return (
    <div
      id={sectionId}
      className="mb-12 pb-12 border-b border-page/10 last:border-b-0 last:mb-0 last:pb-0"
    >
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-sans text-sm font-semibold text-brand">
          {number}
        </span>
        <h2
          className="text-2xl md:text-3xl text-page"
          style={{ fontFamily: "'UXILeadershipCondensed'", fontWeight: 500 }}
        >
          {title}
        </h2>
      </div>
      <p className="font-sans text-sm text-page/60 mb-6">{description}</p>
      {children}
    </div>
  );
}

// Option card component for radio selections
function OptionCard({
  name,
  id,
  value,
  title,
  duration,
  description,
  selected,
  onChange,
  fieldName,
  error,
}: {
  name: string;
  id: string;
  value: string;
  title: string;
  duration?: string;
  description: string;
  selected: boolean;
  onChange: (value: string) => void;
  fieldName?: string;
  error?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`block p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
        selected
          ? "border-brand bg-brand/5"
          : "border-page/10 hover:border-brand/50 bg-white"
      }`}
    >
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-sans font-semibold text-page">{title}</span>
        {duration && (
          <span className="font-sans text-xs font-semibold text-brand whitespace-nowrap">
            {duration}
          </span>
        )}
      </div>
      <p className="font-sans text-sm text-page/60 leading-relaxed">
        {description}
      </p>
    </label>
  );
}

// Checkbox item component
function CheckboxItem({
  id,
  label,
  description,
  checked,
  onChange,
  linkText,
  linkHref,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  linkText?: string;
  linkHref?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
        checked
          ? "border-brand bg-brand/5"
          : "border-page/10 hover:border-brand/50 bg-white"
      }`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-5 h-5 rounded border-2 border-page/20 text-brand focus:ring-brand focus:ring-offset-0"
      />
      <div className="flex-1">
        <span className="font-sans font-medium text-page block mb-1">
          {linkText && linkHref ? (
            <Link href={linkHref} className="text-brand hover:underline">
              {linkText}
            </Link>
          ) : (
            label
          )}
          {!linkText && <span className="text-brand ml-1">*</span>}
        </span>
        <p className="font-sans text-sm text-page/60">{description}</p>
      </div>
    </label>
  );
}

// Input field component
function FormInput({
  label,
  hint,
  required,
  type = "text",
  placeholder,
  maxLength,
  value,
  onChange,
  showCounter,
  error,
  clearError,
  fieldName,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  value: string;
  onChange: (value: string) => void;
  showCounter?: boolean;
  error?: string;
  clearError?: (field: string) => void;
  fieldName?: string;
}) {
  return (
    <div className="mb-6">
      <label className="block font-sans font-medium text-page mb-1">
        {label}
        {required && <span className="text-brand ml-1">*</span>}
      </label>
      {hint && <p className="font-sans text-sm text-page/50 mb-2">{hint}</p>}
      <input
        data-field={fieldName}
        type={type}
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        onChange={(e) => {
          if (error && clearError && fieldName) {
            clearError(fieldName);
          }

          onChange(e.target.value);
        }}
        placeholder={placeholder}
        maxLength={maxLength}
        // className="w-full px-4 py-3 rounded-xl border-2 border-page/10 bg-white font-sans text-page placeholder:text-page/30 focus:outline-none focus:border-brand transition-colors"
        className={`w-full px-4 py-3 rounded-xl border-2 bg-white font-sans text-page placeholder:text-page/30 focus:outline-none transition-colors ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-page/10 focus:border-brand"
        }`}
      />
      {error && <p className="font-sans text-sm text-red-500 mt-2">{error}</p>}
      {showCounter && maxLength && (
        <p className="font-sans text-xs text-page/40 text-right mt-1">
          {value.length} / {maxLength}
        </p>
      )}
    </div>
  );
}

// Textarea field component
function FormTextarea({
  label,
  hint,
  required,
  placeholder,
  maxLength,
  minLength,
  value,
  onChange,
  rows = 4,
  error,
  clearError,
  fieldName,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  error?: string;
  clearError?: (field: string) => void;
  fieldName?: string;
}) {
  return (
    <div className="mb-6">
      <label className="block font-sans font-medium text-page mb-1">
        {label}
        {required && <span className="text-brand ml-1">*</span>}
      </label>
      {hint && <p className="font-sans text-sm text-page/50 mb-2">{hint}</p>}
      <textarea
        data-field={fieldName}
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        onChange={(e) => {
          if (error && clearError && fieldName) {
            clearError(fieldName);
          }

          onChange(e.target.value);
        }}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        // className="w-full px-4 py-3 rounded-xl border-2 border-page/10 bg-white font-sans text-page placeholder:text-page/30 focus:outline-none focus:border-brand transition-colors resize-y"
        className={`w-full px-4 py-3 rounded-xl border-2 bg-white font-sans text-page placeholder:text-page/30 focus:outline-none transition-colors resize-y ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-page/10 focus:border-brand"
        }`}
      />
      {error && <p className="font-sans text-sm text-red-500 mt-2">{error}</p>}
      {maxLength && (
        <p className="font-sans text-xs text-page/40 text-right mt-1">
          {value.length} / {maxLength}
          {minLength && ` (minimum ${minLength})`}
        </p>
      )}
    </div>
  );
}

// Info card for key dates
function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-colors">
      <p className="font-sans text-xs text-white/60 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="font-sans text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

export default function SpeakerSubmissionPage() {
  // Local Storage For Form Drafting
  const STORAGE_KEY = "uxindia-cfs-draft";

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Form state
  const [track, setTrack] = useState("");
  const [format, setFormat] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [speakingExp, setSpeakingExp] = useState("");

  // Text fields
  const [talkTitle, setTalkTitle] = useState("");
  const [talkAbstract, setTalkAbstract] = useState("");
  const [talkDescription, setTalkDescription] = useState("");
  const [learningOutcomes, setLearningOutcomes] = useState("");
  const [alignment, setAlignment] = useState("");
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
  const [pastTalks, setPastTalks] = useState("");
  const [presentationLink, setPresentationLink] = useState("");
  const [recordingLink, setRecordingLink] = useState("");
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
    track: "track-section",
    format: "format-section",
    category: "category-section",

    talkTitle: "talk-section",
    talkAbstract: "talk-section",
    talkDescription: "talk-section",
    learningOutcomes: "talk-section",
    alignment: "talk-section",

    speakerName: "speaker-section",
    speakerEmail: "speaker-section",
    speakerPhone: "speaker-section",
    speakerTitle: "speaker-section",
    speakerBio: "speaker-section",
    speakerPhotoUrl: "speaker-section",

    experience: "experience-section",
    speakingExp: "experience-section",
    presentationLink: "experience-section",

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
      setFormat(parsed.format ?? "");
      setCategory(parsed.category ?? "");

      setTalkTitle(parsed.talkTitle ?? "");
      setTalkAbstract(parsed.talkAbstract ?? "");
      setTalkDescription(parsed.talkDescription ?? "");
      setLearningOutcomes(parsed.learningOutcomes ?? "");
      setAlignment(parsed.alignment ?? "");

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

      setExperience(parsed.experience ?? "");
      setSpeakingExp(parsed.speakingExp ?? "");

      setPastTalks(parsed.pastTalks ?? "");
      setPresentationLink(parsed.presentationLink ?? "");
      setRecordingLink(parsed.recordingLink ?? "");

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
        format,
        category,

        talkTitle,
        talkAbstract,
        talkDescription,
        learningOutcomes,
        alignment,

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

        experience,
        speakingExp,

        pastTalks,
        presentationLink,
        recordingLink,

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
    format,
    category,

    talkTitle,
    talkAbstract,
    talkDescription,
    learningOutcomes,
    alignment,

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

    experience,
    speakingExp,

    pastTalks,
    presentationLink,
    recordingLink,

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrors({});

    const payload = {
      track,
      format,
      category,
      talkTitle,
      talkAbstract,
      talkDescription,
      learningOutcomes,
      alignment,
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
      experience,
      speakingExp,
      pastTalks,
      presentationLink,
      recordingLink,
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
      const res = await fetch("/api/speaker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // Validation or server error
      // if (!res.ok || !data.success) {
      //   console.log("Validation errors:", data.errors);
      //   alert("Please fix the errors in the form");
      //   return;
      // }

      if (!res.ok || !data.success) {
        // console.log("FULL RESPONSE:", data);

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
              formattedErrors[err.path[0]] = err.message;
            }
          });
        }

        // console.log("FORMATTED ERRORS:", formattedErrors);

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
    const total = 15; // Approximate number of required sections

    if (track) filled++;
    if (format) filled++;
    if (category) filled++;
    if (talkTitle) filled++;
    if (talkAbstract.length >= 50) filled++;
    if (talkDescription.length >= 50) filled++;
    if (learningOutcomes) filled++;
    if (alignment) filled++;
    if (speakerName) filled++;
    if (speakerEmail) filled++;
    if (speakerPhone) filled++;
    if (speakerTitle) filled++;
    if (speakerBio) filled++;
    if (experience) filled++;
    if (speakingExp) filled++;
    // if (presentationLink) filled++;

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
          className="relative min-h-[85vh] overflow-hidden bg-page"
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

          <div className="relative z-10 min-h-[85vh] flex flex-col justify-end pb-20 md:pb-28 px-6 pt-[120px]">
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
                Call for Speakers
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
                <p className="font-sans text-base text-white/70 leading-relaxed">
                  Across the{" "}
                  <strong className="text-white">Leadership Summit</strong> and{" "}
                  <strong className="text-white">Rising Leaders Forum</strong>,
                  we are curating talks that go beyond inspiration and reveal
                  the actual work: the decisions, trade-offs, experiments,
                  failures, and outcomes that show what could possibly go right
                  when design leads.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-brand/10 border-l-4 border-brand p-5 py-8 rounded-r-xl mt-8 max-w-3xl"
              >
                <p className="font-sans text-sm text-white/90 leading-relaxed mb-6">
                  <strong className="text-brand">Who should apply:</strong>{" "}
                  Design leaders, product/tech leaders championing UX,
                  entrepreneurs building design-led ventures, and social
                  innovators using design for meaningful change.{" "}
                  <strong className="text-white">
                    You do not need a formal leadership title
                  </strong>{" "}
                  — we seek people who step up, align others, and lead change
                  through concrete work.
                </p>

                <Link
                  href="/speaker-faqs"
                  target="_blank"
                  className="font-sans text-sm font-semibold px-6 py-2 rounded-full text-white transition-opacity hover:opacity-85 text-center"
                  style={{ backgroundColor: "#E85520" }}
                >
                  Read Speaker FAQs
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
              >
                <InfoCard label="Submissions Open" value="24 April 2026" />
                <InfoCard label="Submission Deadline" value="31 May 2026" />
                <InfoCard label="Event Dates" value="23-27 Sept 2026" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24" id="form-section">
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
                    {/* Section 1: Track Selection */}
                    <FormSection
                      sectionId="track-section"
                      number="01"
                      title="Choose Your Track"
                      description="Select which conference track best fits your experience level and target audience."
                    >
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl mb-6">
                        <p className="font-sans text-sm text-blue-800">
                          <strong>Note:</strong> Our curation committee may
                          place your talk where it will create the most value,
                          which may be different from the track you select
                          initially.
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

                    {/* Section 2: Session Format */}
                    <FormSection
                      sectionId="format-section"
                      number="02"
                      title="Session Format"
                      description="Select the format that best suits your content and presentation style."
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <OptionCard
                          name="format"
                          id="format-grand-keynote"
                          value="grand-keynote"
                          title="Grand Keynote"
                          duration="40 min"
                          description="Major ballroom keynotes for Day 1 of Leadership Summit. High-level strategic vision framing the theme."
                          selected={format === "grand-keynote"}
                          // onChange={setFormat}
                          onChange={(value) => {
                            clearError("format");
                            setFormat(value);
                          }}
                          fieldName="format"
                          error={errors.format}
                        />
                        <OptionCard
                          name="format"
                          id="format-plenary"
                          value="plenary"
                          title="Plenary Session"
                          duration="30 min"
                          description="Full-audience sessions for Leadership Summit Day 1. Strategic frameworks and organizational insights."
                          selected={format === "plenary"}
                          onChange={(value) => {
                            clearError("format");
                            setFormat(value);
                          }}
                          fieldName="format"
                          error={errors.format}
                        />
                        <OptionCard
                          name="format"
                          id="format-deep-dive"
                          value="deep-dive"
                          title="Deep Dive Talk"
                          duration="30 min"
                          description="In-depth explorations with substantial, accessible content for mixed professional and student audiences."
                          selected={format === "deep-dive"}
                          onChange={(value) => {
                            clearError("format");
                            setFormat(value);
                          }}
                          fieldName="format"
                          error={errors.format}
                        />
                        <OptionCard
                          name="format"
                          id="format-spark"
                          value="spark"
                          title="Spark Session"
                          duration="18 min"
                          description="High-energy, focused talks with strong teaching value. Quick insights with audience interaction."
                          selected={format === "spark"}
                          onChange={(value) => {
                            clearError("format");
                            setFormat(value);
                          }}
                          fieldName="format"
                          error={errors.format}
                        />
                        <OptionCard
                          name="format"
                          id="format-panel"
                          value="panel"
                          title="Panel Discussion"
                          duration="40-60 min"
                          description="Moderated dialogue with multiple perspectives on a focused topic. Requires coordination with other panelists."
                          selected={format === "panel"}
                          onChange={(value) => {
                            clearError("format");
                            setFormat(value);
                          }}
                          fieldName="format"
                          error={errors.format}
                        />
                        <OptionCard
                          name="format"
                          id="format-workshop"
                          value="workshop"
                          title="Workshop / Masterclass"
                          duration="2.5-3 hours"
                          description="Hands-on sessions with advanced skills, strategic tools, frameworks. Day 3 Leadership Summit or Day 2 Rising Leaders."
                          selected={format === "workshop"}
                          onChange={(value) => {
                            clearError("format");
                            setFormat(value);
                          }}
                          fieldName="format"
                          error={errors.format}
                        />
                      </div>
                      {errors.format && (
                        <p className="font-sans text-sm text-red-500 mt-3">
                          {errors.format}
                        </p>
                      )}
                    </FormSection>

                    {/* Section 3: Category */}
                    <FormSection
                      sectionId="category-section"
                      number="03"
                      title="Submission Category"
                      description="Choose the primary category that best fits your story. Leadership is the common thread in all categories."
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <OptionCard
                          name="category"
                          id="cat-practice"
                          value="design-practice"
                          title="Design Practice"
                          description="Reimagining, accelerating, or disrupting design practice. Design ops, collaboration models, AI response, upskilling."
                          selected={category === "design-practice"}
                          // onChange={setCategory}
                          onChange={(value) => {
                            clearError("category");
                            setCategory(value);
                          }}
                          fieldName="category"
                          error={errors.category}
                        />
                        <OptionCard
                          name="category"
                          id="cat-entrepreneurship"
                          value="entrepreneurship"
                          title="Entrepreneurship"
                          description="Design-first approach to building ventures. Product-market fit, pivots, culture, funding journeys."
                          selected={category === "entrepreneurship"}
                          onChange={(value) => {
                            clearError("category");
                            setCategory(value);
                          }}
                          fieldName="category"
                          error={errors.category}
                        />
                        <OptionCard
                          name="category"
                          id="cat-ai"
                          value="emerging-tech"
                          title="Emerging Tech – AI & Future-Forward"
                          description="Real work with AI and future-forward tech. AI-upskilled teams, collaboration shifts, governance, lived experience."
                          selected={category === "emerging-tech"}
                          onChange={(value) => {
                            clearError("category");
                            setCategory(value);
                          }}
                          fieldName="category"
                          error={errors.category}
                        />
                        <OptionCard
                          name="category"
                          id="cat-social"
                          value="social-impact"
                          title="Social Impact"
                          description="Design for social good. Public services, health, education, climate, participatory approaches, sustainable models."
                          selected={category === "social-impact"}
                          onChange={(value) => {
                            clearError("category");
                            setCategory(value);
                          }}
                          fieldName="category"
                          error={errors.category}
                        />
                      </div>
                      {errors.category && (
                        <p className="font-sans text-sm text-red-500 mt-3">
                          {errors.category}
                        </p>
                      )}
                    </FormSection>

                    {/* Section 4: Talk Details */}
                    <FormSection
                      sectionId="talk-section"
                      number="04"
                      title="Talk Details"
                      description="Tell us about your session. Be specific, honest, and aligned with our theme."
                    >
                      <FormInput
                        label="Talk Title"
                        hint="Keep it concise, compelling, and clear. Maximum 100 characters."
                        required
                        maxLength={100}
                        value={talkTitle}
                        onChange={setTalkTitle}
                        showCounter
                        error={errors.talkTitle}
                        clearError={clearError}
                        fieldName="talkTitle"
                      />
                      <FormTextarea
                        label="Abstract"
                        hint="This will appear in the conference program. Write 350-500 characters that capture your key insight and what attendees will take away. Focus on outcomes, not just topics."
                        required
                        maxLength={500}
                        minLength={350}
                        value={talkAbstract}
                        onChange={setTalkAbstract}
                        rows={4}
                        error={errors.talkAbstract}
                        clearError={clearError}
                        fieldName="talkAbstract"
                      />
                      <FormTextarea
                        label="Detailed Description (Private)"
                        hint="For organizers only. Explain the story arc, key decisions, trade-offs, and concrete learnings. Include challenges and what you'd do differently. Be honest, not promotional. 500-1000 characters."
                        required
                        maxLength={1000}
                        minLength={500}
                        value={talkDescription}
                        onChange={setTalkDescription}
                        rows={6}
                        error={errors.talkDescription}
                        clearError={clearError}
                        fieldName="talkDescription"
                      />
                      <FormTextarea
                        label="Key Takeaways"
                        hint="List 3-5 specific, actionable takeaways. What will attendees be able to do or think differently after your session?"
                        required
                        placeholder={"1. \n2. \n3. "}
                        value={learningOutcomes}
                        onChange={setLearningOutcomes}
                        rows={5}
                        error={errors.learningOutcomes}
                        clearError={clearError}
                        fieldName="learningOutcomes"
                      />
                      <FormTextarea
                        label="Alignment with Theme"
                        hint={`How does your talk connect to "Designing What Could Possibly Go Right"? Be specific about the connection.`}
                        required
                        maxLength={500}
                        value={alignment}
                        onChange={setAlignment}
                        rows={4}
                        error={errors.alignment}
                        clearError={clearError}
                        fieldName="alignment"
                      />
                    </FormSection>

                    {/* Section 5: Speaker Information */}
                    <FormSection
                      sectionId="speaker-section"
                      number="05"
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
                            onChange={(e) => setSpeakerPhone(e.target.value)}
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

                    {/* Section 6: Experience & Context */}
                    <FormSection
                      sectionId="experience-section"
                      number="06"
                      title="Experience & Context"
                      description="Help us understand your background and speaking experience."
                    >
                      <div className="mb-8">
                        <label className="block font-sans font-medium text-page mb-4">
                          Years of Professional Experience{" "}
                          <span className="text-brand">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                          {[
                            {
                              id: "exp-student",
                              value: "student",
                              label: "Student",
                              desc: "Currently pursuing degree",
                            },
                            {
                              id: "exp-0-3",
                              value: "0-3",
                              label: "0-3 Years",
                              desc: "Early career",
                            },
                            {
                              id: "exp-4-7",
                              value: "4-7",
                              label: "4-7 Years",
                              desc: "Mid-career",
                            },
                            {
                              id: "exp-8-12",
                              value: "8-12",
                              label: "8-12 Years",
                              desc: "Senior professional",
                            },
                            {
                              id: "exp-13plus",
                              value: "13+",
                              label: "13+ Years",
                              desc: "Executive / C-level",
                            },
                          ].map((opt) => (
                            <label
                              data-field="experience"
                              key={opt.id}
                              htmlFor={opt.id}
                              className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center ${
                                experience === opt.value
                                  ? "border-brand bg-brand/5"
                                  : "border-page/10 hover:border-brand/50 bg-white"
                              }`}
                            >
                              <input
                                type="radio"
                                name="experience"
                                id={opt.id}
                                value={opt.value}
                                checked={experience === opt.value}
                                onChange={() => setExperience(opt.value)}
                                className="sr-only"
                              />
                              <span className="font-sans font-semibold text-sm text-page block">
                                {opt.label}
                              </span>
                              <span className="font-sans text-xs text-page/50">
                                {opt.desc}
                              </span>
                            </label>
                          ))}
                        </div>
                        {errors.experience && (
                          <p className="font-sans text-sm text-red-500 mt-3">
                            {errors.experience}
                          </p>
                        )}
                      </div>

                      <div className="mb-8">
                        <label className="block font-sans font-medium text-page mb-4">
                          Speaking Experience{" "}
                          <span className="text-brand">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <OptionCard
                            name="speaking-exp"
                            id="speak-none"
                            value="none"
                            title="First-Time Speaker"
                            description="This would be my first conference talk"
                            selected={speakingExp === "none"}
                            // onChange={setSpeakingExp}
                            onChange={(value) => {
                              clearError("speakingExp");
                              setSpeakingExp(value);
                            }}
                            fieldName="speakingExp"
                            error={errors.speakingExp}
                          />
                          <OptionCard
                            name="speaking-exp"
                            id="speak-some"
                            value="some"
                            title="Some Experience"
                            description="1-5 conference talks"
                            selected={speakingExp === "some"}
                            onChange={(value) => {
                              clearError("speakingExp");
                              setSpeakingExp(value);
                            }}
                            fieldName="speakingExp"
                            error={errors.speakingExp}
                          />
                          <OptionCard
                            name="speaking-exp"
                            id="speak-experienced"
                            value="experienced"
                            title="Experienced Speaker"
                            description="6+ conference talks"
                            selected={speakingExp === "experienced"}
                            onChange={(value) => {
                              clearError("speakingExp");
                              setSpeakingExp(value);
                            }}
                            fieldName="speakingExp"
                            error={errors.speakingExp}
                          />
                        </div>
                        {errors.speakingExp && (
                          <p className="font-sans text-sm text-red-500 mt-3">
                            {errors.speakingExp}
                          </p>
                        )}
                      </div>

                      <FormTextarea
                        label="Previous Speaking Engagements"
                        hint="List notable conferences or events where you've spoken (optional but helpful for selection)"
                        placeholder={
                          "e.g., \n• UXINDIA 2024 - 'Building Design Systems at Scale'\n• Config 2023 - Workshop on Design Tokens"
                        }
                        value={pastTalks}
                        onChange={setPastTalks}
                        clearError={clearError}
                        rows={4}
                      />
                      <FormInput
                        label="Talk Presentation / Deck URL"
                        hint="Link to Google Slides, PDF, or any hosted presentation (optional but recommended)"
                        placeholder="https://"
                        value={presentationLink}
                        onChange={setPresentationLink}
                        error={errors.presentationLink}
                        clearError={clearError}
                        fieldName="presentationLink"
                      />
                      <FormInput
                        label="Sample Talk Recording"
                        hint="Link to YouTube, Vimeo, or similar (optional but strongly encouraged)"
                        placeholder="https://"
                        value={recordingLink}
                        onChange={setRecordingLink}
                        clearError={clearError}
                      />
                    </FormSection>

                    {/* Section 7: Additional Details */}
                    <FormSection
                      sectionId="additional-section"
                      number="07"
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

                    {/* Section 8: Confirmations */}
                    <FormSection
                      sectionId="confirmations-section"
                      number="08"
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
                          description="I am available for UXINDIA 2026 on 23, 24, 25, 26 & 27 Sept 2026 and will honor my commitment if selected."
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

                    {/* Section 9: Additional Notes */}
                    <FormSection
                      number="09"
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
                        Submit Your Proposal
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
                  Thank you for your submission
                </h2>
                <p className="font-sans text-lg text-page/70 mb-8 max-w-md mx-auto">
                  We appreciate you taking the time to share your proposal.
                  We&apos;ll get back to you with our next steps.
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
                    Submit Another Proposal
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
