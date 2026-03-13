import React from "react";
import sidebarStyles from "./SidebarStyles.js";
const NAV_ICONS = ["●", "■", "▲"];

function Sidebar({ isOpen, onClose }) {
  return (
    <aside style={{ ...sidebarStyles.sidebar, width: isOpen ? 72 : 0 }}>
      {/* Hamburger / Close */}
      <button style={sidebarStyles.hamburger} onClick={onClose} title="Close menu">
        <span style={sidebarStyles.hamburgerLine} />
        <span style={sidebarStyles.hamburgerLine} />
        <span style={sidebarStyles.hamburgerLine} />
      </button>

      {/* Nav Icons */}
      <nav style={sidebarStyles.navItems}>
        {NAV_ICONS.map((icon, i) => (
          <button key={i} style={sidebarStyles.navBtn} title={`Menu item ${i + 1}`}>
            {icon}
          </button>
        ))}
      </nav>

      {/* Vertical "menu" label */}
      <div style={sidebarStyles.menuLabel}>
        {"menu".split("").map((char, i) => (
          <span key={i} style={{ display: "block", lineHeight: "1.3" }}>
            {char}
          </span>
        ))}
      </div>

      {/* Profile */}
      <button style={sidebarStyles.profileBtn} title="Profile">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      </button>
    </aside>
  );
}

export default Sidebar;