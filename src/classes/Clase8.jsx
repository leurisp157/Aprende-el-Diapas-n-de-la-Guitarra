import ClassCard from '../components/ClassCard';

export default function Clase8({ onNext }) {
  return (
    <ClassCard title="Clase 8: Aplicación Final - Escalas Naturales">
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#27ae60', fontWeight: 'bold' }}>
          Improvisación:
        </span>{" "}
        Usa la escala de Do mayor y otras escalas naturales para crear melodías en el diapasón.
      </p>
      <p>
        <span style={{ background: '#fbeee6', padding: '2px 6px', borderRadius: '4px', color: '#e67e22', fontWeight: 'bold' }}>
          Oído:
        </span>{" "}
        Adivina notas naturales al azar en diferentes posiciones del mástil.
      </p>
      <p>
        <span style={{ background: '#eafaf1', padding: '2px 6px', borderRadius: '4px', color: '#2980b9', fontWeight: 'bold' }}>
          Meta:
        </span>{" "}
        Tocar y nombrar cualquier nota natural en cualquier cuerda y traste sin dudar.
      </p>
      <p style={{ marginTop: '12px', background: '#f1f8e9', padding: '8px', borderRadius: '6px' }}>
        <strong>Ejercicio final:</strong> Improvisa una melodía usando solo notas naturales.<br />
        <em>Juega con un compañero: uno toca una nota, el otro la adivina y la ubica en el diapasón.</em>
      </p>
    </ClassCard>
  );
}