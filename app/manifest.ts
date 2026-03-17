import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Web Dev Interview Prep",
    short_name: "DevPrep",
    description: "Web developer interview preparation with Chinese and Burmese translations.",
    start_url: "/",
    display: "standalone",
    background_color: "#07070d",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
