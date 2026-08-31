export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cxoDinnerRsvpSchema } from "@/lib/validation/cxo-dinner";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = cxoDinnerRsvpSchema.safeParse(body);

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

    const submission = await prisma.cxoDinnerRSVP.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        workEmail: data.workEmail.toLowerCase(),
        phone: data.phone,

        company: data.company || null,
        designation: data.designation || null,

        message: data.message || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: submission,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CXO Dinner RSVP API Error:", error);

    return NextResponse.json(
      {
        success: false,
        errors: [
          {
            path: [],
            message: "Something went wrong. Please try again.",
          },
        ],
      },
      { status: 500 },
    );
  }
}
