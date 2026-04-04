# Analytics Event Map (Frontend)

## Primary Conversion

- event: `contact_intent_submit`
- trigger: Contact form submit intent
- payload: `source`
- KPI: Contact Intent Rate = contact_intent_submit / unique sessions

## Project Engagement

- event: `project_case_study_click`
- trigger: Case study CTA click in project cards
- payload: `projectId`

- event: `project_repo_click`
- trigger: Repository link click
- payload: `projectId`

- event: `project_live_click`
- trigger: Live/demo link click
- payload: `projectId`

- event: `case_study_github_click`
- trigger: Repository click from case study page
- payload: `projectId`

## Contact and Social Intent

- event: `contact_detail_click`
- trigger: Direct contact details clicked (email/phone)
- payload: `label`

- event: `social_click`
- trigger: Social profile links clicked
- payload: `placement`, `network`

## Suggested KPI Dashboard Spec

1. Top Funnel

- Unique sessions
- Route views (`/`, `/projects`, `/contact`, `/resume`)

2. Mid Funnel

- Project case study CTR = project_case_study_click / projects page views
- Repo click-through by project
- Live demo click-through by project

3. Conversion

- Contact Intent Rate
- Email/Phone direct click rate

4. Content Performance

- Most engaged project by event count
- Case-study completion proxy via return clicks (`case_study_back_to_projects`)

## Notes

- Current implementation logs to `window.dataLayer` (if present) and stores a small local trail in `localStorage` key `portfolio_analytics_events`.
- To productionize, connect these events to GA4/GTM/PostHog or a custom endpoint.
