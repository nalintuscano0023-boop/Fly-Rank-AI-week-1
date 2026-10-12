import React, { useState } from 'react';

export interface SettingsFormData {
  name: string;
  email: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const SettingsForm: React.FC = () => {
  const [formData, setFormData] = useState<SettingsFormData>({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      newErrors.name = 'Name is required.';
    }

    if (!trimmedEmail) {
      newErrors.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');

    if (validate()) {
      setSuccessMessage('Settings saved successfully!');
    }
  };

  return (
    <div className="settings-card">
      <h2>User Settings</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="settings-name" className="form-label">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="settings-name"
            name="name"
            type="text"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <div id="name-error" className="error-message" role="alert">
              {errors.name}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="settings-email" className="form-label">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="settings-email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <div id="email-error" className="error-message" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        <button type="submit" className="submit-button">
          Save Settings
        </button>

        {successMessage && (
          <div
            id="form-success"
            className="success-message"
            role="status"
            aria-live="polite"
          >
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};
