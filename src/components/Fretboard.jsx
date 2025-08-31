const NOTE_MAP = {
  E: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
  A: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'],
  D: ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
  G: ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
  B: ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  e: ['e', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'e'],
};

const NATURAL_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'e'];

export default function Fretboard({ highlightedNotes = [] }) {
  const strings = [
    { name: 'e', color: '#e74c3c' },
    { name: 'B', color: '#e67e22' },
    { name: 'G', color: '#f1c40f' },
    { name: 'D', color: '#2ecc71' },
    { name: 'A', color: '#3498db' },
    { name: 'E', color: '#9b59b6' }
  ];
  const frets = Array(13).fill().map((_, i) => i);

  return (
    <div style={{
      margin: '20px 0',
      textAlign: 'center',
      fontFamily: 'monospace',
      fontSize: '14px'
    }}>
      <div style={{
        background: '#eafaf1',
        color: '#27ae60',
        padding: '8px 0',
        borderRadius: '8px 8px 0 0',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '16px',
        marginBottom: '10px'
      }}>
        Estudio del diapasón según las escalas naturales
      </div>
      <h3>Diapasón (trastes 0-12) - Notas Naturales</h3>
      {strings.map((str, stringIndex) => (
        <div key={stringIndex} style={{
          display: 'flex',
          alignItems: 'center',
          height: '40px',
          marginBottom: '2px'
        }}>
          <span style={{ width: '30px', fontWeight: 'bold' }}>
            {str.name}
          </span>
          {frets.map(fret => {
            const note = NOTE_MAP[str.name][fret];
            const noteKey = `${str.name}-${fret}`;
            const isHighlighted = highlightedNotes.includes(noteKey);
            const isNatural = NATURAL_NOTES.includes(note.replace('e', 'E'));
            return (
              <div
                key={fret}
                style={{
                  width: '48px',
                  height: '32px',
                  border: '1px solid #ccc',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isHighlighted
                    ? str.color
                    : isNatural
                      ? '#eafaf1'
                      : 'white',
                  color: isHighlighted
                    ? 'white'
                    : isNatural
                      ? '#27ae60'
                      : 'black',
                  fontWeight: isHighlighted || isNatural ? 'bold' : 'normal',
                  fontSize: '13px',
                  borderRadius: isHighlighted ? '8px' : '0'
                }}
              >
                <span>{fret}</span>
                <span style={{ fontSize: '12px' }}>{note}</span>
              </div>
            );
          })}
        </div>
      ))}
      <p style={{ fontSize: '12px', color: '#27ae60', marginTop: '10px', fontWeight: 'bold' }}>
        Las celdas verdes muestran las notas naturales (C, D, E, F, G, A, B). ¡Enfócate en ellas para dominar las escalas naturales!
      </p>
    </div>
  );
}