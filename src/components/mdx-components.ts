// @ts-expect-error - Astro components cannot be properly typed in .ts files
import Link from "./mdx/Link.astro";
// @ts-expect-error - Astro components cannot be properly typed in .ts files
import Image from "./mdx/Image.astro";
// @ts-expect-error - Astro components cannot be properly typed in .ts files
import Table from "./mdx/Table.astro";
// @ts-expect-error - Astro components cannot be properly typed in .ts files
import Callout from "./mdx/Callout.astro";

// @ts-expect-error - Astro components cannot be properly typed in .ts files
import Mermaid from "./mdx/Mermaid.astro";

export const components = {
  a: Link,
  Image,
  Table,
  Callout,
  Mermaid,
};
