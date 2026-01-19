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
      <div class="logo-icon">
        <i class="ph ph-sparkle"></i>
      </div>
      <div class="brand-text">
        <span class="brand-title">OpportunityHub</span>
        <span class="brand-subtitle">Empowering Women in Business</span>
      </div>
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
      <div class="help-button">
        <i class="ph ph-question"></i>
      </div>
    </footer>
  `
};

const App = {
  state: {
    user: "Jane Doe",
    notifications: 3
  },

  render: function() {
    const style = document.createElement('style');
    style.textContent = `
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
        .footer-bar { background-color: #ffffff; padding: 20px 32px; text-align: center; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; position: relative; margin-top: auto; }
        .help-button { position: absolute; right: 32px; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; background-color: #111827; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    `;
    document.head.appendChild(style);

    document.body.innerHTML = `
      ${UI.Header({ 
        userName: this.state.user, 
        notificationCount: this.state.notifications 
      })}
      <main style="display: flex; flex: 1;"></main>
      ${UI.Footer()}
    `;
  }
};

App.render();