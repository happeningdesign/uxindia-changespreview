export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { contributorsSchema } from "@/lib/validation/contributors";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contributorsSchema.safeParse(body);

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

    const submission = await prisma.contributor.create({
      data: {
        role: data.role,
        otherRole: data.otherRole,

        fullName: data.fullName,
        email: data.email.toLowerCase(),
        phone: data.phone,

        professionalTitle: data.professionalTitle,
        professionalBio: data.professionalBio,

        photoUrl: data.photoUrl || null,

        linkedin: data.linkedin || null,
        twitter: data.twitter || null,
        website: data.website || null,

        additionalNotes: data.additionalNotes || null,

        confirmInformation: data.confirmInformation,
        confirmMediaConsent: data.confirmMediaConsent,
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
    console.error("Contributor API Error:", error);

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          success: false,
          errors: [
            {
              path: ["email"],
              message: "A contributor with this email already exists.",
            },
          ],
        },
        { status: 409 },
      );
    }

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
