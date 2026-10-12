import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SettingsForm } from './SettingsForm';

describe('SettingsForm Component (FE-03 Precise Implementation)', () => {
  it('renders form fields and associates labels with inputs via htmlFor and id', () => {
    render(<SettingsForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /save settings/i });

    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('id', 'settings-name');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('id', 'settings-email');
    expect(submitButton).toBeInTheDocument();
  });

  it('displays validation errors and does NOT show success when submitting empty fields', () => {
    render(<SettingsForm />);

    const submitButton = screen.getByRole('button', { name: /save settings/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.queryByText(/settings saved successfully/i)).not.toBeInTheDocument();
  });

  it('rejects whitespace-only inputs as empty fields', () => {
    render(<SettingsForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /save settings/i });

    fireEvent.change(nameInput, { target: { value: '   ' } });
    fireEvent.change(emailInput, { target: { value: '   ' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
    expect(screen.queryByText(/settings saved successfully/i)).not.toBeInTheDocument();
  });

  it('validates email format and displays a field-specific error', () => {
    render(<SettingsForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /save settings/i });

    fireEvent.change(nameInput, { target: { value: 'Nalin Tuscano' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(screen.queryByText(/settings saved successfully/i)).not.toBeInTheDocument();
  });

  it('sets aria-invalid and aria-describedby correctly on invalid fields', () => {
    render(<SettingsForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /save settings/i });

    fireEvent.click(submitButton);

    expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    expect(nameInput).toHaveAttribute('aria-describedby', 'name-error');
    expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    expect(emailInput).toHaveAttribute('aria-describedby', 'email-error');
  });

  it('submits successfully with valid data and announces success via role="status"', () => {
    render(<SettingsForm />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /save settings/i });

    fireEvent.change(nameInput, { target: { value: 'Nalin Tuscano' } });
    fireEvent.change(emailInput, { target: { value: 'nalin@example.com' } });
    fireEvent.click(submitButton);

    expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
    expect(screen.queryByText('Email is required.')).not.toBeInTheDocument();

    const successMessage = screen.getByRole('status');
    expect(successMessage).toHaveTextContent('Settings saved successfully!');
    expect(successMessage).toHaveAttribute('aria-live', 'polite');
  });
});
