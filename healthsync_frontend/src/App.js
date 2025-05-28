import React, { useState } from 'react';
import './App.css';

// Import stub feature components
import ActivityTracking from './components/ActivityTracking';
import DietTracking from './components/DietTracking';
import ProgressInsights from './components/ProgressInsights';
import HabitReminders from './components/HabitReminders';

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
  // Track selected feature
  const [selected, setSelected] = useState('activity');

  // Feature metadata for navigation
  const FEATURES = [
    {
      key: 'activity',
      name: 'Activity Tracking',
      icon: '🏃‍♂️',
      component: ActivityTracking,
    },
    {
      key: 'diet',
      name: 'Diet Tracking',
      icon: '🍎',
      component: DietTracking,
    },
    {
      key: 'progress',
      name: 'Progress Insights',
      icon: '📈',
      component: ProgressInsights,
    },
    {
      key: 'reminders',
      name: 'Habit Reminders',
      icon: '⏰',
      component: HabitReminders,
    }
  ];

  // Find current selected feature's component
  const SelectedComponent = FEATURES.find(f => f.key === selected)?.component || (() => <div />);

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
      <div className="dashboard-layout" style={{ display: 'flex', marginTop: 76, minHeight: 'calc(100vh - 76px)' }}>
        {/* Sidebar/Tabs for feature navigation */}
        <aside className="dashboard-sidebar"
          style={{
            width: 200,
            background: 'var(--color-accent)',
            borderRight: '1px solid var(--border-color)',
            paddingTop: 32,
            minHeight: '100%',
            boxSizing: 'border-box'
          }}>
          <nav className="dashboard-nav" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FEATURES.map((f) => (
              <button
                key={f.key}
                className={`dashboard-nav-btn${selected === f.key ? ' selected' : ''}`}
                onClick={() => setSelected(f.key)}
                aria-label={f.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: selected === f.key ? 'var(--color-primary)' : 'transparent',
                  color: selected === f.key ? 'var(--kavia-dark)' : 'var(--kavia-dark)',
                  padding: '14px 18px',
                  border: 'none',
                  borderRadius: 6,
                  fontWeight: selected === f.key ? 700 : 500,
                  fontSize: '1.07rem',
                  cursor: 'pointer',
                  transition: 'background 0.18s'
                }}
              >
                <span className="dashboard-icon" aria-hidden="true" style={{ fontSize: 21 }}>{f.icon}</span>
                <span>{f.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <main className="dashboard-main" style={{
          flex: 1,
          background: 'var(--kavia-dark)',
          minHeight: '100%',
          paddingLeft: 0,
        }}>
          <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ marginTop: 40, minHeight: 240 }}>
              <SelectedComponent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;