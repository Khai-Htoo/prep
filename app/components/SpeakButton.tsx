"use client";

import { useState, useCallback } from "react";

interface SpeakButtonProps {
  text: string;
  size?: "sm" | "md";
}

export default function SpeakButton({ text, size = "md" }: SpeakButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [text]);

  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  const btnSize = size === "sm" ? "p-1.5" : "p-2";

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speak();
      }}
      className={`speak-btn ${btnSize} ${isSpeaking ? "speaking" : ""}`}
      title="播放中文语音"
      aria-label="Play Chinese audio"
    >
      <svg
        className={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        {isSpeaking ? (
          <>
            <path className="sound-wave wave-1" d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path className="sound-wave wave-2" d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </>
        ) : (
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        )}
      </svg>
    </button>
  );
}
