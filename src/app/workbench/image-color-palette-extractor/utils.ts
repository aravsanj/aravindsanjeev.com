const LABELS = [
  "primary",
  "secondary",
  "accent",
  "muted",
  "highlight",
  "surface",
];

const generateTailwindConfig = (colors: string[]) => {
  return `colors: {\n${colors
    .map((hex, i) => `  ${LABELS[i] || `custom${i}`}: "${hex}",`)
    .join("\n")}\n}`;
};

const generateCSSVariables = (colors: string[]) => {
  return `:root {\n${colors
    .map((hex, i) => `  --color-${LABELS[i] || `custom${i}`}: ${hex};`)
    .join("\n")}\n}`;
};

const generateJSON = (colors: string[]) => {
  const obj = Object.fromEntries(
    colors.map((hex, i) => [LABELS[i] || `custom${i}`, hex]),
  );
  return JSON.stringify(obj, null, 2);
};

export { generateTailwindConfig, generateCSSVariables, generateJSON };
