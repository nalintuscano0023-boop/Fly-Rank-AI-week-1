# FlyRank Week 2 — Frame It as Cases
**Author**: Nalin Tuscano  
**Education**: B.Tech Information Technology, St. Francis Institute of Technology (SFIT), Mumbai  
**Internship Track**: FlyRank AI Internship — Frontend AI Engineering Track  
**Date**: October 2026  

---

## 1. Portfolio Voice Card

### Core Voice Descriptors
> **Grounded, direct, reflective, technical, concise, honest.**

- **How I Sound**: A curious, thoughtful engineering student who explains architectural choices clearly, discusses trade-offs and bugs openly, and relies on public GitHub code, type safety, and automated tests to demonstrate competence.
- **What I Avoid**: Corporate buzzwords (*"visionary"*, *"cutting-edge"*, *"disruptive"*), senior-level posturing, inflated commercial metrics, and unverified achievements.

### Claude Project Instruction Snippet
```markdown
## Voice & Tone Rules (Nalin Tuscano)
- Tone: Grounded, direct, reflective, technical, concise, and honest.
- Style: Use simple, plain English without buzzwords or corporate hype.
- Transparency: Clearly distinguish between completed features and ongoing work. Never invent users, metrics, clients, or completed courses.
- Technical Focus: Emphasize concrete frontend details (React component modularity, TypeScript interfaces, accessibility attributes, CSS layouts, and test coverage).
```

---

## 2. Project Case Studies

### Case Study 1: SpacePulse — Space Intelligence & Visualization Platform
- **Role & Context**: Frontend Developer (Student Project)
- **Tech Stack**: React, TypeScript, Vite, Three.js
- **Primary Evidence**: [GitHub Repository: SpacePulse](https://github.com/nalintuscano0023-boop/SpacePulse.git)

#### Problem
Space science and satellite mission information is frequently presented through dense, static text articles that can be intimidating to explore. As an IT student fascinated by space technology, I wanted to investigate how modern web technologies could make space data more visual and accessible. My goal was to move beyond textbook exercises and build an engaging, multi-component interactive frontend application from scratch.

#### What I Did & Decided
- **Architecture**: Selected React and TypeScript bundled with Vite to establish a fast local development feedback loop and enforce strict type safety across component props and state.
- **Interactive 3D**: Integrated Three.js to render interactive 3D space graphics directly inside the browser canvas.
- **Layout & Usability**: Focused on designing clean interface containers, intuitive navigation, and responsive layouts that adapt smoothly across desktop and mobile screens.
- **Scope Discipline**: Chose to prioritize solid core layout architecture and interactive rendering before attempting complicated live data integrations.

#### Outcome & Real Status
- **What Actually Works**: The base application structure, visual layout containers, responsive styling, and initial interactive 3D space canvas are functional and publicly inspectable in the repository.
- **Honest In-Progress Boundary**: This project is an active work in progress. Cross-device 3D canvas performance optimization and real-time space API integrations are planned next steps that are deliberately not claimed as complete until thoroughly tested.

---

### Case Study 2: FlyRank AI Engineering Workflow Drill (FE-01 / FE-03)
- **Role & Context**: Frontend AI Engineering Intern (Internship Workflow Drill)
- **Tech Stack**: React, TypeScript, Vite, Vitest, React Testing Library, Git
- **Primary Evidence**: [GitHub Repository: Fly-Rank-AI-week-1](https://github.com/nalintuscano0023-boop/Fly-Rank-AI-week-1.git) (branches `workflow-vague` and `workflow-precise`)

#### Problem
AI coding assistants often generate superficial code when given vague prompts. In forms, AI frequently overlooks edge cases—such as treating whitespace-only inputs as valid data—and regularly omits WCAG accessibility requirements (missing label associations and unannounced error states).

#### What I Did & Decided
- **Controlled A/B Git Drill**: Built a React settings form twice across isolated Git branches from an identical base commit. In Round 1 (`workflow-vague`), I used only a single vague prompt: *"Build a settings form in this project."* In Round 2 (`workflow-precise`), I provided a comprehensive engineering specification with explicit validation and accessibility constraints.
- **Input Sanitization**: Implemented mandatory `.trim()` whitespace handling and standard regex email validation, ensuring form errors appear inline under each invalid field.
- **Accessibility (WCAG 2.1 AA)**: Linked labels and inputs with matching `htmlFor` and `id` attributes, connected error messages via `aria-invalid` and `aria-describedby`, added `:focus-visible` outline rings, and announced submission feedback through `role="status"` with `aria-live="polite"`.
- **Automated Verification**: Wrote 6 automated tests using Vitest and React Testing Library covering empty fields, whitespace inputs, invalid formats, and ARIA attributes.
- **Engineering Rules**: Documented the findings in `WORKFLOW.md` and added testable project rules into `GEMINI.md`.

#### Outcome & Real Status
- **What Actually Works**: Proved through real Git diff inspection that precise prompt engineering and automated verification catch genuine AI bugs (such as whitespace bypassing validation). The implementation passes 7 automated tests (`npm test`) and compiles cleanly with zero TypeScript errors (`npm run build`).
- **Verified Deliverables**: Both feature branches remain independently inspectable on GitHub.

---

### Note on Project 3 (Sitemap Gap Analysis)
My portfolio sitemap recommended 2–3 project cards. Rather than fabricating an unverified academic project or claiming achievements in software that cannot be publicly inspected, this third slot is deliberately maintained as an open placeholder for an upcoming SFIT coursework milestone or capstone project. Highlighting two genuine, inspectable projects is far more defensible to a hiring manager than padding a portfolio with unverified claims.

---

## 3. Short Portfolio Bio

> I am a B.Tech Information Technology student at St. Francis Institute of Technology (SFIT), Mumbai, and a Frontend AI Engineering Intern at FlyRank. I focus on building clean, responsive, and type-safe web interfaces using React, TypeScript, and modern CSS. My approach emphasizes solid engineering fundamentals: modular component design, WCAG accessibility, disciplined Git version control, and automated testing to ensure AI-assisted workflows produce reliable, maintainable code.

---

## 4. Contact & Call-to-Action (CTA) Copy

**Target Audience**: Frontend Engineering Hiring Managers evaluating candidates for developer internships.

### Headline
**Let's Connect for Frontend Engineering Internships**

### Body Copy
> If you are looking for an intern who writes clean, type-safe React and TypeScript code, tests edge cases, and communicates engineering trade-offs honestly, I would welcome the opportunity to speak with you.
> 
> Explore my code on GitHub or reach out directly to schedule a conversation:
> - **LinkedIn**: [linkedin.com/in/nalintuscano](https://www.linkedin.com/in/nalintuscano)
> - **GitHub**: [github.com/nalintuscano0023-boop](https://github.com/nalintuscano0023-boop)
> - **Email**: nalintuscano0023@gmail.com

---

## 5. Generic AI vs. Edited Copy Comparison

### Generic AI-Generated Draft
> *"I am a visionary, full-stack digital architect leveraging cutting-edge AI paradigms and enterprise-grade frameworks to build revolutionary digital experiences with unprecedented scalability."*

### My Edited Version
> *"I am an IT student and frontend engineer who builds responsive, type-safe web interfaces using React and TypeScript, backing up my code with automated tests and disciplined Git workflows."*

### Analysis of the Difference
- **Buzzwords vs. Specificity**: The generic draft relies on empty buzzwords (*"visionary"*, *"cutting-edge"*, *"revolutionary"*, *"unprecedented"*) that convey zero technical information. The edited version specifies the exact technologies (React, TypeScript), core competencies (responsive layouts, type safety), and engineering practices (automated testing, Git workflows).
- **Senior Posturing vs. Authentic Grounding**: The generic version claims to be a "full-stack digital architect" operating at "enterprise scale"—claims that an undergraduate student cannot defend in a technical interview. The edited version honestly frames me as an IT student and frontend engineer, setting expectations that match my inspectable code and GitHub repositories.
- **Credibility**: A hiring manager immediately recognizes the generic version as AI-generated marketing fluff. The edited version reads as a direct, credible engineer who takes pride in practical craftsmanship.
