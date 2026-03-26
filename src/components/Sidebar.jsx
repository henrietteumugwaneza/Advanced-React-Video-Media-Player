import React from "react";
import "../styles/sidebar.css";

const categories = [
  { label: "All", icon: "🏠" },
  { label: "Music", icon: "🎵" },
  { label: "Gaming", icon: "🎮" },
  { label: "Coding", icon: "💻" },
  { label: "Live", icon: "🔴" },
  { label: "News", icon: "📰" },
  { label: "Sports", icon: "⚽" },
  { label: "Movies", icon: "🎬" },
  { label: "Fashion", icon: "👗" },
  { label: "Cooking", icon: "🍳" },
  { label: "Travel", icon: "✈️" },
  { label: "Science", icon: "🔬" },
];

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <aside className="sidebar">
      {categories.map(({ label, icon }) => (
        <button
          key={label}
          className={`sidebar-btn ${selectedCategory === label ? "active" : ""}`}
          onClick={() => setSelectedCategory(label)}
        >
          <span className="sidebar-icon">{icon}</span>
          <span className="sidebar-label">{label}</span>
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;
