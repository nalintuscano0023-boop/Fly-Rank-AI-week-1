# Workflow Audit & AI Delegation Strategy

**Student / Intern**: Nalin Tuscano  
**Program**: B.Tech Information Technology, St. Francis Institute of Technology (SFIT), Mumbai  
**Track**: FlyRank AI Internship — Frontend AI Engineering Track  
**Date**: October 2026  

---

## 1. Context & Purpose
This document audits 12 recurring tasks across my academic coursework at SFIT, frontend development, internship assignments, and personal learning. Each task is classified into one of four human–AI workflow categories to establish disciplined engineering habits, safeguard academic integrity, and target future automation opportunities.

---

## 2. 12-Task Workflow Audit Table

| # | Task | Frequency / Context | Classification | Rationale |
| :-: | :--- | :--- | :--- | :--- |
| **1** | Writing university semester exams and completing in-person college lab practicals | During semester exam periods and scheduled college lab evaluations | **Just me** | Requires authentic personal knowledge, physical presence, and strict adherence to university academic integrity rules. |
| **2** | Evaluating career goals, setting internship priorities, and personal self-reflection | During semester milestones and career planning checkpoints | **Just me** | Involves personal values, self-assessment, and individual accountability that cannot be outsourced to any external tool. |
| **3** | Drafting technical LinkedIn posts and project milestone summaries | After completing project milestones or key learning topics | **Delegate to AI with review** | AI rapidly drafts clear initial outlines from my raw technical notes, which I then review, edit, and personalize. |
| **4** | Generating initial boilerplate files and configuration templates (e.g., `.gitignore`, `LICENSE`, base types) | At the start of new frontend projects or assignment repos | **Delegate to AI with review** | AI reliably generates standard configuration structures, allowing me to verify paths, project rules, and license terms. |
| **5** | Writing initial unit test stubs and test fixtures for TypeScript utility functions | During frontend coding sessions when adding utility modules | **Delegate to AI with review** | AI creates initial test inputs and edge cases quickly, which I inspect and run against actual application logic. |
| **6** | Debugging complex React UI state glitches and TypeScript compiler errors | During active frontend coding and debugging sessions | **Collaborate with AI** | Requires iterative back-and-forth problem solving: I provide logs and symptoms, and test suggested fixes in my IDE. |
| **7** | Planning component architecture, props hierarchy, and state flow for new UI features | When architecting new frontend components or interface layouts | **Collaborate with AI** | Demands joint exploration to balance component reusability, modularity, and clean code principles. |
| **8** | Breaking down difficult computer science concepts (e.g., OS paging, SQL indexing, algorithms) | During exam preparation and course revision sessions | **Collaborate with AI** | Interactive Q&A allows me to ask follow-up questions, request analogies, and verify my understanding step by step. |
| **9** | Auditing frontend interfaces for responsive CSS behavior and WCAG accessibility standards | Before completing or submitting frontend assignments | **Collaborate with AI** | AI flags accessibility issues and media query gaps while I inspect responsive layouts and verify keyboard navigation. |
| **10** | Formatting code style and fixing deterministic syntax issues (Prettier / ESLint) | Target workflow: Candidate for automated pre-commit tooling | **Fully automate** | High-value candidate for automation because style formatters follow fixed, deterministic rules without manual judgment. |
| **11** | Running TypeScript compiler checks and build validation before git pushes | Target workflow: Candidate for pre-push script automation | **Fully automate** | High-value candidate for automation because running type checks (`tsc --noEmit`) programmatically stops broken commits. |
| **12** | Generating release changelogs and version tags from Conventional Commits | Target workflow: Candidate for milestone release pipelines | **Fully automate** | High-value candidate for automation because standardized commit prefixes can be parsed mechanically by release tools. |

> *Note on Automation*: Tasks 10–12 represent target automation workflows identified during this audit. They are candidates for future script and CI/CD hook configuration rather than active automations currently configured in this repository.

---

## 3. Three Target Tasks for FL-02 Through FL-04

The following three tasks are selected from the audit for reuse in subsequent prompting, collaboration, and automation assignments.

### Target Task 1: Debugging and Refactoring a React/TypeScript Component
- **Starting Input**: A faulty or unoptimized React functional component written in TypeScript, accompanied by runtime console errors, unwanted re-rendering symptoms, or type mismatch messages.
- **Expected Output**: A clean, refactored component that resolves the error, includes strict TypeScript interfaces without `any`, and provides concise comments explaining the resolution.
- **Measurable Definition of Success**:
  1. TypeScript compiler checks pass cleanly (`tsc --noEmit` exits with 0 errors).
  2. The reported runtime error or re-render bug is eliminated in manual browser testing.
  3. No unrequested libraries or unnecessary boilerplate dependencies are introduced.
- **What I Must Personally Verify**: Test component behavior live in the browser, verify props and state updates across edge cases (empty states, loading states), and confirm adherence to project guidelines (`GEMINI.md`).

### Target Task 2: Converting Raw Technical Notes into a Structured Study Guide
- **Starting Input**: Unstructured, rough lecture notes covering a core IT engineering concept (e.g., Database Indexing, React Hooks Lifecycle, or CSS Grid/Flexbox Layouts).
- **Expected Output**: A concise, structured markdown guide containing a 1-paragraph plain-English concept summary, key mechanisms, a comparative summary table, and a verified code snippet.
- **Measurable Definition of Success**:
  1. Captures all core technical points present in the source notes without omitting critical requirements.
  2. Concise enough to be read and understood in under 3 minutes using simple English.
  3. All technical definitions and code snippets match verified documentation (e.g., MDN, official React docs, or SFIT course textbooks).
- **What I Must Personally Verify**: Cross-check definitions and code behavior against official technical documentation to confirm factual accuracy and eliminate unverified claims.

### Target Task 3: Auditing Frontend UI for Responsiveness and WCAG 2.1 AA Accessibility
- **Starting Input**: The JSX/HTML markup and CSS styles of a responsive webpage, along with target viewport breakpoints (mobile: 375px, tablet: 768px, desktop: 1200px).
- **Expected Output**: An audit report identifying accessibility shortcomings, color contrast deficiencies, missing semantic tags, and a diff snippet containing corrected CSS and JSX.
- **Measurable Definition of Success**:
  1. **Automated Verification**: Automated scanner (e.g., axe DevTools or Lighthouse) detects zero critical accessibility violations, with text meeting the 4.5:1 contrast ratio.
  2. **Responsive Layout**: Zero horizontal overflow or layout breakages across viewport widths from 320px to 1440px.
  3. **Interactive Labelling**: All interactive elements (buttons, inputs, links) possess accessible names or `aria-label` attributes.
- **What I Must Personally Verify**: Perform manual keyboard-only navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`) to confirm logical tab order and visible focus rings, and conduct device emulation testing in browser DevTools.

---

## 4. Manual Implementation Checklist (Pending External Steps)

The following external accounts, coursework, and Claude setup tasks require my direct personal execution outside this IDE:

- [ ] **Account Setup (Free Tiers)**:
  - Verify active free account on [chatgpt.com](https://chatgpt.com).
  - Verify active free account on [claude.ai](https://claude.ai).
  - Access Anthropic Academy platform.
- [ ] **Course Enrollment & Completion**:
  - Enroll in the free course: **"AI Fluency: Framework & Foundations"** on Anthropic Academy.
  - Complete at least **Module 1** and retain study notes.
- [ ] **Claude Project Creation**:
  - Open Claude, go to **Projects**, and create a project named `FlyRank Frontend AI Engineering`.
  - Copy custom instructions from `CLAUDE_PROJECT_INSTRUCTIONS.md` and save them in the project settings.
- [ ] **Screenshot Capture**:
  - Capture a clear screenshot showing the configured Claude Project (title and custom instructions visible).
  - Save as `claude_project_setup.png` for submission.
- [ ] **FlyRank Portal Submission**:
  - Submit the workflow audit table, the three target tasks with success criteria, and the genuine Claude Project screenshot.
