# FortunaDelClub – Project Context File
# Maintained by: Claude (AI Assistant) + FDC Web Manager
# Last Updated: 2026-05-02
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
fortunadelclub.com/          ← repo root = GitHub Pages root
│
├── index.html               ✅ Done – Homepage
├── goa-lottery.html         ✅ Done – Goa State Lottery overview
├── goa-weekly.html          ✅ Done – Rajshree 10 daily draw
├── goa-monthly.html         ✅ Done – Rajshree 300 monthly draw
├── goa-ticket-format.html   ✅ Done – Goa ticket number format
├── kerala-lottery.html      ✅ Done – Kerala State Lottery overview
├── kerala-weekly.html       ✅ Done – Kerala weekly draws (Mon–Sun)
├── kerala-bumper.html       ✅ Done – Kerala bumper draws
├── kerala-ticket-format.html✅ Done – Kerala ticket format
├── kerala-gallery.html      ✅ Done – Kerala ticket gallery
├── draws.html               ✅ Done – All draws consolidated
├── faq.html                 ✅ Done – FAQ with JSON-LD schema
├── about.html               ✅ Done – About FDC
├── contact.html             ✅ Done – Contact + socials
├── fdc-updates.html         ✅ Done – Updates / announcements
├── 404.html                 ✅ Done – Custom 404 page
│
├── privacy-policy.html      ✅ Done – Added 2026-05-02
├── terms-of-use.html        ✅ Done – Added 2026-05-02
├── responsible-participation.html ✅ Done – Added 2026-05-02
│
├── assets/
│   ├── style.css            ✅ Done – Shared stylesheet (all pages link here)
│   ├── main.js              ✅ Done – Shared JS (nav, tabs, animations)
│   └── og-image.jpg         ❌ MISSING – OG image for social sharing
│
├── sitemap.xml              ✅ Done – Full sitemap with priorities
├── robots.txt               ✅ Done – Allows all bots incl. AI crawlers
├── llms.txt                 ✅ Done – AI-readable site summary
├── CNAME                    ✅ Done – fortunadelclub.com
├── .nojekyll                ✅ Done – Skips Jekyll on GitHub Pages
├── _config.yml              ✅ Done – GitHub Pages config
└── PROJECT_CONTEXT.md       ✅ This file
```

---

## 🎨 Design System

### Colours
| Token          | Value     | Usage                     |
|----------------|-----------|---------------------------|
| `--gold`       | `#C8962E` | Primary accent, CTAs      |
| `--gold-light` | `#E8B84B` | Hover states, headings    |
| `--gold-pale`  | `#F5E6C3` | Card backgrounds, badges  |
| `--deep`       | `#1A1208` | Header, footer, dark bg   |
| `--cream`      | `#FAF6EE` | Page background           |
| `--muted`      | `#7A6A50` | Body text, secondary info |
| `--border`     | `#E2D5B8` | Card/table borders        |
| `--white`      | `#FFFFFF` | Card backgrounds          |

### Typography
- Headings: `Playfair Display` (Google Fonts)
- Body: `DM Sans` (Google Fonts)

### Shared Assets
- All pages link to `assets/style.css` and `assets/main.js`
- Do NOT embed page-specific CSS/JS unless absolutely necessary
- All pages use the same header, footer, announcement bar, and disclaimer

---

## 🗂️ Page Template Pattern

Every page follows this structure:
```
1. Announcement Bar    (.ann-bar)
2. Header / Nav        (<header>)
3. Breadcrumb          (.breadcrumb)
4. Page Hero           (.page-hero)  — dark bg, badge, h1, subtitle
5. Main Content        (<main>)      — sections alternate white/cream bg
6. CTA Band            (.cta-band)  — dark bg, WhatsApp CTA
7. Disclaimer          (.disclaimer)
8. Footer              (<footer>)
```

---

## 📞 Contact Details (Authoritative)

| Role              | WhatsApp / Phone    | Notes                        |
|-------------------|---------------------|------------------------------|
| Primary           | +91 9645049039      | Main contact, all pages      |
| FDC Operations    | +91 9061039049      | Bumper tickets, membership   |
| FDC Administrator | +91 9895039039      | Escalations                  |
| Email             | fdc@fortunadelclub.com |                           |
| Address           | 91SpringBoard, St. Inez, Panjim, Goa – 403001 |     |

### WhatsApp Communities
- Goa: https://chat.whatsapp.com/DDS7bXsxUv1AtjZvQZHo9n
- Kerala: https://chat.whatsapp.com/EHgfdK3zp9I6CEoK3fjj3q

### Social Media
- Facebook: https://www.facebook.com/fortunadelclub/
- Instagram: https://www.instagram.com/fortunadelclub/
- Twitter/X: https://twitter.com/fortunadelclub
- LinkedIn: https://www.linkedin.com/company/fortunadelclub/

---

## 🗓️ Draw Schedule (Current)

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

### Kerala Bumper (current as of 2026-05-02)
| Draw No. | Name                        | Status        |
|----------|-----------------------------|---------------|
| BR-109   | Vishu Bumper 2026           | Upcoming      |
| BR-108   | Summer Bumper 2026          | Tickets Open  |
| BR-107   | XMAS New Year Bumper 2025-26| Concluded     |

### Goa Draws
| Draw    | Name          | Time         |
|---------|---------------|--------------|
| Daily   | Rajshree 10   | 5:40 PM      |
| Monthly | Rajshree 300  | As notified  |

---

## 🔧 Update Procedures

### How Claude Works On This Repo

Claude (AI assistant) can:
- Fetch any file via raw GitHub URL when pasted into chat
- Read `PROJECT_CONTEXT.md` to understand current state
- Generate updated full-file HTML for any page
- Generate new pages following the template pattern

Claude CANNOT:
- Push directly to GitHub
- Write to the server via FTP or SSH

### Standard Update Flow
1. You describe the change needed (e.g. "Mark BR-108 as concluded, add BR-109 as tickets open")
2. Claude fetches the relevant file via raw URL (paste it in chat)
3. Claude generates the updated file
4. You open the file on GitHub → pencil icon → paste → Commit
5. GitHub Pages auto-deploys in ~30–60 seconds
6. You update PROJECT_CONTEXT.md with the change and new date

### Paste This Into Chat When Starting a Session
```
Working repo: https://github.com/fdcweb/fortunadelclub.com
Context file: https://raw.githubusercontent.com/fdcweb/fortunadelclub.com/main/PROJECT_CONTEXT.md
```

---

## 🚧 Pending Tasks (Priority Order)

### HIGH PRIORITY
- [ ] Create `privacy-policy.html`
- [ ] Create `terms-of-use.html`
- [ ] Create `responsible-participation.html`
- [ ] Add these 3 pages to the footer nav and sitemap
- [ ] Create `assets/og-image.jpg` (1200×630px, FDC branding)

### MEDIUM PRIORITY
- [ ] Add FDC logo image (replace text "FDC" mark in header)
- [ ] Add Google Search Console verification meta tag to all pages
- [ ] Add Google Analytics (GA4) tracking snippet
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### LOW PRIORITY / ROADMAP
- [ ] Blog/articles section for informational content expansion
- [ ] Zapier Central agent workflow for draw schedule auto-updates
- [ ] Structured data (JSON-LD) for individual draw pages
- [ ] Language support (Malayalam, Hindi) for broader reach

---

## ⚠️ Compliance Checklist (Check Every Page Before Publishing)

- [ ] Disclaimer present and accurate
- [ ] No ticket-selling language
- [ ] No winning/earning claims
- [ ] No government affiliation implied
- [ ] All external links point to official government sources
- [ ] WhatsApp CTA uses neutral language ("Chat on WhatsApp", "Get Assistance")
- [ ] Results reference official sources only

---

## 📝 Change Log

| Date       | Change                                      | Files Affected              |
|------------|---------------------------------------------|-----------------------------|
| 2026-05-02 | Initial site built and uploaded to GitHub   | All files                   |
| 2026-05-02 | PROJECT_CONTEXT.md created                  | PROJECT_CONTEXT.md          |
| 2026-05-02 | Added Privacy Policy, Terms of Use, Responsible Participation pages | privacy-policy.html, terms-of-use.html, responsible-participation.html, sitemap.xml |

---

## 📌 Key External References

| Resource                    | URL                                              |
|-----------------------------|--------------------------------------------------|
| Goa State Lotteries (Official) | https://statelotteries.goa.gov.in/           |
| Kerala State Lotteries (Official) | http://statelottery.kerala.gov.in/        |
| Goa Lottery Results         | https://myrajshree.com/today-result              |
| Kerala Results Official     | https://statelottery.kerala.gov.in/index.php/lottery-result-view |
| Kerala Draw Live (YouTube)  | https://www.youtube.com/@kslott/streams          |
| Goa Draw Live (YouTube)     | https://www.youtube.com/rajshreelottery          |

---

*This file is maintained as the single source of truth for the FortunaDelClub website project.
Update the Change Log and Pending Tasks sections every time a change is made.*
