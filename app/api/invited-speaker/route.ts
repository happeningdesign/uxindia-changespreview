export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { invitedSpeakerSchema } from "@/lib/validation/invited-speaker";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = invitedSpeakerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.issues.map((issue) => ({
            path: issue.path,
            message: issue.message,
          })),
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    const submission = await prisma.invitedSpeakerSubmission.create({
      data: {
        speakerName: data.speakerName,
        speakerEmail: data.speakerEmail,
        countryCode: data.countryCode,
        speakerPhone: data.speakerPhone,

        speakerTitle: data.speakerTitle,
        speakerBio: data.speakerBio,

        speakerPhotoUrl: data.speakerPhotoUrl,
        speakerLinkedin: data.speakerLinkedin,
        speakerWebsite: data.speakerWebsite,
        speakerTwitter: data.speakerTwitter ?? null,

        track: data.track ?? null,

        formats: data.formats,
        sessions: data.sessions,

        specialRequirements: data.specialRequirements ?? null,
        attendeeMaterials: data.attendeeMaterials ?? null,

        confirmOriginal: data.confirmOriginal,
        confirmNonPromotional: data.confirmNonPromotional,
        confirmAvailable: data.confirmAvailable,
        confirmIteration: data.confirmIteration,
        confirmRecording: data.confirmRecording,
        confirmCoc: data.confirmCoc,

        additionalNotes: data.additionalNotes ?? null,
      },
    });

    return NextResponse.json({
      success: true,
      data: submission,
    });
  } catch (error) {
    console.error("Invited Speaker API Error:", error);

    return NextResponse.json(
      {
        success: false,
        errors: ["Internal server error"],
      },
      { status: 500 },
    );
  }
}
