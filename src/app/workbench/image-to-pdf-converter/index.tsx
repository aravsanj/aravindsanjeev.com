"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FaFilePdf, FaShieldAlt } from "react-icons/fa";
import { UploadedImage } from "./FilePondUploader";
import PdfGeneratorButton from "./PdfGeneratorButton";
const FilePondUploader = dynamic(() => import("./FilePondUploader"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-8">
      <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
      <span>Loading uploader...</span>
    </div>
  ),
});

export default function ImageToPdfConverter() {
  const [images, setImages] = useState<UploadedImage[]>([]);

  return (
    <main>
      <div className=" max-w-2xl flex flex-col gap-6 justify-center mx-auto p-6 space-y-6 mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <FaFilePdf className="text-red-600" />
          Convert Images to PDF
        </h1>

        <div className="text-center text-balance text-muted-foreground flex items-center justify-center gap-2">
          <FaShieldAlt className="text-green-600" />
          <span className="max-w-[240px] sm:max-w-none text-sm sm:text-base">
            Fast, private, and entirely in your browser — no uploads, no
            tracking.
          </span>
        </div>

        <FilePondUploader onImagesChange={setImages} />
        <PdfGeneratorButton images={images} />
      </div>
    </main>
  );
}
