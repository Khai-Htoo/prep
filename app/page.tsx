"use client";

import { useState, useMemo } from "react";
import { interviewQuestions } from "./data/interview-data";
import CategoryFilter from "./components/CategoryFilter";
import QuestionCard from "./components/QuestionCard";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return interviewQuestions;
    return interviewQuestions.filter((q) => q.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen relative" style={{ zIndex: 1 }}>
      <div className="max-w-3xl mx-auto px-4 pb-12">
        {/* Hero */}
        <div className="hero">
          <h1 className="hero-title">前端面试准备</h1>
          <p className="hero-subtitle">
            Web Developer Interview Prep · 中文 · ဗမာ
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        {/* Stats */}
        <div className="stats-bar">
          <div>
            <span className="stat-value">{filtered.length}</span> 题目
          </div>
          <div>
            <span className="stat-value">7</span> 类别
          </div>
          <div>
            <span className="stat-value">🔊</span> 语音
          </div>
        </div>

        {/* Questions */}
        <div className="flex flex-col gap-4">
          {filtered.length > 0 ? (
            filtered.map((q, i) => (
              <QuestionCard key={i} question={q} index={i} />
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <p>没有找到相关题目</p>
              <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>
                No questions found for this category
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
