// src/components/Menu.jsx
export default function Menu({ onSelect }) {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '30px 20px' }}>
      <h2>📚 Menú del Curso</h2>
      <p style={{ marginBottom: '20px', color: '#7f8c8d' }}>Selecciona una clase o examen</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {Array.from({ length: 8 }, (_, i) => (
          <button
            key={i + 1}
            className="btn"
            style={{ backgroundColor: '#3498db' }}
            onClick={() => onSelect('clase', i + 1)}
          >
            Clase {i + 1}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          className="btn"
          style={{ backgroundColor: '#8e44ad' }}
          onClick={() => onSelect('quiz')}
        >
          🎮 Examen: Adivina la Nota
        </button>

        <button
          className="btn"
          style={{ backgroundColor: '#2c3e50' }}
          onClick={() => onSelect('natural-quiz')}
        >
          🔍 Examen: Notas y Distancias
        </button>
      </div>
    </div>
  );
}