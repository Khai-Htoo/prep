"use client";

import { categories } from "../data/interview-data";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

const categoryIcons: Record<string, string> = {
  HTML: "📄",
  CSS: "🎨",
  JavaScript: "⚡",
  TypeScript: "🔷",
  "React JS": "⚛️",
  "Next JS": "▲",
  Git: "🔀",
};

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="filter-bar">
      {categories.map((cat, i) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`filter-pill ${active === cat ? "active" : ""}`}
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <span className="pill-icon">{categoryIcons[cat]}</span>
          <span>{cat}</span>
        </button>
      ))}
    </div>
  );
}
