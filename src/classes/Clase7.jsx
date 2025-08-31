import ClassCard from '../components/ClassCard';

const ejemploNotas = [
  { cuerda: '6ª (E)', traste: 3, nota: 'G', color: '#9b59b6' },
  { cuerda: '5ª (A)', traste: 10, nota: 'G', color: '#3498db' },
  { cuerda: '4ª (D)', traste: 5, nota: 'G', color: '#2ecc71' },
  { cuerda: '3ª (G)', traste: 0, nota: 'G', color: '#f1c40f' },
  { cuerda: '2ª (B)', traste: 8, nota: 'G', color: '#e67e22' },
  { cuerda: '1ª (e)', traste: 3, nota: 'G', color: '#e74c3c' },
];

export default function Clase7({ onNext }) {
  return (
    <ClassCard title="Clase 7: Mapa Mental del Diapasón" onNext={onNext}>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          Objetivo:
        </span>{" "}
        Ver el mástil como un mapa conectado de notas naturales.
      </p>
      <table style={{ width: '100%', margin: '12px 0', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ background: '#f4f6f9' }}>
            <th>Cuerda</th>
            <th>Traste</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {ejemploNotas.map(({ cuerda, traste, nota, color }, i) => (
            <tr key={i}>
              <td>{cuerda}</td>
              <td style={{ fontWeight: 'bold', color: '#2980b9' }}>{traste}</td>
              <td style={{ color, fontWeight: 'bold' }}>{nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <span style={{ background: '#fbeee6', padding: '2px 6px', borderRadius: '4px', color: '#e67e22', fontWeight: 'bold' }}>
          Ejercicio:
        </span>{" "}
        Elige una nota natural y encuentra sus 6 ubicaciones posibles en el diapasón.
      </p>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Reto:</strong> Toca "G" en las 6 cuerdas diferentes.<br />
        <em>¿Puedes hacer lo mismo con otras notas naturales?</em>
      </p>
    </ClassCard>
  );
}