# AI Coding Guidelines & Instructions for Antigravity

This repository is governed by the following engineering instructions and behavioral rules for AI coding assistants.

---

## 1. Preferred Technology Stack
- **Framework**: React (latest stable functional components with hooks).
- **Language**: TypeScript (strict mode, explicit interfaces/types, avoid `any`).
- **Tooling & Bundler**: Vite for fast bundling and hot module replacement.
- **Styling**: Modern CSS / Vanilla CSS with design system tokens and consistent variables.

---

## 2. Code Quality & Maintainability
- Write clean, modular, and self-documenting code.
- Follow separation of concerns: split reusable UI elements into focused components.
- Maintain consistent formatting, naming conventions, and project structure.
- Preserve existing comments and docstrings unless explicitly asked to modify them.

---

## 3. UI/UX & Aesthetics
- Prioritize responsive, mobile-first design across all screen viewports.
- Create polished, modern interfaces with high visual quality, consistent typography, and smooth micro-interactions.
- Ensure visual hierarchy and coherent color palettes.

---

## 4. Accessibility & Performance
- Adhere to WCAG 2.1 AA standards: semantic HTML5 elements, appropriate ARIA attributes, and accessible color contrast.
- Ensure interactive elements are keyboard navigable and focus states are clearly visible.
- Optimize asset loading, component re-renders, and bundle sizes for fast load times.

---

## 5. Security & Secrets Management
- **Zero Secrets in Code**: Never hardcode API keys, tokens, credentials, or sensitive secrets in code or git commits.
- Use environment variables (`.env.local`) for configuration and ensure all secret keys are referenced through environment variables and ignored by `.gitignore`.

---

## 6. Scope & Change Control
- **Make only requested changes**: Do not refactor unrelated code or perform broad speculative rewrites.
- **Avoid bloat**: Do not introduce unnecessary files, demo boilerplate, third-party libraries, or features unless explicitly requested.
- Confirm critical design decisions with the developer before executing destructive operations.
