Fullstacktics – Deployment + Content Roadmap

Objectives
- Migrate from Vercel to Cloudflare Workers using @opennextjs/cloudflare + Wrangler.
- Replace Vercel-specific pieces; ensure smooth local dev and CI/CD.
- Add technology logos/icons site‑wide (badges, services, hero).
- Refine the blog system and publish concrete case studies from client work.
- Update copy to reflect client/agency engagements (“Client Experience”).

Phase 1 — Cloudflare Migration (OpenNext)
1) Add dependencies and scripts
- Install: @opennextjs/cloudflare@latest (dep), wrangler@latest (devDep)
- package.json scripts (already added):
  - build: next build
  - preview: opennextjs-cloudflare build && opennextjs-cloudflare preview
  - deploy: opennextjs-cloudflare build && opennextjs-cloudflare deploy
  - upload: opennextjs-cloudflare build && opennextjs-cloudflare upload
  - cf-typegen: wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts

2) Wrangler config
- wrangler.jsonc (already added) with:
  - main: .open-next/worker.js
  - compatibility_date: 2024‑09‑23 or later (we set 2025‑10‑29)
  - compatibility_flags: ["nodejs_compat", "global_fetch_strictly_public"]
  - assets.directory: .open-next/assets, assets.binding: ASSETS
  - services: [{ binding: WORKER_SELF_REFERENCE, service: "fullstacktics" }]
  - Optional: r2_buckets for ISR cache (NEXT_INC_CACHE_R2_BUCKET)

3) OpenNext config
- Optional file at project root: open-next.config.ts
  Example:
  import { defineCloudflareConfig } from "@opennextjs/cloudflare"
  import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache"
  export default defineCloudflareConfig({ incrementalCache: r2IncrementalCache })

4) Local-only env for dev
- .dev.vars (already added): NEXTJS_ENV=development

5) Next.js dev integration
- Update next.config.mjs to call initOpenNextCloudflareForDev so next dev can use bindings:
  import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"
  initOpenNextCloudflareForDev()

6) Static assets caching
- public/_headers (already added):
  /_next/static/*
    Cache-Control: public,max-age=31536000,immutable

7) Git hygiene
- .gitignore now includes .open-next (already added)

8) Remove unsupported Edge runtime flags
- Remove lines: export const runtime = 'edge' from these files:
  - src/app/opengraph-image.tsx
  - src/app/services/opengraph-image.tsx
  - src/app/services/[id]/opengraph-image.tsx

9) Remove Vercel-specific dependencies/usages
- Remove @vercel/analytics from package.json and any imports if present.

10) Deploy
- First-time auth: npx wrangler login
- Preview locally in Workers runtime: npm run preview
- Deploy to Workers: npm run deploy
- Optionally configure CI/CD via Cloudflare (connect repo; build command will run OpenNext wrapper)

11) Optional caching with R2 (recommended)
- Create an R2 bucket and binding named NEXT_INC_CACHE_R2_BUCKET in wrangler.jsonc
- Ensure open-next.config.ts uses r2IncrementalCache override
- Verify ISR/regeneration paths and tag revalidation work as expected

Phase 2 — Technology Logos/Icons
1) TechBadge component enhancement
- Add optional icon rendering based on tech name; place icons under public/tech/*.svg|png
- Map common names to icons (Next.js, React, TypeScript, Tailwind, Cloudflare, Wrangler, OpenNext, Go, FastAPI, Postgres, n8n, Make, Stripe, Clerk, etc.)
- Fallback to text if icon missing.

2) Services cards and details
- src/lib/services-data.tsx:
  - Replace "Vercel" in technologies with "Cloudflare Workers", "Wrangler", "OpenNext" for Next.js offering.
  - Ensure imageUrl points to correct icon (e.g., /tech/nextjs.svg, /tech/cloudflare.svg, /tech/wrangler.svg)
- src/app/services/page.tsx and [id]/page.tsx already support service.imageUrl; ensure proper invert for dark logos.

3) Hero badges
- src/components/Hero.tsx: update tech badges to show icons alongside PyTorch, Next.js, Go, FastAPI, vLLM, Postgres.

Phase 3 — Blog Refinement + Case Studies
1) Blog system
- Current index (src/app/blog/page.tsx) reads MDX pages and companion f.md JSON. Keep structure; ensure sorting by date is correct.
- Add a category for “Client Experience” if desired; otherwise include in general blog list.

2) New posts to write (one MDX + f.md each)
- vidsave.app — AI/automation SaaS from 0 → MVP in ~3 months
  - Focus: full-stack build, infra, payments, metrics/outcomes
- Amazon Seller Central automation — pipeline integrating scraping + actions
  - Focus: reliability, retries, anti-bot, monitoring
- Amazon scraper — high-scale web data ingestion (>50k pages/day, <3% errors)
  - Focus: concurrency, Playwright/proxies, storage, QA
- Quora automation — content operations & posting workflows
  - Focus: scheduling, anti-abuse techniques, dashboards
- Twitter CAPTCHA solver — Playwright + FunCaptcha integration
  - Focus: solving flows, ethics/safeguards, outcomes
- Rockvests.com (rockvest.fullstacktics.com for now) — Real estate site (Next.js + PayloadCMS)
  - Focus: CMS, search, performance, SEO
- Baytonia (tools.baytonia.com/rendior – Rendior) — n8n pipelines and integrations
  - Focus: automation graphs, error handling, notifications

3) Content sources
- upwork.html: pull portfolio titles, dates, snippets, images from /upwork_files for screenshots.
- linkedin.pdf: use role summaries and company names for “Client Experience” context.

4) Post template (MDX)
- Title
- Summary (bullets with outcomes/metrics)
- Stack (icons + names)
- Architecture diagram or flow (optional image)
- Challenges + solutions
- Results (quantified)
- CTA (link to contact/cal)
- f.md example:
  {
    "title": "{Title}",
    "date": "2025-02-10",
    "description": "{one‑line}",
    "readingTime": "5 min read"
  }

Phase 4 — Copy and Components
1) Update phrasing to “Client Experience”
- In pages that list work history/clients, prefer “Client Experience” over “Experience” where applicable.
- src/components/PastClients.tsx:
  - Update URLs: Rockvest → rockvest.fullstacktics.com (temp)
  - Ensure logos and invert flags are correct

2) Add a minimal Case Studies landing page (optional)
- Route: /case-studies — filters by tag (e.g., automation, scraping, SaaS)

Acceptance Criteria
- Cloudflare deployment:
  - npm run preview serves the site locally in Workers runtime
  - npm run deploy successfully deploys; assets served via ASSETS binding
  - No usage of export const runtime = 'edge' remains
  - OpenNext output (.open-next) is not tracked by git
- Content/logos:
  - TechBadge shows icons for top 12 technologies; text fallback works
  - Next.js service technologies list mentions Cloudflare/Wrangler/OpenNext (not Vercel)
  - PastClients links and logos verified
- Blog/case studies:
  - At least 3 new case studies published with f.md metadata
  - Blog index shows correct dates and reading times

Execution Checklist
- [ ] Remove export const runtime = 'edge' from 3 OG image files
- [ ] Remove @vercel/analytics from package.json and lockfile, purge imports if any
- [ ] Add open-next.config.ts (if using R2 ISR), create R2 bucket binding
- [ ] Add initOpenNextCloudflareForDev() call in next.config.mjs
- [ ] Verify wrangler login / preview / deploy
- [ ] Implement TechBadge icon mapping + add missing icons in public/tech
- [ ] Update services-data.tsx technologies (Cloudflare/Wrangler/OpenNext)
- [ ] Update PastClients.tsx links/logos
- [ ] Author and add MDX posts + f.md for: vidsave, Amazon Seller Central automation, Amazon scraper, Quora automation, Twitter CAPTCHA solver, Rockvest, Rendior (Baytonia)

Commands
- Install deps: npm i
- Local Node dev: npm run dev (Next.js)
- Local Workers preview: npm run preview
- Deploy: npm run deploy
- Wrangler auth: npx wrangler login

Notes
- Use nix-shell to access binaries (e.g., poppler_utils/pdftotext) when extracting content from linkedin.pdf.
- Use images from upwork_files as post thumbnails/screens where sensible.
- Keep copy concise; emphasize measurable outcomes.
