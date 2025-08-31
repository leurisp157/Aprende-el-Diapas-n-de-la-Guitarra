import ClassCard from '../components/ClassCard';

const naturalNotesE = [
  { fret: 0, note: 'E' },
  { fret: 1, note: 'F' },
  { fret: 3, note: 'G' },
  { fret: 5, note: 'A' },
  { fret: 7, note: 'B' },
  { fret: 8, note: 'C' },
  { fret: 10, note: 'D' },
  { fret: 12, note: 'E' },
];

export default function Clase2({ onNext }) {
  return (
    <ClassCard title="Clase 2: Notas Naturales en la 6ª cuerda (E)" onNext={onNext}>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          Notas naturales:
        </span>{" "}
        C, D, E, F, G, A, B
      </p>
      <table style={{ width: '100%', margin: '12px 0', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ background: '#f4f6f9' }}>
            <th>Traste</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {naturalNotesE.map(({ fret, note }) => (
            <tr key={fret}>
              <td style={{ fontWeight: 'bold', color: '#2980b9' }}>{fret}</td>
              <td style={{ fontWeight: 'bold', color: '#27ae60' }}>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Ejercicio:</strong> Encuentra todas las posiciones de la nota "A" en la 6ª cuerda hasta el traste 12.<br />
        <em>¿Puedes decir en qué trastes están las demás notas naturales?</em>
      </p>
    </ClassCard>
  );
}