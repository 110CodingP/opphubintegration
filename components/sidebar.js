const UI = {
  cn: (...classes) => classes.filter(Boolean).join(" "),

  Header: function({ userName, notificationCount }) {
    return `
      <header class="top-navbar">
        ${this.BrandSection()}
        <div class="user-actions">
          ${this.NavigationTrigger("bell", notificationCount)}
          ${this.NavigationMenuLink(userName)}
          ${this.NavigationTrigger("sign-out")}
        </div>
      </header>
    `;
  },

  BrandSection: () => `
    <div class="brand-section">
      <div class="logo-icon"><i class="ph ph-sparkle"></i></div>
      <div class="brand-text">
        <span class="brand-title">OpportunityHub</span>
        <span class="brand-subtitle">Empowering Women in Business</span>
      </div>
    </div>
  `,

  Sidebar: function({ activeItem, dept }) {
    return `
      <aside class="sidebar">
        <nav class="nav-menu">
          ${this.SidebarItem("Opportunities", "suitcase", activeItem === "Opportunities")}
          ${this.SidebarItem("Calendar", "calendar-blank", activeItem === "Calendar")}
          ${this.SidebarItem("Forum", "chat-circle-text", activeItem === "Forum")}
        </nav>
        <div class="spacer"></div>
        <div class="divider-line"></div>
        ${this.DeptCard(dept)}
      </aside>
    `;
  },

  SidebarItem: (label, icon, isActive) => `
    <a href="#" class="${UI.cn("nav-item", isActive ? "active" : "")}">
      <i class="ph ph-${icon}"></i>
      <span>${label}</span>
    </a>
  `,

  DeptCard: (dept) => `
    <div class="dept-card">
      <span class="dept-label">Your Department:</span>
      <div class="dept-badge">${dept}</div>
    </div>
  `,

  NavigationTrigger: (icon, badge) => `
    <div class="action-icon">
      <i class="ph ph-${icon}"></i>
      ${badge ? `<span class="notification-badge">${badge}</span>` : ""}
    </div>
  `,

  NavigationMenuLink: (name) => `
    <div class="user-profile">
      <i class="ph ph-user-circle" style="font-size: 28px;"></i>
      <span class="user-name">${name}</span>
    </div>
  `,

  Footer: () => `
    <footer class="footer-bar">
      OpportunityHub - Your platform for career growth and community support
      <div class="help-button"><i class="ph ph-question"></i></div>
    </footer>
  `
};

const App = {
  state: {
    user: "Jane Doe",
    notifications: 3,
    activeTab: "Opportunities",
    department: "EE"
  },

  render: function() {
    const style = document.createElement('style');
    style.textContent = `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; font-family: 'Inter', sans-serif; background-color: #f8f9fa; display: flex; flex-direction: column; min-height: 100vh; }
        .top-navbar { height: 70px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; padding: 0 32px; position: sticky; top: 0; z-index: 100; }
        .brand-section { display: flex; align-items: center; gap: 12px; }
        .logo-icon { width: 40px; height: 40px; background: linear-gradient(135deg, #d946ef, #a855f7); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; }
        .brand-text { display: flex; flex-direction: column; }
        .brand-title { font-weight: 700; font-size: 18px; color: #111827; line-height: 1.2; }
        .brand-subtitle { font-size: 12px; color: #6b7280; }
        .user-actions { display: flex; align-items: center; gap: 24px; }
        .action-icon { font-size: 24px; color: #374151; cursor: pointer; position: relative; }
        .notification-badge { position: absolute; top: -5px; right: -5px; background-color: #ef4444; color: white; font-size: 10px; font-weight: bold; height: 16px; width: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; }
        .user-profile { display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .user-name { font-weight: 600; font-size: 14px; color: #111; }
        
        .sidebar { width: 260px; background-color: #ffffff; padding: 24px; display: flex; flex-direction: column; border-right: 1px solid #e0e0e0; height: calc(100vh - 70px); }
        .nav-menu { display: flex; flex-direction: column; gap: 12px; list-style: none; }
        .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; text-decoration: none; color: #000; font-weight: 600; font-size: 15px; transition: background-color 0.2s; }
        .nav-item i { font-size: 20px; }
        .nav-item.active { background-color: #050511; color: #ffffff; }
        .nav-item:not(.active):hover { background-color: #f3f4f6; }
        .spacer { flex-grow: 1; min-height: 20px; }
        .divider-line { height: 1px; background-color: #e5e7eb; margin-bottom: 24px; width: 100%; }
        .dept-card { background-color: #faf5ff; border: 1px solid #f3e8ff; border-radius: 16px; padding: 20px; }
        .dept-label { display: block; font-size: 15px; font-weight: 700; color: #000; margin-bottom: 12px; }
        .dept-badge { display: inline-block; background-color: #eef0f2; padding: 6px 16px; border-radius: 8px; font-weight: 600; font-size: 14px; color: #111; }

        .footer-bar { background-color: #ffffff; padding: 20px 32px; text-align: center; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; position: relative; margin-top: auto; }
        .help-button { position: absolute; right: 32px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; background-color: #111827; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    `;
    document.head.appendChild(style);

    document.body.innerHTML = `
      ${UI.Header({ 
        userName: this.state.user, 
        notificationCount: this.state.notifications 
      })}
      <div style="display: flex; flex: 1;">
        ${UI.Sidebar({ 
          activeItem: this.state.activeTab, 
          dept: this.state.department 
        })}
        <main style="flex: 1; padding: 32px;"></main>
      </div>
      ${UI.Footer()}
    `;
  }
};

App.render();