# FortunaDelClub – Project Context File
# Maintained by: Claude (AI Assistant) + FDC Web Manager
# Last Updated: 2026-05-05
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
│   ├── favicon.ico                ✅ Done – uploaded 2026-05-05
│   ├── favicon-16.png             ✅ Done – uploaded 2026-05-05
│   ├── favicon-32.png             ✅ Done – uploaded 2026-05-05
│   ├── apple-touch-icon.png       ✅ Done – uploaded 2026-05-05
│   ├── og-image.jpg               ✅ Done – uploaded 2026-05-05
│   └── og-image-gold.jpg          ✅ Done – uploaded 2026-05-05
│
├── sitemap.xml                    ✅ Done – includes all 19 pages
├── robots.txt                     ✅ Done
├── llms.txt                       ✅ Done
├── CNAME                          ✅ Done – fortunadelclub.com
├── .nojekyll                      ✅ Done
├── _config.yml                    ✅ Done
└── PROJECT_CONTEXT.md             ✅ This file
```

---

## 🎨 Design System

### Colours
| Token        | Value   | Usage                    |
|--------------|---------|--------------------------|
| --gold       | #C8962E | Primary accent, CTAs     |
| --gold-light | #E8B84B | Hover states, headings   |
| --gold-pale  | #F5E6C3 | Card backgrounds, badges |
| --deep       | #1A1208 | Header, footer, dark bg  |
| --cream      | #FAF6EE | Page background          |
| --muted      | #7A6A50 | Body text, secondary     |
| --border     | #E2D5B8 | Card/table borders       |
| --white      | #FFFFFF | Card backgrounds         |

### Typography
- Headings: Playfair Display (Google Fonts)
- Body: DM Sans (Google Fonts)

### Page Template Pattern
1. Announcement Bar (.ann-bar)
2. Header / Nav (<header>)
3. Breadcrumb (.breadcrumb)
4. Page Hero (.page-hero) — dark bg, badge, h1, subtitle
5. Main Content (<main>) — sections alternate white/cream bg
6. CTA Band (.cta-band) — dark bg, WhatsApp CTA
7. Disclaimer (.disclaimer)
8. Footer (<footer>) — 4 cols: Brand | Goa | Kerala | Legal & Company

---

## 🔧 Analytics & SEO (All Active as of 2026-05-05)

| Element                | Value / Status                                        |
|------------------------|-------------------------------------------------------|
| GA4 Stream Name        | www.fortunadelclub.com                                |
| GA4 Stream URL         | https://www.fortunadelclub.com                        |
| GA4 Stream ID          | 2591749072                                            |
| GA4 Measurement ID     | G-G79CKSSW2H  ✅ Live in all 19 pages                 |
| GSC Verification token | -OFTPDapVZ8j9vUOMfxWrlYf2gJA52HzwCEWyjXtuVQ ✅ Live  |
| og:image URL           | https://www.fortunadelclub.com/assets/og-image.jpg    |
| Sitemap URL            | https://www.fortunadelclub.com/sitemap.xml            |
| robots.txt             | https://www.fortunadelclub.com/robots.txt             |

### In Every Page <head>
| Tag / Snippet          | Status  | Notes                              |
|------------------------|---------|------------------------------------|
| title                  | ✅ Live  | Unique per page                    |
| meta description       | ✅ Live  | Unique per page                    |
| meta keywords          | ✅ Live  | Per-page targeted keywords         |
| meta robots            | ✅ Live  | index, follow                      |
| canonical              | ✅ Live  | Unique per page                    |
| Open Graph tags        | ✅ Live  | All pages                          |
| Twitter Card           | ✅ Live  | All pages                          |
| og:image               | ✅ Live  | assets/og-image.jpg                |
| GSC verification meta  | ✅ Live  | Real token in all 19 pages         |
| GA4 snippet            | ✅ Live  | G-G79CKSSW2H in all 19 pages       |
| Favicon links          | ✅ Live  | Files in assets/                   |
| BreadcrumbList JSON-LD | ✅ Live  | All interior pages                 |
| FAQPage JSON-LD        | ✅ Live  | faq.html only                      |
| Organization JSON-LD   | ✅ Live  | index.html only                    |

### ⚠️ Still Pending
- [ ] Submit sitemap to Google Search Console
      URL: https://www.fortunadelclub.com/sitemap.xml
      Go to: search.google.com/search-console → Sitemaps → Add sitemap
- [ ] Submit sitemap to Bing Webmaster Tools
      Go to: bing.com/webmasters → Sitemaps

---

## 📞 Contact Details (Authoritative)

| Role          | WhatsApp / Phone       |
|---------------|------------------------|
| Primary       | +91 9645049039         |
| Operations    | +91 9061039049         |
| Administrator | +91 9895039039         |
| Email         | fdc@fortunadelclub.com |
| Address       | 91SpringBoard, St. Inez, Panjim, Goa – 403001 |

WhatsApp Community – Goa:    https://chat.whatsapp.com/DDS7bXsxUv1AtjZvQZHo9n
WhatsApp Community – Kerala: https://chat.whatsapp.com/EHgfdK3zp9I6CEoK3fjj3q

Social:
- Facebook:  https://www.facebook.com/fortunadelclub/
- Instagram: https://www.instagram.com/fortunadelclub/
- Twitter/X: https://twitter.com/fortunadelclub
- LinkedIn:  https://www.linkedin.com/company/fortunadelclub/

---

## 🗓️ Draw Schedule (Current as of 2026-05-05)

### Kerala Weekly (3:00 PM daily)
| Day       | Draw Name      |
|-----------|----------------|
| Monday    | Bhagyathara    |
| Tuesday   | SthreeSakthi   |
| Wednesday | Dhanalekshmi   |
| Thursday  | KarunyaPlus    |
| Friday    | SuvarnaKeralam |
| Saturday  | Karunya        |
| Sunday    | Samrudhi       |

### Kerala Bumper
| Draw No. | Name                         | Status       |
|----------|------------------------------|--------------|
| BR-109   | Vishu Bumper 2026            | Upcoming     |
| BR-108   | Summer Bumper 2026           | Tickets Open |
| BR-107   | XMAS New Year Bumper 2025-26 | Concluded    |

### Goa
| Draw    | Name          | Time        |
|---------|---------------|-------------|
| Daily   | Rajshree 10   | 5:40 PM     |
| Monthly | Rajshree 300  | As notified |

---

## 🔄 How Claude Works On This Repo

Paste at start of every new session:
```
Working repo: https://github.com/fdcweb/fortunadelclub.com
Context file: https://raw.githubusercontent.com/fdcweb/fortunadelclub.com/main/PROJECT_CONTEXT.md
```
Then paste the raw URL of any specific file to work on.

Standard flow:
1. Describe the change → Claude generates updated file(s)
2. Download → drop into local folder → push to git
3. Update PROJECT_CONTEXT.md Change Log → push

---

## 🚧 Pending Tasks

### HIGH PRIORITY — ✅ ALL COMPLETE

### MEDIUM PRIORITY — ✅ ALL COMPLETE

### REMAINING ACTIONS (Non-code)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify GA4 is receiving data (check Realtime in GA4 dashboard)
- [ ] Verify GSC ownership confirmed after push

### LOW PRIORITY / ROADMAP
- [ ] FDC logo image in header (replace text "FDC" badge)
- [ ] Blog/articles section for informational content expansion
- [ ] Zapier Central agent workflow for draw schedule auto-updates
- [ ] Language support (Malayalam, Hindi)
- [ ] Event JSON-LD schema on individual draw pages

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

| Date       | Change                                                         | Files Affected                  |
|------------|----------------------------------------------------------------|---------------------------------|
| 2026-05-02 | Initial site built and uploaded to GitHub                      | All files                       |
| 2026-05-02 | PROJECT_CONTEXT.md created                                     | PROJECT_CONTEXT.md              |
| 2026-05-02 | Legal pages created: Privacy, Terms, Responsible Participation | 3 new .html + sitemap.xml       |
| 2026-05-02 | Footer updated — Legal & Company column added                  | All 16 original .html files     |
| 2026-05-02 | Copyright year updated 2024 → 2026                             | All 19 .html files              |
| 2026-05-04 | Added keywords, GA4 (placeholder), GSC (placeholder),          | All 19 .html files              |
|            | favicon links, BreadcrumbList JSON-LD, OG image tag            |                                 |
| 2026-05-05 | GA4 Measurement ID activated: G-G79CKSSW2H                     | All 19 .html files              |
| 2026-05-05 | GSC verification token activated                               | All 19 .html files              |
| 2026-05-05 | og:image path standardised to assets/og-image.jpg              | All 19 .html files              |
| 2026-05-05 | Favicon & OG image files uploaded to assets/                   | assets/ folder                  |
| 2026-05-05 | PROJECT_CONTEXT.md updated — all medium tasks complete         | PROJECT_CONTEXT.md              |

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
| Google Analytics               | https://analytics.google.com                                     |
| Google Search Console          | https://search.google.com/search-console                         |
| Bing Webmaster Tools           | https://www.bing.com/webmasters                                  |

---
*Single source of truth for the FortunaDelClub website project.
Update the Change Log after every change and push to git.*
