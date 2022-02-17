export function ContentCard({ id, children }) {
  return (
    <div id={id} className="content-card">
      {children}
    </div>
  )
}
