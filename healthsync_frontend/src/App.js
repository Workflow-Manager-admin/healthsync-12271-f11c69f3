import React, { useState } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * Main App component serving as HealthSync's dashboard container.
 * Top navbar, sidebar/tabs navigation, and main content area.
 *
 * Features for navigation:
 * - Activity Tracking
 * - Diet Tracking
 * - Progress Insights
 * - Habit Reminders
 */
function App() {
  // Track selected feature (stub states for now)
  const [selected, setSelected] = useState('activity');

  // Feature metadata
  const FEATURES = [
    {
      key: 'activity',
      name: 'Activity Tracking',
      icon: '🏃‍♂️'
    },
    {
      key: 'diet',
      name: 'Diet Tracking',
      icon: '🍎'
    },
    {
      key: 'progress',
      name: 'Progress Insights',
      icon: '📈'
    },
    {
      key: 'reminders',
      name: 'Habit Reminders',
      icon: '⏰'
    }
  ];

  // Main stub content for each feature
  const featureContent = {
    activity: (
      <div>
        <h2 className="dashboard-section-title">Activity Tracking</h2>
        <p className="description">Monitor and log daily physical activities such as steps, workouts, and exercise routines.</p>
      </div>
    ),
    diet: (
      <div>
        <h2 className="dashboard-section-title">Diet Tracking</h2>
        <p className="description">Track daily calorie intake, log meals, and monitor nutritional goals.</p>
      </div>
    ),
    progress: (
      <div>
        <h2 className="dashboard-section-title">Progress Insights</h2>
        <p className="description">Visualize health trends and progress with charts and analytics.</p>
      </div>
    ),
    reminders: (
      <div>
        <h2 className="dashboard-section-title">Habit Reminders</h2>
        <p className="description">Set reminders for workouts, meals, and hydration to build healthy habits.</p>
      </div>
    ),
  };

  return (
    <div className="app healthsync-dashboard">
      {/* Persistent Top Navbar */}
      <nav className="navbar healthsync-navbar">
        <div className="container" style={{ maxWidth: '100%', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" style={{ color: 'var(--color-primary)' }}>🍃</span>
              HealthSync
            </div>
            <div>
              {/* Placeholder for user/settings/profile, right-aligned */}
              <button className="btn" style={{ background: 'var(--color-accent)', color: 'var(--kavia-dark)' }}>Profile</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard layout: sidebar/tabs + main content */}
      <div className="dashboard-layout">
        {/* Sidebar/Tabs for feature navigation */}
        <aside className="dashboard-sidebar">
          <nav className="dashboard-nav">
            {FEATURES.map((f) => (
              <button
                key={f.key}
                className={`dashboard-nav-btn${selected === f.key ? ' selected' : ''}`}
                onClick={() => setSelected(f.key)}
                aria-label={f.name}
                style={{
                  background: selected === f.key ? 'var(--color-primary)' : 'transparent',
                  color: selected === f.key ? 'var(--kavia-dark)' : 'var(--text-color)'
                }}
              >
                <span className="dashboard-icon" aria-hidden="true">{f.icon}</span>
                <span>{f.name}</span>
              </button>
            ))}
          </nav>
        </aside>
        
        {/* Main content area */}
        <main className="dashboard-main">
          <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
            {/* Title and stub content */}
            <div style={{ marginTop: 40, minHeight: 240 }}>{featureContent[selected]}</div>
            {/* Placeholder: as features are implemented, replace stub */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;