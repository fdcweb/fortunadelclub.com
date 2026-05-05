# FortunaDelClub – Project Context File
# Maintained by: Claude (AI Assistant) + FDC Web Manager
# Last Updated: 2026-05-04
# Repo: https://github.com/fdcweb/fortunadelclub.com
# Live Site: https://www.fortunadelclub.com

---

## 🔰 Core Positioning (NEVER DEVIATE)

FortunaDelClub is an **independent lottery assistance and informational service**.

- ❌ NOT a ticket seller
- ❌ NOT government-affiliated
- ❌ Does NOT influence lottery outcomes
- ❌ Does NOT make winning or earnings claims
- ✅ Informational, assistance-based, transparent, compliant

---

## 📁 Repository Structure

```
fortunadelclub.com/
│
├── index.html                     ✅ Done
├── goa-lottery.html               ✅ Done
├── goa-weekly.html                ✅ Done
├── goa-monthly.html               ✅ Done
├── goa-ticket-format.html         ✅ Done
├── kerala-lottery.html            ✅ Done
├── kerala-weekly.html             ✅ Done
├── kerala-bumper.html             ✅ Done
├── kerala-ticket-format.html      ✅ Done
├── kerala-gallery.html            ✅ Done
├── draws.html                     ✅ Done
├── faq.html                       ✅ Done – FAQPage JSON-LD
├── about.html                     ✅ Done
├── contact.html                   ✅ Done
├── fdc-updates.html               ✅ Done
├── 404.html                       ✅ Done
├── privacy-policy.html            ✅ Done – Added 2026-05-02
├── terms-of-use.html              ✅ Done – Added 2026-05-02
├── responsible-participation.html ✅ Done – Added 2026-05-02
│
├── assets/
│   ├── style.css                  ✅ Done
│   ├── main.js                    ✅ Done
│   ├── favicon.ico                ❌ MISSING – create 16×16
│   ├── favicon-16.png             ❌ MISSING – create 16×16
│   ├── favicon-32.png             ❌ MISSING – create 32×32
│   ├── apple-touch-icon.png       ❌ MISSING – create 180×180
│   └── og-image.jpg               ❌ MISSING – create 1200×630px
│
├── sitemap.xml                    ✅ Done – includes all 19 pages
├── robots.txt                     ✅ Done
├── llms.txt                       ✅ Done
├── CNAME                          ✅ Done
├── .nojekyll                      ✅ Done
├── _config.yml                    ✅ Done
└── PROJECT_CONTEXT.md             ✅ This file
```

---

## 🎨 Design System

### Colours
| Token          | Value     | Usage                     |
|----------------|-----------|---------------------------|
| --gold         | #C8962E   | Primary accent, CTAs      |
| --gold-light   | #E8B84B   | Hover states, headings    |
| --gold-pale    | #F5E6C3   | Card backgrounds, badges  |
| --deep         | #1A1208   | Header, footer, dark bg   |
| --cream        | #FAF6EE   | Page background           |
| --muted        | #7A6A50   | Body text, secondary info |
| --border       | #E2D5B8   | Card/table borders        |
| --white        | #FFFFFF   | Card backgrounds          |

### Typography
- Headings: Playfair Display (Google Fonts)
- Body: DM Sans (Google Fonts)

### Page Template Pattern
1. Announcement Bar (.ann-bar)
2. Header / Nav (<header>)
3. Breadcrumb (.breadcrumb)
4. Page Hero (.page-hero)
5. Main Content (<main>) — sections alternate white/cream bg
6. CTA Band (.cta-band)
7. Disclaimer (.disclaimer)
8. Footer (<footer>) — 4 cols: Brand | Goa | Kerala | Legal & Company

---

## 🔧 SEO & Analytics Status (as of 2026-05-04)

| Element                    | Status  | Notes                                          |
|----------------------------|---------|------------------------------------------------|
| title tag                  | ✅ Done  | Unique per page                                |
| meta description           | ✅ Done  | Unique per page                                |
| meta keywords              | ✅ Done  | Added 2026-05-04                               |
| meta robots                | ✅ Done  | index, follow                                  |
| canonical tag              | ✅ Done  | Unique per page                                |
| Open Graph tags            | ✅ Done  | All pages                                      |
| Twitter Card tags          | ✅ Done  | All pages                                      |
| og:image tag               | ✅ Done  | All pages — file still needs to be created     |
| GSC verification meta      | ✅ Done  | ⚠️ PLACEHOLDER — replace token before pushing  |
| GA4 snippet                | ✅ Done  | ⚠️ PLACEHOLDER — replace ID before pushing     |
| Favicon links in head      | ✅ Done  | ⚠️ Image files still need to be created        |
| BreadcrumbList JSON-LD     | ✅ Done  | All interior pages (2026-05-04)                |
| FAQPage JSON-LD            | ✅ Done  | faq.html                                       |
| Organization JSON-LD       | ✅ Done  | index.html                                     |

### ⚠️ Action Required Before Next Push
1. GA4 ID: replace G-XXXXXXXXXX with real Measurement ID in all pages
2. GSC token: replace XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX with real token
3. Favicon files: create and upload to assets/ (use realfavicongenerator.net)
4. OG image: create assets/og-image.jpg at 1200×630px with FDC branding

Tell Claude your GA4 ID and GSC token — it will update all 19 pages in one batch.

---

## 📞 Contact Details (Authoritative)

| Role           | WhatsApp / Phone       |
|----------------|------------------------|
| Primary        | +91 9645049039         |
| Operations     | +91 9061039049         |
| Administrator  | +91 9895039039         |
| Email          | fdc@fortunadelclub.com |
| Address        | 91SpringBoard, St. Inez, Panjim, Goa – 403001 |

WhatsApp Community – Goa:    https://chat.whatsapp.com/DDS7bXsxUv1AtjZvQZHo9n
WhatsApp Community – Kerala: https://chat.whatsapp.com/EHgfdK3zp9I6CEoK3fjj3q

Social: facebook.com/fortunadelclub | instagram.com/fortunadelclub
        twitter.com/fortunadelclub  | linkedin.com/company/fortunadelclub

---

## 🗓️ Draw Schedule (Current as of 2026-05-04)

### Kerala Weekly (3:00 PM daily)
Mon: Bhagyathara | Tue: SthreeSakthi | Wed: Dhanalekshmi
Thu: KarunyaPlus | Fri: SuvarnaKeralam | Sat: Karunya | Sun: Samrudhi

### Kerala Bumper
BR-109 Vishu Bumper 2026          – Upcoming
BR-108 Summer Bumper 2026         – Tickets Open
BR-107 XMAS New Year Bumper 25-26 – Concluded

### Goa
Daily:   Rajshree 10  – 5:40 PM
Monthly: Rajshree 300 – As notified

---

## 🔄 How Claude Works On This Repo

Paste at start of every new session:
```
Working repo: https://github.com/fdcweb/fortunadelclub.com
Context file: https://raw.githubusercontent.com/fdcweb/fortunadelclub.com/main/PROJECT_CONTEXT.md
```
Then paste the raw URL of any file to work on.

Standard flow:
1. Describe change → Claude generates file → Download → Push to git
2. Update PROJECT_CONTEXT.md Change Log → Push

---

## 🚧 Pending Tasks

### MEDIUM PRIORITY (In Progress)
- [x] Keywords meta — all pages (2026-05-04)
- [x] GA4 snippet — all pages (placeholder, swap ID)
- [x] GSC meta — all pages (placeholder, swap token)
- [x] Favicon links — all pages (image files needed)
- [x] BreadcrumbList JSON-LD — all interior pages (2026-05-04)
- [x] OG image tag — all pages (image file needed)
- [ ] GA4 Measurement ID — replace G-XXXXXXXXXX with real ID
- [ ] GSC verification token — replace placeholder with real token
- [ ] Favicon image files — create & upload to assets/
- [ ] OG image file — create assets/og-image.jpg (1200×630px)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### LOW PRIORITY / ROADMAP
- [ ] FDC logo image in header
- [ ] Blog/articles section
- [ ] Zapier Central agent workflow for auto-updates
- [ ] Language support (Malayalam, Hindi)
- [ ] Event JSON-LD schema on draw pages

---

## ⚠️ Compliance Checklist (Every Page Before Publishing)
- Disclaimer present and accurate
- No ticket-selling language
- No winning/earning claims
- No government affiliation implied
- External links point to official government sources only
- WhatsApp CTA uses neutral language
- Results reference official sources only

---

## 📝 Change Log

| Date       | Change                                                    | Files Affected               |
|------------|-----------------------------------------------------------|------------------------------|
| 2026-05-02 | Initial site built and uploaded to GitHub                 | All files                    |
| 2026-05-02 | PROJECT_CONTEXT.md created                                | PROJECT_CONTEXT.md           |
| 2026-05-02 | Legal pages created (Privacy, Terms, Responsible)         | 3 legal .html files          |
| 2026-05-02 | sitemap.xml updated with legal pages                      | sitemap.xml                  |
| 2026-05-02 | Footer updated — Legal & Company column added             | All 16 original .html files  |
| 2026-05-02 | Copyright year updated 2024 → 2026                        | All 19 .html files           |
| 2026-05-04 | Added: keywords, GA4 (placeholder), GSC (placeholder),    | All 19 .html files           |
|            | favicon links, BreadcrumbList JSON-LD, OG image tag       |                              |
| 2026-05-04 | PROJECT_CONTEXT.md updated                                | PROJECT_CONTEXT.md           |

---

## 📌 Key External References

| Resource                       | URL                                                              |
|--------------------------------|------------------------------------------------------------------|
| Goa State Lotteries (Official) | https://statelotteries.goa.gov.in/                               |
| Kerala State Lotteries         | http://statelottery.kerala.gov.in/                               |
| Goa Lottery Results            | https://myrajshree.com/today-result                              |
| Kerala Results                 | https://statelottery.kerala.gov.in/index.php/lottery-result-view |
| Kerala Draw Live (YouTube)     | https://www.youtube.com/@kslott/streams                          |
| Goa Draw Live (YouTube)        | https://www.youtube.com/rajshreelottery                          |
| Favicon Generator              | https://realfavicongenerator.net                                 |
| Google Analytics               | https://analytics.google.com                                     |
| Google Search Console          | https://search.google.com/search-console                         |
| Bing Webmaster Tools           | https://www.bing.com/webmasters                                  |

---
*Single source of truth for the FortunaDelClub website project.
Update the Change Log and push to git after every change.*
