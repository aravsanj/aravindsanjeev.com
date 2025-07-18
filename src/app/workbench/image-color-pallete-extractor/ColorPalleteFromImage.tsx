"use client";
import { useEffect, useRef, useState } from "react";
import { Vibrant } from "node-vibrant/browser";
import { FiUploadCloud, FiGift } from "react-icons/fi";
import CodeBlock from "./CodeBlock";
import {
  generateCSSVariables,
  generateJSON,
  generateTailwindConfig,
} from "./utils";

export default function ColorPaletteUploader() {
  const [imageUrl, setImageUrl] = useState<string | null>("/assets/panda.png");
  const [colors, setColors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [imageSource, setImageSource] = useState<string>(" panda.png");

  const dropRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setColors([]);
    setImageSource(`📁 File: ${file.name}`);
  };

  const extractColors = async (url: string) => {
    setLoading(true);
    try {
      const palette = await Vibrant.from(url).getPalette();
      const extracted = Object.values(palette)
        .filter(Boolean)
        .map((swatch) => swatch!.hex);
      setColors(extracted);
    } catch (err) {
      console.error("Error extracting palette", err);
    }
    setLoading(false);
  };

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  useEffect(() => {
    if (imageUrl) {
      extractColors(imageUrl);
    }
  }, [imageUrl]);

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.indexOf("image") !== -1) {
          const blob = item.getAsFile();
          if (blob) {
            const url = URL.createObjectURL(blob);
            setImageUrl(url);
            setColors([]);
            setImageSource("📋 Pasted Image");
            if (fileInputRef.current) fileInputRef.current.value = "";
          }
        }
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-center flex items-center justify-center gap-2">
        <FiUploadCloud className="text-blue-500 text-2xl" />
        Upload Image to Extract Color Palette
      </h1>

      <div className="flex justify-center gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Paste image URL..."
          onBlur={(e) => {
            const inputUrl = e.target.value.trim();
            if (!inputUrl) return;

            const img = new Image();
            img.onload = () => {
              setImageUrl(inputUrl);
              setColors([]);
              setImageSource(`🌐 URL: ${inputUrl}`);
              if (fileInputRef.current) fileInputRef.current.value = "";
            };
            img.onerror = () => {
              alert(
                "Failed to load image. The URL might not point to an actual image.",
              );
            };
            img.crossOrigin = "anonymous";
            img.src = inputUrl;
          }}
          className="border rounded-lg px-4 py-2 w-full max-w-xs"
        />
      </div>

      <div
        ref={dropRef}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            setColors([]);
            setImageSource(`📁 File: ${file.name}`);
            if (fileInputRef.current) fileInputRef.current.value = "";
          }
        }}
        className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center transition-colors hover:border-blue-400"
      >
        <p className="text-sm text-neutral-500 mb-4">
          Drag & drop image here, paste from clipboard, or upload
        </p>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ring text-black cursor-pointer transition-colors hover:bg-ring/80"
            >
              <FiUploadCloud className="w-5 h-5" />
              Upload Image
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />

            {imageSource && (
              <p className="text-sm text-neutral-600 truncate max-w-xs">
                {imageSource}
              </p>
            )}
          </div>
        </div>
      </div>

      {imageUrl && (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={imageUrl}
            alt="Uploaded Preview"
            width={400}
            height={300}
            className="rounded-xl object-cover max-h-[300px]"
          />

          {loading ? (
            <p>Extracting colors...</p>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center">
              {colors.map((color, i) => (
                <div
                  key={i}
                  onClick={() => handleCopy(color)}
                  className="w-20 h-20 rounded-xl border shadow-md cursor-pointer flex flex-col items-center justify-center text-sm font-mono transition-transform hover:scale-105"
                  style={{
                    backgroundColor: color,
                    color: getContrastYIQ(color),
                  }}
                  title="Click to copy"
                >
                  {copiedHex === color ? "Copied!" : color}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {colors.length > 0 && !loading && (
        <div className="w-full space-y-6 mt-8">
          <h2 className="text-xl font-medium text-center flex items-center justify-center gap-2">
            <FiGift className="text-pink-500 text-xl" />
            Copy-Paste Ready Code
          </h2>

          <CodeBlock
            title="Tailwind Config"
            content={generateTailwindConfig(colors)}
            language="js"
          />

          <CodeBlock
            title="CSS Variables"
            content={generateCSSVariables(colors)}
            language="css"
          />

          <CodeBlock
            title="JSON"
            content={generateJSON(colors)}
            language="json"
          />
        </div>
      )}
    </div>
  );
}

function getContrastYIQ(hex: string): "black" | "white" {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}
