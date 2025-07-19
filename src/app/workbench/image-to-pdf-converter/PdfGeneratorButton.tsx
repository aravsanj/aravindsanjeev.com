import { PDFDocument } from "pdf-lib";
import { UploadedImage } from "./FilePondUploader";

interface PdfGeneratorButtonProps {
  images: UploadedImage[];
}

export default function PdfGeneratorButton({
  images,
}: PdfGeneratorButtonProps) {
  const generatePDF = async () => {
    if (images.length === 0) return;

    const pdfDoc = await PDFDocument.create();

    for (const img of images) {
      const imgBytes = await fetch(img.dataUrl).then((res) =>
        res.arrayBuffer(),
      );
      const isPng = img.name.toLowerCase().endsWith(".png");
      const embeddedImg = isPng
        ? await pdfDoc.embedPng(imgBytes)
        : await pdfDoc.embedJpg(imgBytes);

      const { width, height } = embeddedImg.scale(1);
      const page = pdfDoc.addPage([width, height]);
      page.drawImage(embeddedImg, {
        x: 0,
        y: 0,
        width,
        height,
      });
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "converted.pdf";
    link.click();
  };

  const isDisabled = images.length === 0;

  return (
    <button
      onClick={generatePDF}
      disabled={isDisabled}
      className={`px-4 py-2 rounded text-white transition-colors ${
        isDisabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      Generate PDF
    </button>
  );
}
