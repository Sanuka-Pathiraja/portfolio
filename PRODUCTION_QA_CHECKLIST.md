# Production QA Checklist (Non-Backend)

## A. Real-World Device QA

- [ ] Test on iOS Safari (latest + previous major)
- [ ] Test on Chrome Android (mid-range device)
- [ ] Test on lower-end laptop (8GB RAM profile)
- [ ] Validate route navigation:
  - [ ] /
  - [ ] /about
  - [ ] /projects
  - [ ] /projects/usafe (and at least one more case-study route)
  - [ ] /contact
  - [ ] /resume
  - [ ] /does-not-exist (404)

## B. Accessibility QA

- [ ] Run Lighthouse accessibility report
- [ ] Run axe extension scan on each primary route
- [ ] Keyboard-only navigation pass:
  - [ ] Skip link works
  - [ ] Focus visible on all interactive elements
  - [ ] Navigation + form controls fully operable by keyboard
- [ ] Verify contrast on muted text against background
- [ ] Screen-reader check of landmarks and form labels

## C. SEO and Social QA

- [ ] Validate structured data in Google Rich Results Test
- [ ] Validate Open Graph preview with Facebook Sharing Debugger
- [ ] Validate Twitter card preview
- [ ] Confirm canonical URLs route by route
- [ ] Submit/update sitemap in Google Search Console

## D. Performance QA

- [ ] Lighthouse performance audit on mobile profile
- [ ] Ensure hero image loads as priority
- [ ] Confirm lazy-loading behavior for below-the-fold assets
- [ ] Confirm reduced-motion behavior via OS setting

## E. Content QA

- [ ] Timeline, role names, and project metrics reviewed for factual consistency
- [ ] Tone consistency across Home, Projects, About, Resume
- [ ] Final typo pass

## F. Release Readiness

- [ ] Build passes (`npm run build`)
- [ ] No console runtime errors in production preview
- [ ] Favicon and OG preview render correctly in shared links
