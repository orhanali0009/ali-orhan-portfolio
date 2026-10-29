# Ali Orhan — Personal Portfolio v3

Dark-minimal, English-language Next.js portfolio with dynamic project and writing detail pages.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Edit content

- `content/data.ts`: Edit projects, article outlines, tags, descriptions and detail sections.
- `app/page.tsx`: Edit homepage content, links and navigation.
- `app/globals.css`: Edit visual style.
- `app/projects/[slug]/page.tsx`: Project detail template.
- `app/writing/[slug]/page.tsx`: Writing detail template.

Article pages are clearly marked as draft outlines; replace them with original, sourced writing before publicizing. Replace placeholder email and LinkedIn URLs before deployment. For hosting, push to GitHub and import the repository into Vercel.
