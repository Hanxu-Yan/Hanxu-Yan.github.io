# Hanxu Yan — Academic Homepage

English academic homepage for https://hanxu-yan.github.io, with a classic layout visually inspired by [Chujie Gao's website](https://flossiee.github.io/). The layout is implemented independently; her biography, photographs, and publications are not included.

## Local development

Use Node.js 22.

```bash
npm ci
npm run dev
```

To preview the exact static files deployed to GitHub Pages:

```bash
npm run build
npm start
```

The preview listens at http://127.0.0.1:3000. Set `PORT=3001` if needed.

## Edit content

- `src/resources/content.tsx`: name, avatar, email, profile links, and page metadata.
- `src/resources/academic.ts`: biography, research interests, publications, and education.
- `public/images/hanxu-avatar.jpg`: current GitHub avatar; replace it with a personal photo if desired.
- `public/images/publications/`: publication overview figures.
- `src/app/page.module.scss` and `src/resources/custom.css`: layout and appearance.

Publication records have a title, authors, year, venue, paper URL, thumbnail, image description, and topic tags. Optional code and project URLs appear only when supplied. The publication overview expands with a native details element.

## GitHub Pages

The repository must be named `Hanxu-Yan.github.io`. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.

The workflow at `.github/workflows/deploy.yml` builds with Node.js 22, uploads `out/`, and deploys it to GitHub Pages on pushes to `main`. The site uses static export, local fonts and images, and no server API routes.

For a custom domain, set `NEXT_PUBLIC_SITE_URL` before building and configure the domain in GitHub Pages. The default canonical URL is `https://hanxu-yan.github.io`.

## Content sources and remaining details

- Affiliation, undergraduate status, AI4DB interest, and email come from [the public GitHub profile](https://github.com/Hanxu-Yan) and [profile README](https://github.com/Hanxu-Yan/Hanxu-Yan).
- [AGRO-SQL](https://arxiv.org/abs/2512.23366) and [QUITE](https://arxiv.org/abs/2506.07675) include Hanxu Yan in the author lists. Both are labeled arXiv preprints; no conference acceptance is inferred.
- AGRO-SQL thumbnail: Figure 1 from [arXiv HTML](https://arxiv.org/html/2512.23366v1).
- QUITE thumbnail: system overview from [arXiv HTML](https://arxiv.org/html/2506.07675v3).
- QUITE uses the title on its arXiv abstract record; the v3 body has a minor title wording difference.
- Education dates, degree subject, supervisors, awards, internships, and a CV have not been confirmed and are omitted.
- RADAR and JEVDB have not been added because authorship and current publication details need confirmation.

This project began with [Magic Portfolio by Once UI](https://github.com/once-ui-system/magic-portfolio). Its visual layout has been replaced and the unused portfolio modules removed. The original CC BY-NC 4.0 notice and attribution are retained in `LICENSE` and the footer. Third-party figures remain credited to their linked papers.
