# Workflow Audit & AI Delegation Strategy

**Student / Intern**: Nalin Tuscano  
**Program**: B.Tech Information Technology, St. Francis Institute of Technology (SFIT), Mumbai  
**Track**: FlyRank AI Internship — Frontend AI Engineering Track  
**Date**: October 2026  

---

## 1. Executive Summary
This document provides a realistic audit of 12 recurring tasks across my academic studies, frontend development, internship assignments, and career development. Each task is classified into an actionable human–AI workflow model to maximize productivity, maintain academic integrity, and build high-quality engineering habits.

---

## 2. 12-Task Workflow Audit Table

| # | Task | Frequency / Context | Classification | Rationale |
| :-: | :--- | :--- | :--- | :--- |
| **1** | Sitting for semester university exams and in-person college lab practicals | Exam periods & bi-weekly lab sessions | **Just me** | Requires personal presence, authentic subject mastery, and institutional academic integrity that cannot and should not be delegated. |
| **2** | Making career decisions, choosing internship priorities, and personal self-reflection | Monthly or at major career milestones | **Just me** | Involves personal values, individual goals, and long-term accountability that only I can evaluate and decide for my own trajectory. |
| **3** | Drafting technical LinkedIn posts and project milestone summaries | Weekly after completing assignments or features | **Delegate to AI with review** | AI quickly creates structured drafts from my raw notes, which I then review, edit, and personalize to match my authentic voice. |
| **4** | Generating initial boilerplate files and configuration templates (e.g., `.gitignore`, `LICENSE`, base types) | At the start of new projects or assignment milestones | **Delegate to AI with review** | AI reliably generates standard, error-free configurations, allowing me to quickly verify specifics like paths and licensing. |
| **5** | Writing initial unit test stubs and test cases for TypeScript utility functions | 2–3 times per week during frontend development | **Delegate to AI with review** | AI generates comprehensive edge-case inputs and test fixtures rapidly, which I verify against actual application requirements. |
| **6** | Debugging tricky React UI state issues and TypeScript compiler errors | 3–4 times per week during coding sessions | **Collaborate with AI** | Requires iterative back-and-forth problem solving where I supply runtime logs and behavior, and test AI suggestions in my IDE. |
| **7** | Planning component architecture and data flow for new frontend interfaces | Weekly when starting new project features | **Collaborate with AI** | Demands collaborative exploration to balance component modularity, props flow, and simplicity tailored to project requirements. |
| **8** | Breaking down complex computer science theory concepts (e.g., OS paging, SQL indexing, algorithms) | 2–3 times per week during SFIT course revision | **Collaborate with AI** | Interactive Q&A allows me to ask follow-up questions, request simple code examples, and test my own understanding step by step. |
| **9** | Auditing frontend interfaces for responsive layouts and WCAG accessibility standards | Weekly before submitting frontend code | **Collaborate with AI** | AI identifies missing ARIA labels and responsive CSS issues while I inspect elements across viewports and test screen reader behavior. |
| **10** | Formatting code style and fixing deterministic syntax issues (Prettier / ESLint) | On every git commit (continuous) | **Fully automate** | Linters and formatters follow fixed, deterministic rules that run automatically via pre-commit hooks without manual intervention. |
| **11** | Running TypeScript type checks and build verification before git pushes | On every git push (continuous) | **Fully automate** | Automated Git pre-push scripts (`npm run build` / `tsc --noEmit`) catch breaking errors reliably without manual oversight. |
| **12** | Generating release changelogs and semantic version tags from Conventional Commits | At the completion of each project milestone | **Fully automate** | Standardized commit messages allow automated release tools to parse and generate accurate changelogs with zero manual effort. |

---

## 3. Three Target Tasks for FL-02 Through FL-04

The following three tasks are selected from the audit for reuse in subsequent prompting, collaboration, and automation assignments.

### Target Task 1: Debugging and Refactoring a React/TypeScript Component
- **Starting Input**: A buggy or unoptimized React functional component written in TypeScript, along with its runtime error message, unwanted re-rendering behavior, or type mismatch description.
- **Expected Output**: A clean, refactored component resolving the issue, typed interfaces without `any`, and concise comments explaining why the fix works.
- **Measurable Definition of Success**:
  1. Zero TypeScript compiler errors (`tsc --noEmit` returns exit code 0).
  2. The reported bug or re-render is eliminated during manual browser testing.
  3. No unnecessary external libraries or code bloat are introduced.
- **What I Must Personally Verify**: Test the component live in the browser, check edge cases (empty states, loading states), and confirm compliance with project engineering guidelines (`GEMINI.md`).

### Target Task 2: Converting Raw Technical Notes into a Structured Study Guide
- **Starting Input**: Unstructured, rough lecture or study notes covering an IT engineering topic (e.g., Database Indexing, React Hooks Lifecycle, or CSS Layouts).
- **Expected Output**: A structured markdown reference document containing: a 1-paragraph plain-English concept summary, key mechanisms, a comparative summary table, and practical code snippets.
- **Measurable Definition of Success**:
  1. Captures 100% of the technical concepts present in the raw input.
  2. Readable and understandable in under 3 minutes using simple English.
  3. Contains zero fabricated terms, incorrect technical definitions, or hallucinated facts.
- **What I Must Personally Verify**: Cross-check definitions against authoritative sources (official documentation or academic textbooks) to ensure factual accuracy before exam study.

### Target Task 3: Auditing Frontend UI for Responsiveness and WCAG 2.1 AA Accessibility
- **Starting Input**: The HTML/JSX markup and CSS stylesheet of a responsive web page, along with target viewport breakpoints (mobile: 375px, tablet: 768px, desktop: 1200px).
- **Expected Output**: An audit report detailing accessibility violations, color contrast deficiencies, missing semantic tags, and a diff block containing the corrected CSS and JSX.
- **Measurable Definition of Success**:
  1. All text elements meet the WCAG 2.1 AA minimum contrast ratio of 4.5:1.
  2. All interactive elements (buttons, inputs, links) have descriptive labels or `aria-label` attributes.
  3. Layout adapts with zero horizontal overflow across viewports from 320px to 1440px.
- **What I Must Personally Verify**: Inspect layout responsiveness using browser DevTools device emulation and test keyboard accessibility using only `Tab`, `Shift+Tab`, and `Enter`.

---

## 4. Manual Implementation Checklist

The following external accounts, training, and setup steps require direct user action outside this IDE:

- [ ] **Claude Account Setup**: Log in or create a free account at [claude.ai](https://claude.ai).
- [ ] **ChatGPT Account Setup**: Log in or create a free account at [chatgpt.com](https://chatgpt.com).
- [ ] **Anthropic Academy Enrollment**:
  - Visit [anthropic.com](https://anthropic.com) or the Anthropic Academy portal.
  - Enroll in the free course: **"AI Fluency: Framework & Foundations"**.
  - Complete at least **Module 1** and save notes/confirmation.
- [ ] **Create Claude Project**:
  - Open Claude, navigate to **Projects**, and select **Create Project**.
  - Name the project: `FlyRank Frontend AI Engineering`.
  - Copy and paste the instructions from `CLAUDE_PROJECT_INSTRUCTIONS.md` into the Project Custom Instructions field.
- [ ] **Capture Claude Project Screenshot**:
  - Take a clear screenshot of the configured Claude Project showing your project name and custom instructions.
  - Save the screenshot for your FlyRank portal submission.
- [ ] **Submit Deliverables on FlyRank Portal**:
  - Upload `WORKFLOW_AUDIT.md`.
  - Upload the Claude Project screenshot.
  - Confirm all three target tasks and manual checklist items are documented.
