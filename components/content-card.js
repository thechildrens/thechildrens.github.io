export function ContentCard({ id, className, children }) {
  return (
    <div id={id} className={`content-card ${className}`}>
      {children}
    </div>
  )
}
