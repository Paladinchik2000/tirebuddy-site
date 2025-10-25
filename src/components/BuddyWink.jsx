import React from "react";

/**
 * Маленький Buddy, который периодически подмигивает.
 * Применяй в шапке рядом с логотипом или в любом блоке.
 * Пропсы:
 * - size: число (px), например 36 или 64
 */
export default function BuddyWink({ size = 48 }) {
  const px = `${size}px`;
  return (
    <div
      className="buddy-wink inline-block align-middle"
      style={{ width: px, height: px }}
      aria-hidden="true"
    >
      {/* Упрощенный дружелюбный Buddy-аватар в SVG с глазом, который моргает */}
      <svg
        viewBox="0 0 120 120"
        width={px}
        height={px}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        {/* Колесо */}
        <circle cx="60" cy="60" r="54" fill="#1f2937" />
        <circle cx="60" cy="60" r="40" fill="#374151" />
        <circle cx="60" cy="60" r="12" fill="#111827" />

        {/* Улыбка */}
        <path
          d="M40 78c6 6 34 6 40 0"
          fill="none"
          stroke="#FDE68A"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Левый глаз (статичный) */}
        <circle cx="45" cy="50" r="6" fill="#FDE68A" />

        {/* Правый глаз (мигает — scaleY анимация) */}
        <g className="buddy-eye-right" transform="translate(0,0)">
          <circle cx="75" cy="50" r="6" fill="#FDE68A" />
        </g>

        {/* Кепка с кленовым листом */}
        <g transform="translate(8,-2)">
          <path d="M30 22c20-12 50-12 70 0v12H30V22z" fill="#DC2626" />
          <rect x="30" y="34" width="70" height="6" fill="#B91C1C" />
          {/* Кленовый лист (упрощенный) */}
          <path
            d="M66 23l4 7h8l-6 5 3 7-9-5-9 5 3-7-6-5h8l4-7z"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
}
