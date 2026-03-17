"use client";

import { use } from "react";
import Link from "next/link";
import { interviewQuestions } from "../../data/interview-data";
import SpeakButton from "../../components/SpeakButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function QuestionDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const question = interviewQuestions.find((q) => q.id === parseInt(id));

  if (!question) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Question Not Found</h1>
        <Link href="/" className="filter-pill active">
          Back to list
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Back to list</span>
          </Link>
        </div>

        <div className="question-card overflow-visible">
          {/* Header with category badge */}
          <div className="card-header">
            <span className="category-badge">{question.category}</span>
            <span className="question-number">#{question.id}</span>
          </div>

          <div className="p-6">
            {/* Question Section */}
            <div className="mb-8">
              <div className="hanzi-row">
                <h1 className="hanzi-text text-2xl font-bold">{question.question_hanzi}</h1>
                <SpeakButton text={question.question_hanzi} />
              </div>
              <p className="pinyin-text text-base mt-2">{question.question_pinyin}</p>
              <p className="burmese-text text-base mt-2 text-[var(--text-primary)]">{question.question_burmese}</p>
            </div>

            <div className="border-t border-[var(--border-color)] pt-6">
              <div className="answer-label">答案 / Answer</div>
              <div className="hanzi-row">
                <p className="hanzi-text answer-hanzi text-xl">{question.answer_hanzi}</p>
                <SpeakButton text={question.answer_hanzi} />
              </div>
              <p className="pinyin-text text-sm mt-2">{question.answer_pinyin}</p>
              <p className="burmese-text text-base mt-2 text-[var(--text-primary)]">{question.answer_burmese}</p>
            </div>

            {/* Vocab Table */}
            {question.vocab.length > 0 && (
              <div className="vocab-section mt-8">
                <div className="vocab-label">📚 词汇 / Vocabulary</div>
                <div className="vocab-grid">
                  <div className="vocab-header">
                    <span>汉字</span>
                    <span>拼音</span>
                    <span>ဗမာ</span>
                    <span>English</span>
                  </div>
                  {question.vocab.map((v, i) => (
                    <div key={i} className="vocab-row">
                      <span className="vocab-hanzi flex items-center justify-between gap-2">
                        {v.hanzi}
                        <SpeakButton text={v.hanzi} size="sm" />
                      </span>
                      <span className="vocab-pinyin">{v.pinyin}</span>
                      <span className="vocab-burmese">{v.burmese}</span>
                      <span className="vocab-english">{v.english}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
