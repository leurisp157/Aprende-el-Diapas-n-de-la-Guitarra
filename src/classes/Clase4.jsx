import ClassCard from '../components/ClassCard';

const naturalNotesG = [
  { fret: 0, note: 'G' },
  { fret: 2, note: 'A' },
  { fret: 4, note: 'B' },
  { fret: 5, note: 'C' },
  { fret: 7, note: 'D' },
  { fret: 9, note: 'E' },
  { fret: 10, note: 'F' },
  { fret: 12, note: 'G' },
];

export default function Clase4({ onNext }) {
  return (
    <ClassCard title="Clase 4: Notas Naturales en la 3ª cuerda (G)" onNext={onNext}>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#2980b9', fontWeight: 'bold' }}>
          Notas naturales en la cuerda de Sol (G):
        </span>
      </p>
      <table style={{ width: '100%', margin: '12px 0', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ background: '#f4f6f9' }}>
            <th>Traste</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {naturalNotesG.map(({ fret, note }) => (
            <tr key={fret}>
              <td style={{ fontWeight: 'bold', color: '#2980b9' }}>{fret}</td>
              <td style={{ fontWeight: 'bold', color: '#27ae60' }}>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          Conexión:
        </span>{" "}
        G traste 2 = A | B traste 0 | E traste 5
      </p>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Reto:</strong> Encuentra 3 posiciones de "C" en el mástil.<br />
        <em>¿Puedes encontrarlas en diferentes cuerdas?</em>
      </p>
    </ClassCard>
  );
}