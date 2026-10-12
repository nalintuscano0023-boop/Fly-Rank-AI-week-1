import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Baseline Application Smoke Test', () => {
  it('renders the application heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'FlyRank FE-03: AI-Assisted Workflow Drill'
    );
  });
});
