export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { speakerSchema } from "@/lib/validation/speaker";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Zod validation
    const parsed = speakerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // ✅ Create DB entry using validated + transformed data
    const submission = await prisma.speakerSubmission.create({
      data: {
        track: data.track,
        format: data.format,
        category: data.category,

        talkTitle: data.talkTitle,
        talkAbstract: data.talkAbstract,
        talkDescription: data.talkDescription,
        learningOutcomes: data.learningOutcomes,
        alignment: data.alignment,

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

        experience: data.experience,
        speakingExp: data.speakingExp,
        pastTalks: data.pastTalks ?? null,
        presentationLink: data.presentationLink,
        recordingLink: data.recordingLink,

        specialRequirements: data.specialRequirements ?? null,
        attendeeMaterials: data.attendeeMaterials ?? null,
        additionalNotes: data.additionalNotes ?? null,

        confirmOriginal: data.confirmOriginal,
        confirmNonPromotional: data.confirmNonPromotional,
        confirmAvailable: data.confirmAvailable,
        confirmIteration: data.confirmIteration,
        confirmRecording: data.confirmRecording,
        confirmCoc: data.confirmCoc,
      },
    });

    return NextResponse.json({
      success: true,
      data: submission,
    });
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { success: false, errors: ["Internal server error"] },
      { status: 500 },
    );
  }
}
