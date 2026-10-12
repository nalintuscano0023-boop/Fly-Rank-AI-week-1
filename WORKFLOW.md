# FE-03: AI-Assisted Workflow Drill Analysis

## 1. Prompts Evaluated
- **Round 1 (Vague Prompt)**:
  `"Build a settings form in this project."`
- **Round 2 (Precise Prompt)**:
  `"Implement a small, accessible settings form in this React + TypeScript + Vite project. Requirements: Include Name and Email fields and a Save Settings button. Both fields are required. Trim whitespace before validation. Validate email format and display a clear, field-specific error message. Do not show a success message when validation fails. Show a success message only after valid submission. Associate every label with its input using matching htmlFor and id attributes. Use aria-invalid and aria-describedby where appropriate to connect invalid fields to their error messages. Announce form feedback accessibly. Support keyboard navigation and visible focus indicators. Use a responsive, simple layout consistent with the existing project styles. Use strict TypeScript types and follow the project's existing conventions. Do not add unrequested controls or features. Keep the implementation small and maintainable. Before coding, inspect the existing files and present a short implementation plan. Then implement the form."`

---

## 2. Implementation Differences in Git Diff
Inspecting the Git diff between `workflow-vague` (`167c416`) and `workflow-precise` (`7409624`) revealed stark engineering contrasts:
- **Validation & Whitespace**: Round 1 relied on `if (!name || !email)` without `.trim()`. Round 2 trimmed values before evaluation and enforced email format validation with regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
- **Error Feedback**: Round 1 displayed a single generic message (`"Please fill in all fields."`). Round 2 used a typed `FormErrors` state delivering discrete inline alerts under each field.
- **Accessibility**: Round 1 omitted `htmlFor` and `id` linking, leaving labels unassociated for screen readers. Round 2 linked all inputs, provided `aria-invalid`, linked errors using `aria-describedby`, and announced success accessibly via `role="status"` and `aria-live="polite"`. Round 2 also styled visible `:focus-visible` rings in CSS.
- **Scope Discipline**: Round 1 hallucinated an unrequested notification checkbox. Round 2 strictly implemented only requested controls.

---

## 3. Genuine AI Mistake Identified
During Round 1, the AI committed a critical validation flaw: accepting whitespace-only input as valid data. Because `"   "` is truthy in JavaScript, submitting spaces bypassed `!name` and triggered `"Settings saved successfully!"`. This bug was caught by code inspection and subsequently verified with an automated test in Round 2 (`rejects whitespace-only inputs as empty fields`).

---

## 4. Testing Results & Timing
- **Round 1**: `npm test` executed 1 baseline test (1 passed); no form tests existed. `npm run build` succeeded.
- **Round 2**: `npm test` executed 7 automated unit and accessibility tests across 2 test suites; all 7 passed. `npm run build` passed with zero TypeScript errors.
- **Timing**: Review and fixing durations were not formally measured with a timer during the drill.

---

## 5. Key Learnings
Vague prompts encourage superficial code, scope creep, and omitted edge cases. Precise prompts serve as an engineering specification, forcing robust validation, WCAG accessibility, and automated verification. Automated testing and rigorous Git diff inspections remain essential to ensure software correctness.
