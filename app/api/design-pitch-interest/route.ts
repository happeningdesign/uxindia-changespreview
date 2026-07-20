export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { designPitchInterestSchema } from "@/lib/validation/design-pitch-interest";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = designPitchInterestSchema.safeParse(body);

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

    const submission = await prisma.designPitchProspect.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(),
        phone: data.phone,
        organization: data.organization,
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
    console.error("Design Pitch Interest API Error:", error);

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
              message: "You've already submitted your interest.",
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
