// components/SEO.jsx
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Anjali — Frontend Developer",
  description = "A showcase of my React & Tailwind projects.",
  url = "https://my-portfolio-three-gules-95.vercel.app/",
  image = "https://my-portfolio-three-gules-95.vercel.app//og-image.png"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (LinkedIn, Slack, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter (if they share link) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon / Branding */}
      <link rel="icon" href="/favicon.png" />
    </Helmet>
  );
}
