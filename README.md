# 🧪 QA Project: OrangeHRM Testing Strategy & Execution

This repository showcases the manual and automated testing process, defect logging, and strategic documentation for the OrangeHRM HR Management platform. The primary objective is to evaluate core HR workflows, data persistence, input validation, and infrastructure constraints under real-world usage scenarios.

---

## 📊 Executive Status & Metrics Summary

- **Overall Project Status:** 🟢 93% Pass Rate (Functional Core Stable & High Test Coverage)
- **Total Test Cases Executed:** 86 scenarios across all modules
  - ✅ **Passed:** 80 (93.0%)
  - ❌ **Failed:** 4 (4.7% — UI, Validation & Input Formatting Bugs)
  - ⏸️ **Blocked:** 2 (2.3% — Test Data & Role Hierarchy Prerequisites)
- **Full Suite Coverage:** 86 Manual BDD Test Cases fully mapped and documented.

---

## 🎯 Project Overview

I performed a comprehensive End-to-End (E2E) functional and usability analysis covering the full employee lifecycle, administrative controls, and system edge cases. Beyond happy paths, testing focused on **Negative Testing**, **Boundary Value Analysis**, **Validation Constraints**, and **Permission/Workflow Validation**.

### Modules Tested
- **Admin & Configuration:** User authentication, role permissions, custom leave type creation, and organizational structures.
- **PIM (Personnel Information Management):** Employee onboarding, search filters (ID/Name), and profile management.
- **Leave & Time Management:** Request submission, managerial approval workflows, multi-criteria filters, and real-time Punch In/Out tracking.
- **Performance & Recruitment:** Review creation, KPI configurations, supervisor mapping, and candidate tracking (ATS).
- **Dashboard & UI/UX:** Real-time widget behavior ("Time at Work"), user greetings, and layout responsiveness across viewports.
- **Buzz (Social):** Internal newsfeed posting behavior, media attachments, and input validation logic.

---

## 🤖 Test Automation (Cypress E2E)

This project includes an End-to-End (E2E) automated testing suite developed in **Cypress** using the **Page Object Model (POM)** architectural pattern.

### 🧪 Automated Test Coverage
- **Authentication & Login**: Validation of successful login flows, invalid credentials, required field constraints, and logout procedures.
- **User Management (Admin)**: Automated user creation, search filtering, profile editing, and system permission validations.

### 🛠️ Technologies & Patterns
- **Cypress** (E2E Testing Framework)
- **JavaScript**
- **Page Object Model (POM)**
- **Fixtures** (External test data management & mocks)

### 🏃 How to Run the Automated Tests

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/paulagranadoqa/orangeHRM-qa-testing.git](https://github.com/paulagranadoqa/orangeHRM-qa-testing.git)
   cd orangeHRM-qa-testing

## 📑 Documentation & Deliverables

All detailed test artifacts and report summaries are linked below for review:

- 📊 **[Google Sheets — Manual Test Cases Suite](https://docs.google.com/spreadsheets/d/1nwSpaWZ63Q5faeRIlySQHyWWaoZzzA0YVFqa4qf6k74/edit?usp=sharing):** Interactive spreadsheet containing all 86 detailed test cases organized by module (Login, PIM, Leave, Time, Admin, etc.) using Gherkin-style syntax (`Given-When-Then`).
- 📄 **[Google Docs — Master QA Summary Report](https://docs.google.com/document/d/1S-mnxnr6lh0iqo99PUVQpenVkMVVUfeyF-Mc8dt_EV4/edit?usp=sharing):** Executive report detailing test execution scope, environment analysis, defect logs, and strategic recommendations.
- 📸 **Defect Evidence & Video Logs:** Screen recordings (Jam.dev) and screenshot evidence attached directly to each registered [GitHub Issue](../../issues).

---

## 🛠️ Tech Stack & QA Tools

- **Test Methodology:** Manual Black-Box Testing, BDD (Behavior-Driven Development), Exploratory Testing
- **Test Management & Docs:** Google Sheets, Google Docs, GitHub Markdown
- **UI & DOM Validation:** Chrome DevTools (Elements, Console, Device Emulation, Network throttling)
- **Evidence Capture:** Jam.dev / Screen Recorder
- **Environment:** Web (Google Chrome v126 / Windows 10/11)
- **Future Automation Scope:** Cypress / JavaScript (API & E2E Automated Suites)
