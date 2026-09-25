type Props = { className?: string; title?: string };

// Vector redraw of the Hoorpendar "HP" oval mark.
export function Logo({ className, title }: Props) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <ellipse cx="60" cy="30" rx="57" ry="27" fill="var(--logo-fill, #0b2c57)" />
      <path
        d="M9 41 C 35 20, 75 11, 113 17 C 76 15, 38 25, 9 41 Z"
        fill="var(--logo-ink, #fff)"
        opacity="0.9"
      />
      <g fill="var(--logo-ink, #fff)" transform="translate(6.5 0) skewX(-12)">
        <rect x="33" y="15" width="7" height="30" rx="1" />
        <rect x="49" y="15" width="7" height="30" rx="1" />
        <rect x="33" y="27" width="23" height="6" />
        <path
          fillRule="evenodd"
          d="M62 15 h13 a9.5 9.5 0 0 1 0 19 h-6 v11 h-7 z M69 21 v7 h5.5 a3.5 3.5 0 0 0 0 -7 z"
        />
      </g>
    </svg>
  );
}
