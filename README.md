# Sohan Kathari portfolio

Next.js App Router, TypeScript, Tailwind CSS. Deploy to Vercel by importing this repository; use the default Next.js build settings.

## Run locally

`npm install` then `npm run dev`. Open http://localhost:3000.

Checks: `npm run lint`, `npm run typecheck`, `npm run build`.

## Update content

All project content lives in `lib/content.ts`:
- `projects[].image`: set `{src:'/images/speaksmart.webp', alt:'Descriptive image text'}` and put the image in `public/images/`. It replaces the labeled illustration on both homepage and case study.
- `projects[].links`: add verified `{label:'Demo',url:'https://...'}` entries for demos, code, App Store, or product links.
- `projects[].summary`, `metric`, `role`, `dates`, `technologies`, `problem`, `built`, `result`: edit case-study and card copy.
- `moreProjects[].url`: verified optional links, including Tonal's demo.
- `profile.resume`: add a phone-free PDF at `public/resume.pdf` and set this field to `'/resume.pdf'`. Both résumé links then appear.
- `profile.github`: optional verified GitHub profile URL.

Content is verified against the supplied résumé and approved prompt. The public résumé is public/resume.pdf, with the phone number permanently redacted and its email link corrected. Original project assets were not supplied. No phone number is included. Illustrations are conceptual, not product screenshots or measured data. No internal team assets are published.

## Verification

Production build, ESLint, and TypeScript checks pass. Homepage, all four case studies, and résumé return HTTP 200. Homepage anchors and supplied contact hrefs were checked. Browser automation failed during this session, so desktop/mobile visual QA and interactive keyboard checks remain to be completed. Responsive styles include a wrapped narrow-screen navigation. No external profile availability claim is made.

Set NEXT_PUBLIC_SITE_URL to your canonical production URL for social share images. On Vercel, the production domain environment variable is used automatically when available.
