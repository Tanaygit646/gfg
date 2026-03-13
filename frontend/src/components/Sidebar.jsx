import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        padding: "16px 0"
      }}>

        {/* hamburger — only visible on small screens */}
        <div
          className="menu-icon-toggle"
          onClick={() => setOpen(true)}
        >☰</div>

        {/* nav menu — visible on large screens inside sidebar */}
        <nav className="sidebar-nav">
          <a href="#">📊 <span>Dashboard</span></a>
          <a href="#">📈 <span>Analytics</span></a>
          <a href="#">📁 <span>Reports</span></a>
          <a href="#">⚙️ <span>Settings</span></a>
        </nav>

        {/* user icon — pushed to bottom */}
        <div style={{ marginTop: "auto", fontSize: "22px" }}>👤</div>
      </div>

      {/* overlay — closes drawer on outside click */}
      {open && (
        <div
          className="drawer-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* sliding drawer for small screens */}
      <div className={`drawer ${open ? "drawer-open" : ""}`}>
        <button
          className="drawer-close"
          onClick={() => setOpen(false)}
        >✕</button>

        <nav className="drawer-nav">
          <a href="#">📊 <span>Dashboard</span></a>
          <a href="#">📈 <span>Analytics</span></a>
          <a href="#">📁 <span>Reports</span></a>
          <a href="#">⚙️ <span>Settings</span></a>
        </nav>
      </div>
    </>
  );
}