# standmaker — Modern Marketing Solutions Agency

A responsive, multi-page web application engineered with **React, Vite, Tailwind CSS, and React Router (HashRouter)**. 

This project is a recreation of the agency website **[Asymmetrique](https://asymmetrique.com/)**, transformed under the new brand identity **standmaker** for GitHub user **[Aman22kr](https://github.com/Aman22kr)**, configured for static deployment on **GitHub Pages via GitHub Actions**.

---

## 1. What the Website Does

**standmaker** is a full-stack digital marketing, strategic branding, and performance commerce agency application. It presents an integrated model of modern marketing that unifies:
- **Brands & Strategy**: Market positioning, narrative architectures, and visual identity systems.
- **Content & Creator Ecosystems**: High-value editorial engines and curated creator coalitions.
- **Advertising & Creative**: Multi-touch 360 campaigns, commercial scripts, and decision-driving media.
- **Performance & Commerce**: Blended CAC/ROAS management, paid acquisition, and incrementality analytics.

The application allows prospective clients, marketing directors, and founders to:
- Explore solutions and detailed contractual deliverables.
- Review in-depth case studies with verified, quantified business outcomes.
- Read editorial perspectives and subscribe to *The Standpoint* dispatch.
- Bookmark case studies for internal stakeholder reviews (persisted in `localStorage`).
- Model marketing momentum with an interactive Growth & ROI Estimator.
- Build and transmit custom mandate briefs via an interactive Project Scope Builder.
- Browse and apply for open career mandates.

---

## 2. Reference Website & Brand Transformation

| Parameter | Reference Website | New Brand Identity |
| :--- | :--- | :--- |
| **URL** | [https://asymmetrique.com/](https://asymmetrique.com/) | `https://aman22kr.github.io/standmaker/` |
| **Brand Name** | Asymmetrique | **standmaker** |
| **Core Ethos** | Goal-based marketing, consumer-aligned outcomes | *"Forging business-relevance through full-stack marketing solutions"* |
| **Pillars** | Brands, Content, Advertising, Performance | Brands & Strategy, Content & Creators, Advertising & Creative, Performance & Commerce |
| **Newsletter** | *Point of Woo* | *The Standpoint* |
| **GitHub Target** | N/A | **Aman22kr** |

---

## 3. Implemented Pages & Features

1. **Homepage (`/`)**:
   - Hero statement with high-impact visual studio asset.
   - Client sectors and partner proof strip.
   - Four Core Solutions interactive tabs with capability matrices and benchmark metrics.
   - Featured case studies grid with quick-bookmark action.
   - "The standmaker Way" operational tenets (Outcomes, Cohesion, Empathy, Speed).
   - Interactive Marketing Growth & ROI Estimator (calculates estimated pipeline and recommended service mix).
   - Verified client testimonial quote from Nordusk LED Group.
   - Latest Perspectives briefing preview.
   - Compact advertisement placeholder slot.

2. **Solutions (`/solutions` & `/solutions?category=:slug`)**:
   - Deep-dive architectural breakdown of all 4 pillars.
   - Contractual deliverables lists and capability specifications.
   - 4-Phase Mandate Lifecycle (Diagnostics, Architecture, Activation, Telemetry).
   - Direct buttons to commission specific solutions.

3. **Work / Portfolio (`/work`)**:
   - Filterable by solution pillar and industry sector.
   - Real-time search bar with recent search query history.
   - Bookmark toggle on every card with persistent storage.
   - Quantified impact metric callouts (`+184%`, `3.6x`, `$18.2M`).

4. **Case Study Detail (`/work/:slug`)**:
   - Comprehensive narrative: The Challenge, The Strategic Intervention, The Tactical Implementation, and Commercial Impact.
   - Video Area Placeholder (preserving exact 16:9 cinematic aspect ratio and dimensions without external YouTube embed dependencies).
   - Verifiable client testimonial and executive attribution.
   - Previous / Next case study navigation.

5. **About Us (`/about`)**:
   - Agency mission, founding charter, and the four tenets of The standmaker Way.
   - Executive leadership profiles (CSO, Head of Creative, VP of Performance, Director of Content).
   - Agency evolution timeline (2010 to 2026).

6. **Perspectives / Essays (`/perspectives` & `/perspectives/:slug`)**:
   - Thought leadership essays covering attribution, non-linear customer journeys, and creator ecosystems.
   - Categorized topic filtering and article search.
   - *The Standpoint* monthly newsletter subscription box with instant feedback.
   - Full article reading view with executive summaries and core takeaways.

7. **Careers (`/careers`)**:
   - Agency culture, benefits, and hybrid work policies.
   - Open roles across strategy, performance marketing, and art direction.
   - Interactive Candidate Application modal with validation and local draft persistence.

8. **Contact & Scope Builder (`/contact`)**:
   - Direct agency contacts (Email: `grow@standmaker.agency`, Phone: `+91 (022) 6912 4400`, Mumbai HQ).
   - Interactive Mandate Scope Builder (selecting services, monthly budgets, kickoff horizons, and project briefs).
   - Real-time draft auto-save to browser `localStorage`.
   - Comprehensive client FAQ accordion.

9. **Saved Case Studies (`/saved`)**:
   - User's shortlisted case studies saved across sessions with quick review and removal tools.

10. **404 Not Found (`*`)**:
    - Graceful error view directing visitors back to Home, Work, or Contact.

11. **Global Components**:
    - **Header**: Strict Top Bar Contract with wordmark, single-line links, bookmark counter, and primary CTA.
    - **Footer**: Editorial layout with brand summary, solutions directory, newsletter signup, and corporate address.
    - **AdPlaceholder**: Compact, tasteful sponsored content slot with persistent dismissal option.
    - **VideoPlaceholder**: Standard 16:9 responsive video area placeholder compliant with static hosting standards.

---

## 4. Project Structure

```text
standmaker/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages
├── dist/                       # Production static build output
├── src/
│   ├── assets/
│   │   └── images/             # Generated studio and case study imagery
│   ├── components/
│   │   ├── common/
│   │   │   ├── AdPlaceholder.tsx      # Global compact ad slot
│   │   │   └── VideoPlaceholder.tsx   # Video area layout placeholder
│   │   └── layout/
│   │       ├── Header.tsx             # 3-zone top bar navigation
│   │       └── Footer.tsx             # Global editorial footer
│   ├── context/
│   │   └── AppContext.tsx             # LocalStorage state management
│   ├── data/
│   │   └── mockData.ts                # Structured mock content layer
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SolutionsPage.tsx
│   │   ├── WorkPage.tsx
│   │   ├── CaseStudyDetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── PerspectivesPage.tsx
│   │   ├── ArticleDetailPage.tsx
│   │   ├── CareersPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── SavedPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces
│   ├── App.tsx                        # Router layout with HashRouter
│   ├── index.css                      # Tailwind v4 configuration
│   └── main.tsx                       # React DOM entry point
├── .gitignore
├── index.html                         # Document title, SEO meta, Google Fonts
├── metadata.json                      # AI Studio application metadata
├── package.json                       # Scripts and dependencies
├── package-lock.json                  # Validated npm dependency lockfile
├── tsconfig.json
├── vite.config.ts                     # Vite config with base: './'
└── README.md
```

---

## 5. Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher
- **Git**

---

## 6. How to Install Dependencies

To install dependencies using the committed `package-lock.json`:

```bash
npm ci
```

Alternatively, for standard installation:

```bash
npm install
```

---

## 7. How to Run the Development Server

Start the Vite development server on port 3000:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 8. How to Generate & Preview Production Build

Generate the optimized production build in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 9. Browser `localStorage` Persistence & Limitations

The application uses namespaced browser `localStorage` keys for client-side state:
- `standmaker_saved_case_studies_v1`: Array of bookmarked case study slugs.
- `standmaker_inquiry_draft_v1`: Draft contact form inputs and scope parameters.
- `standmaker_newsletter_subscribed_v1`: Newsletter subscription status.
- `standmaker_growth_calculator_v1`: Growth estimator budget and objective inputs.
- `standmaker_search_history_v1`: Recent case study search queries.
- `standmaker_ad_dismissed_v1`: Compact ad slot visibility toggle.
- `standmaker_job_applications_v1`: Demo career submissions.

### Limitations:
- `localStorage` is **specific to the user's current browser and device**. Data does not synchronize across devices.
- Clearing browser cache or using Incognito/Private mode will reset stored preferences to their defaults.
- All form submissions (inquiries, job applications, newsletter signups) are simulated client-side and saved locally; no live backend server or database is involved in this version.

---

## 10. How to Configure GitHub Repository & Username

1. Initialize a git repository locally (if not already done):
   ```bash
   git init
   git branch -M main
   ```
2. Create a GitHub repository named `standmaker` under your account (`Aman22kr`).
3. Set your remote origin:
   ```bash
   git remote add origin https://github.com/Aman22kr/standmaker.git
   ```

---

## 11. How to Enable GitHub Pages via GitHub Actions

1. Navigate to your repository on GitHub: `https://github.com/Aman22kr/standmaker`.
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The repository will now automatically detect `.github/workflows/deploy.yml`.

---

## 12. How to Push Changes & Trigger Automatic Deployment

Commit all files including `package-lock.json` and push to `main`:

```bash
git add .
git commit -m "feat: complete standmaker agency website with GitHub Actions deployment"
git push -u origin main
```

The GitHub Actions workflow will:
1. Check out the repository.
2. Set up Node.js 22 with npm cache.
3. Run `npm ci`.
4. Execute `npm run build` (with `base: './'`).
5. Upload `./dist` as the Pages artifact.
6. Deploy the artifact to GitHub Pages.

Your live website will be available at:
```text
https://aman22kr.github.io/standmaker/
```

---

## 13. Troubleshooting Common Deployment Problems

- **Assets fail to load (404 on `.js` or `.css`)**: Ensure `vite.config.ts` has `base: './'`. This guarantees assets resolve correctly under subpaths on `github.io`.
- **Page refresh results in 404 on GitHub Pages**: HashRouter is used (`#/work`, `#/about`, etc.), preventing 404 errors on static hosts since the browser never makes a server request for client routes.
- **`npm ci` fails in GitHub Actions**: Ensure `package-lock.json` is committed in the root directory and matches `package.json`.
- **Workflow lacks permissions**: Verify that `permissions: { pages: write, id-token: write, contents: read }` is present in `.github/workflows/deploy.yml`.

---

## 14. Customization & Rebranding Guide

To rebrand or adapt this project for another brand:
1. **Brand Name**: Search and replace `standmaker` with your brand name in:
   - `index.html` (title, meta tags)
   - `metadata.json`
   - `src/components/layout/Header.tsx`
   - `src/components/layout/Footer.tsx`
2. **Colors & Accents**: Update Tailwind classes (e.g. `amber-400` / `neutral-950`) in `src/index.css` and component files.
3. **Data Layer**: Modify `src/data/mockData.ts` to replace case studies, client logos, services, team members, and articles.

---

## 15. Quick Settings Summary

- **GitHub Username**: `Aman22kr`
- **Brand Name**: `standmaker`
- **Reference URL**: `https://asymmetrique.com/`
- **Routing**: `HashRouter`
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS v4
- **Primary Deployment**: GitHub Actions (`deploy.yml`)

---

## 16. Mock Implementations & Current Limitations

- **Backend**: The initial version is purely client-side static; no Node.js/Express server or external database is required.
- **Form Submissions**: Contact inquiries, job applications, and newsletter subscriptions persist in `localStorage` and display verified feedback states without making live third-party network calls.
- **Video Embeds**: In accordance with static deployment specifications, video areas feature blank 16:9 placeholders with modal playback descriptions rather than embedding third-party YouTube iframes.
- **Ad Placeholder**: Compact sponsor banner rendered for layout fidelity with dismissible state; contains no real telemetry or commercial tracking scripts.
