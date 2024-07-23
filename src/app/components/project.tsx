import Image from "next/image";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export default function Project({
  title,
  description,
  imageUrl,
  tags,
}: ProjectProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image width={400} height={100} src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
