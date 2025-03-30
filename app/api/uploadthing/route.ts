import { createUploadthing, type FileRouter } from "uploadthing/next";
import { NextResponse } from "next/server";

const f = createUploadthing();

export const ourFileRouter = {
  documentUploader: f({ pdf: { maxFileSize: "4MB" }, image: { maxFileSize: "2MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("File uploaded:", file.url);
      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
