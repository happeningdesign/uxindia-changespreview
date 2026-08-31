"use client";

import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  member: {
    name: string;
    designation?: string;
    company?: string;
    image: string;
    linkedin?: string;
    color?: string;
  };
  index: number;
  visible?: boolean;
  aspectRatio?: string;
}

export function TeamCard({
  member,
  index,
  visible = true,
  aspectRatio = "aspect-[5/6]",
}: TeamCardProps) {
  return (
    <div
      className={`group ${aspectRatio} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transition: `opacity .6s ease ${index * 70}ms,
                     transform .6s ease ${index * 70}ms`,
      }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#1B1B1B] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
        {/* Photo */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700"
        />

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to top,
                rgba(13,13,13,.95) 0%,
                rgba(13,13,13,.65) 25%,
                rgba(13,13,13,.1) 100%
              )
            `,
          }}
        />

        {/* Accent */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `linear-gradient(to top,
              ${member.color ?? "#E85520"}cc 0%,
              transparent 55%)`,
          }}
        />

        {/* LinkedIn */}
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md transition-all duration-300 hover:bg-[#0077B5]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433A2.064 2.064 0 1 1 5.337 3.3a2.064 2.064 0 0 1 0 4.128zM7.119 20.452H3.555V9h3.564v11.452z" />
            </svg>
          </Link>
        )}

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          {member.company && (
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2">
              {member.company}
            </p>
          )}

          <h3
            className="text-white leading-tight"
            style={{
              fontFamily: "'UXILeadershipCondensed'",
              fontWeight: 500,
              fontSize: "clamp(1.5rem,2vw,2rem)",
            }}
          >
            {member.name}
          </h3>

          <p className="font-sans text-sm text-white/85 mt-1">
            {member.designation}
          </p>
        </div>
      </div>
    </div>
  );
}
