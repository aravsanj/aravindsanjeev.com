import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const ACCENT = "#B6FF1A";
const PRIMARY = "#E6FFD8";
const SECONDARY = "#8A9A78";
const BACKGROUND = "#08090A";
const BORDER = "#1a2410";
const SURFACE = "#0F1410";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.isDraft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
};

function el(
  type: string,
  style: Record<string, string | number>,
  children: unknown,
) {
  return { type, props: { style, children } };
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props;
  const { title, coverText, summary, tags } = post.data;

  const fontData = readFileSync(
    resolve(
      "./node_modules/@fontsource/chakra-petch/files/chakra-petch-latin-700-normal.woff",
    ),
  );

  const displayText = coverText || summary || "";
  const tag = tags?.[0]?.toUpperCase() || "";
  const titleFontSize = title.length > 60 ? 50 : title.length > 40 ? 60 : 72;

  const svg = await satori(
    el(
      "div",
      {
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "630px",
        backgroundColor: BACKGROUND,
        padding: "56px 64px",
        fontFamily: '"Chakra Petch"',
        position: "relative",
      },
      [
        // Top bar
        el(
          "div",
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "44px",
          },
          [
            el(
              "span",
              { color: SECONDARY, fontSize: "15px", letterSpacing: "0.12em" },
              "> aravindsanjeev.com",
            ),
            tag
              ? el(
                  "div",
                  {
                    display: "flex",
                    color: ACCENT,
                    fontSize: "12px",
                    border: `1px solid ${ACCENT}`,
                    padding: "4px 14px",
                    letterSpacing: "0.14em",
                    backgroundColor: "#B6FF1A18",
                  },
                  tag,
                )
              : el("span", { color: "transparent", fontSize: "12px" }, "·"),
          ],
        ),
        // Cover text line
        el(
          "div",
          {
            display: "flex",
            color: ACCENT,
            fontSize: "17px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "18px",
            maxWidth: "960px",
          },
          displayText.length > 88
            ? displayText.slice(0, 88) + "..."
            : displayText,
        ),
        // Title
        el(
          "div",
          {
            display: "flex",
            color: PRIMARY,
            fontSize: `${titleFontSize}px`,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: "1.08",
            flex: "1",
            maxWidth: "1040px",
            alignItems: "flex-start",
          },
          title,
        ),
        // Bottom bar
        el(
          "div",
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "20px",
          },
          [
            el(
              "div",
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              },
              [
                el(
                  "div",
                  {
                    display: "flex",
                    width: "8px",
                    height: "8px",
                    backgroundColor: ACCENT,
                    borderRadius: "50%",
                  },
                  "",
                ),
                el(
                  "span",
                  {
                    color: PRIMARY,
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  },
                  "ARAVIND SANJEEV",
                ),
              ],
            ),
            el(
              "div",
              {
                display: "flex",
                color: SECONDARY,
                fontSize: "12px",
                letterSpacing: "0.08em",
                backgroundColor: SURFACE,
                padding: "4px 12px",
                border: `1px solid ${BORDER}`,
              },
              "AI STACK ENGINEER",
            ),
          ],
        ),
      ],
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Chakra Petch",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
