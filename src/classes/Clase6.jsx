import ClassCard from '../components/ClassCard';

const escalaDoMayor = [
  { grado: 'C', traste: 8, cuerda: '6ª (E)', color: '#27ae60' },
  { grado: 'D', traste: 10, cuerda: '6ª (E)', color: '#2980b9' },
  { grado: 'E', traste: 12, cuerda: '6ª (E)', color: '#e67e22' },
  { grado: 'F', traste: 1, cuerda: '1ª (e)', color: '#9b59b6' },
  { grado: 'G', traste: 3, cuerda: '1ª (e)', color: '#f1c40f' },
  { grado: 'A', traste: 5, cuerda: '1ª (e)', color: '#e74c3c' },
  { grado: 'B', traste: 7, cuerda: '1ª (e)', color: '#2ecc71' },
  { grado: 'C', traste: 8, cuerda: '1ª (e)', color: '#27ae60' },
];

export default function Clase6({ onNext }) {
  return (
    <ClassCard title="Clase 6: Escala de Do Mayor en el Diapasón" onNext={onNext}>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          Notas de la escala de Do mayor:
        </span>{" "}
        C, D, E, F, G, A, B, C
      </p>
      <table style={{ width: '100%', margin: '12px 0', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ background: '#f4f6f9' }}>
            <th>Nota</th>
            <th>Traste</th>
            <th>Cuerda</th>
          </tr>
        </thead>
        <tbody>
          {escalaDoMayor.map(({ grado, traste, cuerda, color }, i) => (
            <tr key={i}>
              <td style={{ color, fontWeight: 'bold' }}>{grado}</td>
              <td style={{ fontWeight: 'bold', color: '#2980b9' }}>{traste}</td>
              <td>{cuerda}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#2980b9', fontWeight: 'bold' }}>
          Posición recomendada:
        </span>{" "}
        6ª cuerda, traste 8 = C
      </p>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Ejercicio:</strong> Sube y baja la escala nombrando cada nota.<br />
        <em>¿Puedes tocar la escala en diferentes cuerdas y posiciones?</em>
      </p>
    </ClassCard>
  );
}