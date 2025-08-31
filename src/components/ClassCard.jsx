export default function ClassCard({ title, children, onNext }) {
  return (
    <div className="card">
      <div
        style={{
          background: '#eafaf1',
          color: '#27ae60',
          padding: '8px 0',
          borderRadius: '8px 8px 0 0',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '16px',
          marginBottom: '10px',
        }}
      >
        Estudio del diapasón según las escalas naturales
      </div>
      <h2>{title}</h2>
      {children}
      {onNext && (
        <button className="btn" onClick={onNext}>
          Siguiente Clase →
        </button>
      )}
    </div>
  );
}