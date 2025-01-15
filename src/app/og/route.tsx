import { ImageResponse } from "next/og";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const baseUrl = url.origin;
  const title = url.searchParams.get("title") || "Sample Blog Title";
  const subtitle = url.searchParams.get("subtitle") || "Sample Blog  Sub Title";
  const author = url.searchParams.get("author") || "Author Name";
  const handle = url.searchParams.get("handle") || "@username";
  const profileUrl = url.searchParams.get("profile") || "";
  const logoUrl = url.searchParams.get("logo") || "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          color: "#101820",
          fontFamily: "Geist",
          backgroundImage: `
          linear-gradient(90deg, #f0f0f0 1px, transparent 1px),
          linear-gradient(90deg, #f0f0f0 1px, transparent 1px),
          linear-gradient(0deg, #f0f0f0 1px, transparent 1px),
          linear-gradient(0deg, #f0f0f0 1px, transparent 1px)
        `,
          backgroundSize: "20px 20px",
          backgroundPosition: "top left, top right, bottom left, bottom right",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: "#ffffff",
            width: "800px",
            gap: 20,
            padding: "20px",
            borderRadius: 20,
          }}
        >
          <h2
            style={{
              fontSize: "60px",
              fontWeight: 600,
              height: "240px",
              overflow: "hidden",
              margin: "0 0 12px 0",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src={`${baseUrl}/assets/avatar.png`}
              alt="Profile"
              width="40px"
              height="40px"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  margin: "0",
                }}
              >
                Aravind Sanjeev
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  margin: "0",
                }}
              >
                @aravsanj
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist", "hello world"),
          style: "normal",
        },
      ],
    },
  );
}
