/*
  Warnings:

  - Added the required column `presentationLink` to the `SpeakerSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SpeakerSubmission" ADD COLUMN     "presentationLink" TEXT NOT NULL;
