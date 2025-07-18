import { useState } from "react";
import { highlight } from "sugar-high";

export default function CodeBlock({
  title,
  content,
  language,
}: {
  title: string;
  content: string;
  language: "js" | "css" | "json";
}) {
  const [copied, setCopied] = useState(false);
  const highlightedHTML = highlight(content);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-zinc-900 text-white rounded-xl p-4 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{title}</span>
        <button
          onClick={handleCopy}
          className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre
        className="overflow-x-auto text-sm font-mono leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlightedHTML }}
      />
    </div>
  );
}
