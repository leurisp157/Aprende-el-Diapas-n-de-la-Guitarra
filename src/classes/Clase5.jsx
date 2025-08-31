import ClassCard from '../components/ClassCard';

const ejemplos = [
  { tipo: 'Sostenido (♯)', ejemplo: 'C → C♯', cuerda: '6ª (E)', traste: 1, color: '#27ae60' },
  { tipo: 'Bemol (♭)', ejemplo: 'D → D♭', cuerda: '4ª (D)', traste: 1, color: '#e67e22' },
  { tipo: 'Enarmónico', ejemplo: 'E♯ = F', cuerda: '6ª (E)', traste: 1, color: '#2980b9' },
  { tipo: 'Bemol', ejemplo: 'B♭', cuerda: '5ª (A)', traste: 1, color: '#9b59b6' },
];

export default function Clase5({ onNext }) {
  return (
    <ClassCard title="Clase 5: Sostenidos y Bemoles" onNext={onNext}>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          ¿Qué son los sostenidos y bemoles?
        </span>
      </p>
      <table style={{ width: '100%', margin: '12px 0', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ background: '#f4f6f9' }}>
            <th>Tipo</th>
            <th>Ejemplo</th>
            <th>Cuerda</th>
            <th>Traste</th>
          </tr>
        </thead>
        <tbody>
          {ejemplos.map((e, i) => (
            <tr key={i}>
              <td style={{ color: e.color, fontWeight: 'bold' }}>{e.tipo}</td>
              <td>{e.ejemplo}</td>
              <td>{e.cuerda}</td>
              <td style={{ fontWeight: 'bold', color: '#2980b9' }}>{e.traste}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <span style={{ background: '#fbeee6', padding: '2px 6px', borderRadius: '4px', color: '#e67e22', fontWeight: 'bold' }}>
          Recuerda:
        </span>{" "}
        Entre cada nota natural hay un semitono (excepto entre E-F y B-C).
      </p>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Ejercicio:</strong> Encuentra E♯ (es F) y B♭ (traste 1 en 5ª).<br />
        <em>¿Puedes ubicar otros sostenidos y bemoles en el diapasón?</em>
      </p>
    </ClassCard>
  );
}