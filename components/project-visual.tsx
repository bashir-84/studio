export function ProjectVisual({ accent, title, index }: { accent: string; title: string; index: string }) {
  return (
    <div className={`project-visual visual-${accent}`} aria-hidden="true">
      <span className="visual-title">{title}</span><span className="visual-index">{index}</span>
      <i className="shape shape-a"/><i className="shape shape-b"/><i className="shape shape-c"/>
    </div>
  );
}
