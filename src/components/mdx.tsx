import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React, { ReactNode } from "react";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function Callout({
  type = "note",
  children,
}: {
  type?: "note" | "tip" | "important" | "warning" | "caution";
  children: ReactNode;
}) {
  const baseStyles = "rounded-md p-4 border-l-4 my-4";

  const variants: Record<string, string> = {
    note: "bg-blue-50 border-blue-500 text-blue-900",
    tip: "bg-green-50 border-green-500 text-green-900",
    important: "bg-purple-50 border-purple-500 text-purple-900",
    warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
    caution: "bg-red-50 border-red-500 text-red-900",
  };

  const icons: Record<string, string> = {
    note: "ℹ️",
    tip: "💡",
    important: "📌",
    warning: "⚠️",
    caution: "🚫",
  };

  return (
    <div className={`${baseStyles} ${variants[type] || variants.note}`}>
      <div className="font-semibold mb-2 flex items-center gap-2">
        <span>{icons[type]}</span>
        <span className="capitalize">{type}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Callout,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
