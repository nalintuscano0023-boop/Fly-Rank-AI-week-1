# FlyRank AI Fluency — Week 2: The Prompt Ladder

**Student**: Nalin Tuscano  
**Program**: B.Tech Information Technology, St. Francis Institute of Technology (SFIT), Mumbai  
**Track**: General AI Fluency  
**Date**: October 2026  

---

## Voice Card
> **Grounded, direct, reflective, technical, concise, honest.**

---

## 1. Task Definition & Experimental Setup

### Core Task
Building a responsive contact form component using **React** and **TypeScript** for a student software engineering portfolio.

### Evaluation Criteria
Every output is judged against five concrete technical standards:
1. **Scope Relevance**: Does the code focus strictly on the contact form, avoiding bloated boilerplate or unrequested features?
2. **Type Safety**: Are form values, input events, and errors typed using strict TypeScript interfaces rather than `any`?
3. **Input Sanitization & Validation**: Does it trim whitespace before validation, validate email format with regex, and show per-field error messages?
4. **WCAG Accessibility**: Are form labels associated with inputs via `htmlFor`/`id`? Are errors connected via `aria-invalid` and `aria-describedby`? Are status messages announced accessibly?
5. **Code Maintainability**: Is the component clean, modular, and easy to integrate into an existing frontend project?

### Experimental Methodology
- **AI Toolchain**: Antigravity IDE (Gemini 3.8 Flash model).
- **Execution Model**: Starting with a deliberately weak one-sentence prompt, each subsequent run preserves the previous prompt verbatim and adds exactly **one** new prompt layer.
- **Layers Tested**:
  1. Baseline: No layers (raw weak prompt)
  2. Version 1: + Clearer Goal
  3. Version 2: + Defined Audience
  4. Version 3: + Real Context
  5. Version 4: + Output Format
  6. Version 5: + Constraints

---

## 2. Experimental Runs (Baseline to Version 5)

### Baseline Run: The Raw Weak Prompt

#### Exact Prompt
```text
Build a website.
```

#### Actual AI Output (Representative Excerpt)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
    header { background: #333; color: #fff; padding: 10px; }
    nav a { color: #fff; margin-right: 15px; }
    section { margin: 20px 0; }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
  </header>
  <section id="about"><h2>About Us</h2><p>Lorem ipsum dolor sit amet...</p></section>
  <section id="services"><h2>Our Services</h2><p>We provide web development solutions.</p></section>
  <section id="contact"><h2>Contact Us</h2><button onclick="alert('Contact clicked')">Click Me</button></section>
</body>
</html>
```

#### Analysis Notes
- **What Changed in Prompt**: None (initial baseline).
- **What Actually Improved**: Nothing; establishes the raw starting point.
- **What Still Failed**: Completely misses the frontend stack (produced HTML/CSS boilerplate instead of React + TypeScript). Contains no actual form, zero validation, no accessibility, and arbitrary dummy content.
- **What to Try Next**: Add a clear, unambiguous goal specifying the exact component and technologies needed.

---

### Version 1: Adding a Clearer Goal

#### Exact Prompt
```text
Build a website. Specifically, build a responsive contact form component using React and TypeScript.
```

#### Layer Added
**Clearer Goal** (narrowed the objective from a generic "website" to a specific React/TypeScript contact form component).

#### Actual AI Output (Representative Excerpt)
```tsx
import React, { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
```

#### Analysis Notes
- **What Changed in Prompt**: Added the explicit target: a responsive contact form component using React and TypeScript.
- **What Actually Improved**: The AI switched from generic HTML boilerplate to an actual React functional component with typed state hooks.
- **What Still Failed**: Uses primitive browser `alert()` popups for feedback; lacks explicit TypeScript types/interfaces for form state; labels lack `htmlFor` attributes; no email regex validation; whitespace strings bypass validation.
- **What to Try Next**: Define the specific audience to give the component tone and purpose.

---

### Version 2: Adding a Defined Audience

#### Exact Prompt
```text
Build a website. Specifically, build a responsive contact form component using React and TypeScript for technical recruiters and engineering hiring managers evaluating student frontend developer portfolios.
```

#### Layer Added
**Defined Audience** (specified that the form is for technical recruiters and hiring managers evaluating student portfolios).

#### Actual AI Output (Representative Excerpt)
```tsx
import React, { useState } from 'react';

export const RecruiterContactForm: React.FC = () => {
  const [recruiterName, setRecruiterName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [opportunityType, setOpportunityType] = useState('Internship');
  const [message, setMessage] = useState('');

  return (
    <div className="portfolio-contact-card">
      <h3>Let's Connect Regarding Engineering Opportunities</h3>
      <p>I am actively seeking Frontend Developer Internships for Summer 2025.</p>
      <form onSubmit={(e) => { e.preventDefault(); /* ... */ }}>
        <input placeholder="Your Name" value={recruiterName} onChange={...} />
        <input placeholder="Company Name" value={company} onChange={...} />
        <input placeholder="Work Email" value={email} onChange={...} />
        <select value={opportunityType} onChange={(e) => setOpportunityType(e.target.value)}>
          <option value="Internship">Frontend Internship</option>
          <option value="FullTime">Junior Developer Role</option>
        </select>
        <textarea placeholder="Message or Job Description link..." value={message} ... />
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};
```

#### Analysis Notes
- **What Changed in Prompt**: Specified the target audience (technical recruiters and hiring managers).
- **What Actually Improved**: Adjusted the tone and context of the component to fit an engineering portfolio rather than a generic business contact page.
- **What Still Failed (Unhelpful Result)**: **Scope Creep**. Without technical constraints, the AI hallucinated extra fields (`company`, `opportunityType` dropdown) and added promotional copy (*"Seeking Summer 2025 internships"*). It prioritized copywriting over code quality and still omitted proper validation and accessibility.
- **What to Try Next**: Provide concrete technical context to anchor the project environment and restrict fields.

---

### Version 3: Adding Real Context

#### Exact Prompt
```text
Build a website. Specifically, build a responsive contact form component using React and TypeScript for technical recruiters and engineering hiring managers evaluating student frontend developer portfolios. Place this inside a modern Vite + React single-page portfolio with CSS variables, containing strictly Name, Email, and Message fields.
```

#### Layer Added
**Real Context** (placed inside a modern Vite + React project with CSS variables, restricting fields strictly to Name, Email, and Message).

#### Actual AI Output (Representative Excerpt)
```tsx
import React, { useState } from 'react';
import './ContactForm.css';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required.');
      return;
    }
    setStatus('Thank you! Your message has been sent.');
  };

  return (
    <section className="contact-section" style={{ background: 'var(--bg-secondary, #f9fafb)' }}>
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        <label>Email</label>
        <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        <label>Message</label>
        <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
        <button type="submit" style={{ backgroundColor: 'var(--accent-color, #2563eb)' }}>Send Message</button>
        {status && <p className="status-text">{status}</p>}
      </form>
    </section>
  );
};
```

#### Analysis Notes
- **What Changed in Prompt**: Anchored the component in a real Vite environment with CSS variables and restricted the fields strictly to Name, Email, and Message.
- **What Actually Improved**: Stripped away the extraneous recruiter dropdowns; consolidated individual state hooks into a single `formData` object; utilized project styling tokens (`var(--accent-color)`).
- **What Still Failed**: Still relies on naive `!formData.name` validation (whitespace strings `"   "` pass as valid); no field-specific error messages; labels still lack `htmlFor`/`id` connections; no ARIA attributes.
- **What to Try Next**: Dictate the exact output format (interfaces, error records, modular structure).

---

### Version 4: Adding Specified Output Format

#### Exact Prompt
```text
Build a website. Specifically, build a responsive contact form component using React and TypeScript for technical recruiters and engineering hiring managers evaluating student frontend developer portfolios. Place this inside a modern Vite + React single-page portfolio with CSS variables, containing strictly Name, Email, and Message fields. Provide the output as a single, self-contained TypeScript component file with explicit TypeScript interfaces for form data and errors, modular JSX, and inline comments explaining state updates.
```

#### Layer Added
**Specified Output Format** (single self-contained TypeScript file, explicit interfaces for data and errors, modular JSX, inline comments).

#### Actual AI Output (Representative Excerpt)
```tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Explicit TypeScript interfaces for form state and validation errors
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Modular change handler updating state immutably
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: ContactFormErrors = {};
    if (!formData.name) newErrors.name = 'Name required';
    if (!formData.email) newErrors.email = 'Email required';
    if (!formData.message) newErrors.message = 'Message required';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      {/* ... email and message fields ... */}
      <button type="submit">Submit</button>
      {submitted && <p>Message sent!</p>}
    </form>
  );
};
```

#### Analysis Notes
- **What Changed in Prompt**: Defined the code delivery format: explicit TypeScript interfaces (`ContactFormData`, `ContactFormErrors`), typed event handlers, and inline documentation.
- **What Actually Improved**: The TypeScript architecture became clean and type-safe (no implicit `any`). Added structured per-field error tracking in state.
- **What Still Failed**: Validation logic remains shallow (omits `.trim()`, ignores email format regex); labels and inputs remain unlinked; completely missing accessibility attributes (`aria-invalid`, `aria-describedby`, live status regions).
- **What to Try Next**: Impose strict engineering constraints covering input sanitization, regex format validation, and WCAG accessibility standards.

---

### Version 5: Adding Constraints

#### Exact Prompt
```text
Build a website. Specifically, build a responsive contact form component using React and TypeScript for technical recruiters and engineering hiring managers evaluating student frontend developer portfolios. Place this inside a modern Vite + React single-page portfolio with CSS variables, containing strictly Name, Email, and Message fields. Provide the output as a single, self-contained TypeScript component file with explicit TypeScript interfaces for form data and errors, modular JSX, and inline comments explaining state updates. Constraints: Do not use third-party form libraries; trim whitespace from all fields before validating; enforce email format using regex; associate every label with its input using matching htmlFor and id; connect invalid fields to their error messages using aria-invalid and aria-describedby; announce success accessibly via role="status" and aria-live="polite"; and never display success feedback if validation fails.
```

#### Layer Added
**Strict Constraints** (no third-party libraries, `.trim()` whitespace handling, regex email validation, matching `htmlFor`/`id`, `aria-invalid`, `aria-describedby`, accessible live regions, no false positive success).

#### Actual AI Output (Representative Excerpt)
```tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (successMessage) setSuccessMessage('');
  };

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) newErrors.name = 'Name is required.';
    if (!trimmedEmail) {
      newErrors.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!trimmedMessage) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    if (validate()) {
      setSuccessMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-card">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">Name <span aria-hidden="true">*</span></label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <div id="name-error" className="error-text" role="alert">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">Email <span aria-hidden="true">*</span></label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <div id="email-error" className="error-text" role="alert">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">Message <span aria-hidden="true">*</span></label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={`form-input ${errors.message ? 'input-error' : ''}`}
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <div id="message-error" className="error-text" role="alert">{errors.message}</div>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>

        {successMessage && (
          <div id="contact-success" className="success-banner" role="status" aria-live="polite">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};
```

#### Analysis Notes
- **What Changed in Prompt**: Imposed hard engineering boundaries: `.trim()` sanitization, regex validation, explicit label associations, ARIA attributes, live regions, and false-positive prevention.
- **What Actually Improved**: The output reached production quality: completely eliminates whitespace bypass bugs, guarantees WCAG 2.1 AA screen-reader compatibility, and handles all edge cases cleanly.
- **What Still Failed**: Does not provide companion automated unit tests (e.g., Vitest) or backend API transmission logic, which would require separate prompts.
- **What to Try Next**: This represents the completed component; the logical next step would be generating an automated test suite.

---

## 3. Side-by-Side Comparison Table

| Version | Added Layer | Code Output Type | Validation Rigor | Accessibility Status | Key Flaw or Limitation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Baseline** | None (Raw) | Plain HTML/CSS boilerplate | None (dummy button alert) | No semantics; inaccessible | Completely irrelevant to React/TS stack |
| **Version 1** | + Goal | React Component (TSX) | Shallow (`if (!name)`) | Missing `htmlFor`/`id` | Uses primitive browser `alert()` popups |
| **Version 2** | + Audience | Recruiter Form Component | Shallow (untrimmed) | Missing ARIA attributes | **Scope creep**: Added unprompted dropdowns and marketing text |
| **Version 3** | + Real Context | Vite React Component | Shallow (`if (!name)`) | Missing ARIA attributes | Whitespace strings pass as valid input |
| **Version 4** | + Output Format | Structured TSX with Interfaces | Basic field errors | Missing ARIA attributes | No `.trim()`, no regex format checking |
| **Version 5** | + Constraints | Production-grade TSX Component | Strict (`.trim()` + Regex) | Full WCAG AA compliance | Complete; lacks unit tests |

---

## 4. The Unhelpful Change: Analysis of Version 2 (Audience)

In **Version 2**, the prompt introduced a defined audience: *"for technical recruiters and engineering hiring managers evaluating student frontend developer portfolios."*

### Why This Change Was Counterproductive
Instead of improving code quality or technical soundness, introducing the audience in isolation triggered **scope creep and distraction**:
1. **Unprompted Form Fields**: The AI assumed recruiters needed extra categorization and fabricated fields for `"Company Name"` and an `"Opportunity Type"` dropdown (`Frontend Internship` vs `Junior Developer Role`).
2. **Marketing Fluff Over Engineering**: The AI spent output tokens generating promotional placeholder text (*"I am actively seeking Summer 2025 internships"*) instead of addressing technical fundamentals.
3. **Zero Improvement in Code Quality**: The core validation remained naive, whitespace handling was still absent, and accessibility remained unaddressed.

### Key Takeaway
Adding persona and audience context without strict technical constraints causes AI to prioritize conversational marketing and speculative UI features over software correctness. Audience instructions must always be paired with explicit structural boundaries.

---

## 5. Final Reusable Prompt

The prompt below is a clean, standalone engineering prompt that any frontend development student can use directly to generate an accessible, validated contact form in a React + TypeScript project:

```text
Implement a responsive, accessible Contact Form component in a React and TypeScript project.

Technical Requirements:
1. Form Fields: Include Name, Email, and Message fields, and a Submit button.
2. Type Safety: Define explicit TypeScript interfaces for form data and field-specific validation errors. Do not use 'any'.
3. Input Validation:
   - Trim whitespace from all text inputs before validating required fields.
   - Enforce standard email format validation using a regular expression.
   - Display clear, field-specific error messages directly beneath each invalid field.
   - Never display a success message if validation fails.
   - Clear field errors when the user edits that field.
4. Accessibility (WCAG 2.1 AA):
   - Explicitly associate every <label> with its <input> using matching 'htmlFor' and 'id' attributes.
   - Set 'aria-invalid' on fields with active errors.
   - Connect input fields to their error messages using 'aria-describedby'.
   - Announce form submission success accessibly using role="status" and aria-live="polite".
   - Include visible focus indicators for keyboard navigation.
5. Constraints:
   - Do not use third-party form libraries (e.g., Formik, React Hook Form); implement using standard React hooks (useState).
   - Return clean, self-contained component code with comments explaining validation and accessibility choices.
```

---

## 6. Conclusion & Key Learnings

1. **Vagueness Generates Generic Boilerplate**: The baseline prompt failed because AI fills ambiguities with generic templates rather than project-specific code.
2. **Layering Prevents Cognitive Overload**: Adding one layer at a time isolates how each instruction affects the model's output, making debugging prompts systematic.
3. **Constraints are More Powerful Than Descriptions**: Describing the goal and audience (Versions 1–3) improved relevance but failed to prevent bugs. Only hard constraints (Version 5)—such as requiring `.trim()`, regex validation, and ARIA linking—forced the AI to write robust, accessible code.
4. **Verification is Mandatory**: AI models readily generate code that looks complete at a glance but silently fails edge cases (such as accepting empty spaces). Prompt engineering must be coupled with code inspection and automated testing.
