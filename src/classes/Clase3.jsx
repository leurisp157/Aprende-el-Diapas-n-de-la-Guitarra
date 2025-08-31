import ClassCard from '../components/ClassCard';

export default function Clase3({ onNext }) {
  return (
    <ClassCard title="Clase 3: Conexión entre Cuerdas (Notas Naturales)" onNext={onNext}>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          Regla general:
        </span>{" "}
        5 trastes arriba en la cuerda inferior = misma nota en la cuerda superior.
      </p>
      <table style={{ width: '100%', margin: '12px 0', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ background: '#f4f6f9' }}>
            <th>Cuerda Inferior</th>
            <th>Traste</th>
            <th>Cuerda Superior</th>
            <th>Traste</th>
            <th>Nota Natural</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5ª (A)</td>
            <td>0</td>
            <td>4ª (D)</td>
            <td style={{ color: '#27ae60', fontWeight: 'bold' }}>5</td>
            <td>A</td>
          </tr>
          <tr>
            <td>4ª (D)</td>
            <td>0</td>
            <td>3ª (G)</td>
            <td style={{ color: '#27ae60', fontWeight: 'bold' }}>5</td>
            <td>D</td>
          </tr>
          <tr>
            <td>3ª (G)</td>
            <td>0</td>
            <td>2ª (B)</td>
            <td style={{ color: '#e67e22', fontWeight: 'bold' }}>4</td>
            <td>G</td>
          </tr>
        </tbody>
      </table>
      <p>
        <span style={{ background: '#fbeee6', padding: '2px 6px', borderRadius: '4px', color: '#e67e22', fontWeight: 'bold' }}>
          Excepción:
        </span>{" "}
        Entre G y B, solo sube 4 trastes.
      </p>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Ejercicio:</strong> Encuentra "D" en 5ª cuerda (traste 5) y su equivalente en 4ª cuerda (traste 10). <br />
        <em>¿Puedes encontrar la misma nota natural en otras cuerdas?</em>
      </p>
    </ClassCard>
  );
}