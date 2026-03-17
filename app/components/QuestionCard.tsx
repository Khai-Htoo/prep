"use client";

import Link from "next/link";
import type { InterviewQuestion } from "../data/interview-data";

interface QuestionCardProps {
  question: InterviewQuestion;
  index: number;
}

export default function QuestionCard({ question, index }: QuestionCardProps) {
  return (
    <Link
      href={`/questions/${question.id}`}
      className="question-card block hover:no-underline"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header with category badge */}
      <div className="card-header">
        <span className="category-badge">{question.category}</span>
        <span className="question-number">#{index + 1}</span>
      </div>

      {/* Question Section */}
      <div className="question-section">
        <div className="question-content">
          <p className="burmese-text !text-[var(--text-primary)] text-base font-medium">
            {question.question_burmese}
          </p>
        </div>
        <div className="expand-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
