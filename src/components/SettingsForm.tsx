import React, { useState } from 'react';

export const SettingsForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vague implementation: no custom validation, no whitespace trimming
    if (!name || !email) {
      setMessage('Please fill in all fields.');
      return;
    }
    setMessage('Settings saved successfully!');
  };

  return (
    <div className="settings-card">
      <h2>User Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Receive email notifications
          </label>
        </div>

        <button type="submit">Save Settings</button>

        {message && <p className="status-message">{message}</p>}
      </form>
    </div>
  );
};
