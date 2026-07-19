/** Material Symbols Outlined icon (font loaded in layout.tsx). */
export default function Icon({
  name,
  className = "",
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={style} aria-hidden>
      {name}
    </span>
  );
}
