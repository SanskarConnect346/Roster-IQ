
import './App.css'

const navigation = [
  { label: 'Overview', icon: '◫', active: true },
  { label: 'Roster', icon: '▦' },
  { label: 'Staffing Management', icon: '♙' },
  { label: 'Coverage', icon: '◉' },
  { label: 'On-call Management', icon: '◷' },
  { label: 'Centres', icon: '⌂' },
  { label: 'Reports', icon: '▤' },
  { label: 'Setup', icon: '⚙' },
]

const stats = [
  {
    label: 'Active Staff',
    value: '248',
    detail: 'Across all centres',
    icon: '♙',
    tone: 'teal',
  },
  {
    label: "Today's Shifts",
    value: '186',
    detail: 'Scheduled for today',
    icon: '▦',
    tone: 'blue',
  },
  {
    label: 'Coverage Rate',
    value: '94.6%',
    detail: '6 shifts need attention',
    icon: '◉',
    tone: 'green',
  },
  {
    label: 'Open Positions',
    value: '12',
    detail: 'Across 4 departments',
    icon: '＋',
    tone: 'amber',
  },
]

const coverageRows = [
  {
    department: 'Emergency',
    centre: 'Main Hospital',
    required: 12,
    assigned: 10,
    status: 'Understaffed',
    tone: 'danger',
  },
  {
    department: 'Intensive Care',
    centre: 'Main Hospital',
    required: 8,
    assigned: 8,
    status: 'Covered',
    tone: 'success',
  },
  {
    department: 'Radiology',
    centre: 'City Centre',
    required: 6,
    assigned: 5,
    status: 'Understaffed',
    tone: 'danger',
  },
  {
    department: 'Outpatient',
    centre: 'North Centre',
    required: 10,
    assigned: 10,
    status: 'Covered',
    tone: 'success',
  },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="Roster IQ home">
          <span className="brand-mark">R</span>
          <span className="brand-copy">
            <strong>Roster IQ</strong>
            <small>HealthOS Workforce</small>
          </span>
        </a>

        <div className="workspace-label">WORKSPACE</div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replaceAll(' ', '-')}`}
              className={`nav-item${item.active ? ' active' : ''}`}
              aria-current={item.active ? 'page' : undefined}
            >
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
              {item.label === 'Coverage' && (
                <span className="nav-count">6</span>
              )}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot" />
          <span>Workforce systems operational</span>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Roster IQ</span>
            <span className="breadcrumb-separator">/</span>
            <strong>Overview</strong>
          </div>

          <div className="topbar-actions">
            <span className="environment-label">DEMO DATA</span>
            <button
              className="icon-button notification-button"
              type="button"
              aria-label="Notifications"
            >
              ♧
              <span className="notification-dot" />
            </button>
            <div className="user-profile">
              <div className="avatar">SA</div>
              <div className="user-copy">
                <strong>System Admin</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">WORKFORCE INTELLIGENCE</p>
              <h1>Overview</h1>
              <p className="page-description">
                Monitor staffing, roster coverage and workforce availability
                across your healthcare centres.
              </p>
            </div>

            <button className="primary-button" type="button">
              <span aria-hidden="true">＋</span>
              Create roster
            </button>
          </section>

          <section className="stats-grid" aria-label="Workforce summary">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <div className="stat-card-top">
                  <span className="stat-label">{stat.label}</span>
                  <span className={`stat-icon ${stat.tone}`}>
                    {stat.icon}
                  </span>
                </div>
                <strong className="stat-value">{stat.value}</strong>
                <span className="stat-detail">{stat.detail}</span>
              </article>
            ))}
          </section>

          <section className="dashboard-grid">
            <article className="panel coverage-panel">
              <div className="panel-heading">
                <div>
                  <h2>Staffing coverage</h2>
                  <p>Required vs assigned staff by department</p>
                </div>
                <button className="text-button" type="button">
                  View roster <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Centre</th>
                      <th>Required</th>
                      <th>Assigned</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coverageRows.map((row) => (
                      <tr key={`${row.department}-${row.centre}`}>
                        <td className="department-cell">{row.department}</td>
                        <td>{row.centre}</td>
                        <td>{row.required}</td>
                        <td>{row.assigned}</td>
                        <td>
                          <span className={`status-badge ${row.tone}`}>
                            <span className="badge-dot" />
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="panel alerts-panel">
              <div className="panel-heading">
                <div>
                  <h2>Coverage alerts</h2>
                  <p>Staffing issues requiring attention</p>
                </div>
                <span className="alert-total">2</span>
              </div>

              <div className="alert-item">
                <span className="alert-symbol danger">!</span>
                <div className="alert-copy">
                  <strong>Emergency department</strong>
                  <p>2 staff members below required capacity</p>
                  <span>Main Hospital · Day shift</span>
                </div>
              </div>

              <div className="alert-item">
                <span className="alert-symbol warning">!</span>
                <div className="alert-copy">
                  <strong>Radiology department</strong>
                  <p>1 staff member below required capacity</p>
                  <span>City Centre · Day shift</span>
                </div>
              </div>

              <button className="secondary-button" type="button">
                Review staffing gaps
              </button>
            </article>
          </section>

          <section className="panel shift-panel">
            <div className="panel-heading">
              <div>
                <h2>Today's workforce</h2>
                <p>High-level overview of scheduled shift allocation</p>
              </div>
              <span className="date-label">Today · Demo overview</span>
            </div>

            <div className="shift-summary">
              <div className="shift-metric">
                <span className="shift-dot morning" />
                <div>
                  <span>Day shift</span>
                  <strong>112 staff</strong>
                </div>
              </div>
              <div className="shift-metric">
                <span className="shift-dot evening" />
                <div>
                  <span>Evening shift</span>
                  <strong>48 staff</strong>
                </div>
              </div>
              <div className="shift-metric">
                <span className="shift-dot night" />
                <div>
                  <span>Night shift</span>
                  <strong>26 staff</strong>
                </div>
              </div>
              <div className="shift-metric">
                <span className="shift-dot oncall" />
                <div>
                  <span>On-call</span>
                  <strong>14 staff</strong>
                </div>
              </div>
            </div>
          </section>

          <footer className="page-footer">
            <span>Roster IQ · HealthOS</span>
            <span>Workforce intelligence and planning</span>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
