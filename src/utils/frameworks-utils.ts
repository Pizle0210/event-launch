export const frameWorks = [
  "react",
  "vue",
  "svelte",
  "safari",
  "desktop",
  "qwik",
  "tailwind",
  "chrome",
  "mobile",
] as const;

export type Framework = (typeof frameWorks)[number]