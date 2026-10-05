# Hanxu Yan — Academic Homepage

English academic homepage at https://hanxu-yan.github.io.

The layout, navigation, publication filters, responsive menu, and section styles are adapted directly from [Chujie Gao's source repository](https://github.com/Flossiee/Flossiee.github.io/tree/ceea158c3e75294db72c6eae2cfaf16af98419ef). Her personal biography, publications, and experience are not included.

## Local development

Use Node.js 22.

```bash
npm ci
npm run dev
```

To preview the static files deployed to GitHub Pages:

```bash
npm run build
npm start
```

The preview listens at http://127.0.0.1:3000. Set `PORT=3002` if the port is occupied.

## Edit content

- `src/resources/content.tsx`: name, avatar, email, profile links, and metadata.
- `src/resources/academic.ts`: biography, research interests, publications, education, news, internships, awards, and academic service.
- `public/images/hanxu-avatar.jpg`: personal GitHub avatar.
- `src/resources/reference/`: CSS adapted from the reference repository.
- `src/resources/custom.css`: semantic HTML, local font, and accessibility adjustments.
- `src/components/Publications.tsx`: publication rendering and All / Selected filtering.
- `src/components/Header.tsx`: navigation and animated mobile menu.

News, Internship, Awards, and Academic Service appear only when their corresponding arrays contain entries; navigation buttons appear with them. More links to Academic Service, matching the reference.

A publication tagged `Selected` appears under both All and Selected. Clicking Selected again resets the filter to All, matching the reference. The list is ordered by arXiv submission date, newest first. IQuest-Coder-V1 is labeled Tech Report and has an empty author array at Hanxu Yan's request; empty author arrays omit the author row. There is no contact callout, separate Contact section, or expandable publication summary.

Author links and contribution markers are optional. Do not assign contribution roles or publication venues without confirming them. The education dates, majors, and research internships were supplied by Hanxu Yan. Internship roles and collaborators follow Hanxu Yan's instructions; collaborator names link to their official homepages. Additional details, such as awards, project descriptions, and a CV, remain omitted until confirmed.

## GitHub Pages

In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.

The workflow at `.github/workflows/deploy.yml` builds with Node.js 22 and deploys `out/` on pushes to `main`. It can also be started manually from Actions. The site uses static export and local fonts and images.

For a custom domain, set `NEXT_PUBLIC_SITE_URL` before building and configure the domain in GitHub Pages. The default canonical URL is `https://hanxu-yan.github.io`.

## Sources and attribution

- Layout and styling: [Flossiee/Flossiee.github.io](https://github.com/Flossiee/Flossiee.github.io), commit `ceea158c3e75294db72c6eae2cfaf16af98419ef`; adapted from App.css, index.css, Header, About, Publications, Education, Internship, News, SelectedAwards, More, Footer, and the section CSS files. Source comments in the adapted CSS identify this revision.
- The Sichuan University logo comes from the same reference repository. The cartoon panda header icon was generated for this site with the built-in image_gen tool; see [the generation record](docs/panda-generation.md) for its prompt.
- Affiliation, undergraduate status, AI4DB interest, and email come from [Hanxu Yan's public GitHub profile](https://github.com/Hanxu-Yan) and [profile README](https://github.com/Hanxu-Yan/Hanxu-Yan).
- The PDAIS Lab name and Purdue affiliation were checked against [Chunwei Liu's official homepage](https://www.cs.purdue.edu/homes/chunwei/). The internship title links to that page; the personal internship dates come from Hanxu Yan.
- The IDS Lab title links to its [official website](https://ids-lab-asia.github.io/). Hanxu Yan supplied the internship dates and identified it as Prof. Mingjie Tang's lab; the collaborator name links to [his homepage](https://merlintang.github.io/).
- [QUITE](https://arxiv.org/abs/2506.07675) includes Hanxu Yan in its author list. It is labeled an arXiv preprint; no conference acceptance is inferred.
- QUITE's figure comes from its [arXiv HTML](https://arxiv.org/html/2506.07675v3). The displayed title follows the arXiv abstract record.
- [JEVDB](https://arxiv.org/abs/2610.02046): title and author order follow arXiv; the PDF identifies Chunwei Liu as the correspondence contact. Its image is Figure 1 from the [arXiv HTML](https://arxiv.org/html/2610.02046v1). The project website is linked from the abstract.
- [Fail Loudly / RADAR](https://arxiv.org/abs/2609.32528): title and author order follow arXiv; its image is Figure 2 from the [arXiv HTML](https://arxiv.org/html/2609.32528v1).
- [IQuest-Coder-V1 Technical Report](https://arxiv.org/abs/2603.16733): the title follows arXiv, and the author list is hidden as requested. Its image is Figure 1 from the [arXiv HTML](https://arxiv.org/html/2603.16733v1); the code link points to the [official repository](https://github.com/IQuestLab/IQuest-Coder-V1).

The project was initially adapted from [Magic Portfolio by Once UI](https://github.com/once-ui-system/magic-portfolio). Its visual layout and portfolio modules have since been replaced. The original [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) notice is retained in `LICENSE`; this README records the attribution and modifications. Third-party source, logos, and paper figures remain attributed to their respective authors.
