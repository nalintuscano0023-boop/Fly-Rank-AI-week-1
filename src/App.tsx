import React from 'react';
import { SettingsForm } from './components/SettingsForm';

const App: React.FC = () => {
  return (
    <main className="app-container">
      <header>
        <h1>FlyRank FE-03: AI-Assisted Workflow Drill</h1>
        <p>User account configuration panel.</p>
      </header>
      <section>
        <SettingsForm />
      </section>
    </main>
  );
};

export default App;
