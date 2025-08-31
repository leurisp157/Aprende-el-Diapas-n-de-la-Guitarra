import ClassCard from '../components/ClassCard';

export default function Clase1({ onNext }) {
  const strings = [
    { name: 'E', num: '6ª', color: '#9b59b6' },
    { name: 'A', num: '5ª', color: '#3498db' },
    { name: 'D', num: '4ª', color: '#2ecc71' },
    { name: 'G', num: '3ª', color: '#f1c40f' },
    { name: 'B', num: '2ª', color: '#e67e22' },
    { name: 'e', num: '1ª', color: '#e74c3c' }
  ];

  return (
    <ClassCard title="Clase 1: El Diapasón y las Cuerdas" onNext={onNext}>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          Cuerdas de la guitarra (de grave a aguda):
        </span>
      </p>
      <table style={{ width: '100%', margin: '12px 0', borderCollapse: 'collapse', fontSize: '15px' }}>
        <thead>
          <tr style={{ background: '#f4f6f9' }}>
            <th>Número</th>
            <th>Nombre</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {strings.map(s => (
            <tr key={s.name}>
              <td>{s.num}</td>
              <td>{s.name}</td>
              <td>
                <span style={{
                  display: 'inline-block',
                  width: '18px',
                  height: '18px',
                  background: s.color,
                  borderRadius: '50%'
                }}></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#2980b9', fontWeight: 'bold' }}>
          Trastes:
        </span>{" "}
        0 = al aire, 1 = primer traste, 2 = segundo traste, etc.
      </p>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Objetivo:</strong> Toca cada cuerda al aire y di su nombre.<br />
        <em>Práctica: Repite 3 veces las 6 cuerdas en orden.</em>
      </p>
    </ClassCard>
  );
}