// src/components/NaturalNotesQuiz.jsx

import { useState, useEffect } from 'react';

// Notas cromáticas y naturales
const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NATURAL_TONICS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Fórmula escala mayor en semitonos: T-T-st-T-T-T-st
const MAJOR_INTERVALS = [2, 2, 1, 2, 2, 2, 1];

// Nombres de grados
const DEGREE_NAMES = {
  0: '1ª (tónica)',
  1: '2ª',
  2: '3ª',
  3: '4ª',
  4: '5ª',
  5: '6ª',
  6: '7ª'
};

// Obtener escala mayor desde una tónica
const getMajorScale = (tonic) => {
  const tonicIndex = NOTES.indexOf(tonic);
  if (tonicIndex === -1) return null;

  const scale = [tonic];
  let currentIndex = tonicIndex;

  for (let interval of MAJOR_INTERVALS) {
    currentIndex = (currentIndex + interval) % 12;
    scale.push(NOTES[currentIndex]);
  }

  return scale; // [1, 2, 3, 4, 5, 6, 7]
};

export default function NaturalNotesQuiz() {
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [tonic, setTonic] = useState('C'); // Tónica seleccionada
  const [scale, setScale] = useState(null); // Escala generada
  const [degree, setDegree] = useState(4); // Grado a preguntar (ej: 5ª = índice 4)
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  // Generar nueva pregunta cuando cambia la tónica o se reinicia
  useEffect(() => {
    const newScale = getMajorScale(tonic);
    if (!newScale) return;

    setScale(newScale);

    // Elegir grado aleatorio (0 a 6)
    const randomDegree = Math.floor(Math.random() * 7);
    const note = newScale[randomDegree];
    const degreeName = DEGREE_NAMES[randomDegree];

    setDegree(randomDegree);
    setQuestion(`¿Cuál es la ${degreeName} nota de ${tonic} mayor?`);
    setCorrectAnswer(note);

    // Generar opciones: 3 incorrectas + 1 correcta
    const wrongOptions = NOTES.filter(n => n !== note);
    const shuffled = wrongOptions.sort(() => 0.5 - Math.random());
    const opts = [note, ...shuffled.slice(0, 3)].sort();

    setOptions(opts);

    // Resetear estado
    setSelected(null);
    setFeedback('');
  }, [tonic]);

  const checkAnswer = (note) => {
    const isCorrect = note === correctAnswer;
    setSelected(note);
    if (isCorrect) {
      setFeedback(`¡Correcto! 🎉 La ${DEGREE_NAMES[degree]} de ${tonic} mayor es ${correctAnswer}.`);
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback(`Incorrecto. La ${DEGREE_NAMES[degree]} de ${tonic} mayor es ${correctAnswer}, no ${note}.`);
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  };

  const nextQuestion = () => {
    // Mantener misma tónica, generar nueva pregunta
    const newScale = getMajorScale(tonic);
    if (!newScale) return;

    const randomDegree = Math.floor(Math.random() * 7);
    const note = newScale[randomDegree];
    const degreeName = DEGREE_NAMES[randomDegree];

    setDegree(randomDegree);
    setQuestion(`¿Cuál es la ${degreeName} nota de ${tonic} mayor?`);
    setCorrectAnswer(note);

    const wrongOptions = NOTES.filter(n => n !== note);
    const shuffled = wrongOptions.sort(() => 0.5 - Math.random());
    setOptions([note, ...shuffled.slice(0, 3)].sort());

    setSelected(null);
    setFeedback('');
  };

  const resetScore = () => {
    setScore({ correct: 0, total: 0 });
    nextQuestion();
  };

  return (
    <div className="card" style={{ marginTop: '20px' }}>
      <div style={{
        background: '#e8f5e9',
        color: '#2e7d32',
        padding: '8px 0',
        borderRadius: '8px 8px 0 0',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '16px'
      }}>
        🎼 Escala Mayor: Grados Aleatorios
      </div>

      <h2>🎹 Elige una Tónica</h2>
      <p style={{ color: '#7f8c8d', fontSize: '15px' }}>
        Aprende los grados de la escala mayor. Selecciona una nota y responde preguntas aleatorias.
      </p>

      {/* Selector de tónica */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <label style={{ fontWeight: 'bold', marginRight: '10px' }}>
          Tónica:
        </label>
        <select
          value={tonic}
          onChange={(e) => setTonic(e.target.value)}
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            backgroundColor: '#f4f6f9',
            fontWeight: 'bold'
          }}
        >
          {NATURAL_TONICS.map(note => (
            <option key={note} value={note}>
              {note} mayor
            </option>
          ))}
        </select>
      </div>

      {/* Escala generada */}
      {scale && (
        <div style={{
          padding: '12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          margin: '15px 0',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          <strong>Escala de {tonic} mayor:</strong><br />
          {scale.map((note, i) => (
            <span key={i}>
              {note}<sup>{i + 1}</sup>{i < 6 ? ' – ' : ''}
            </span>
          ))}
        </div>
      )}

      {/* Pregunta */}
      <p style={{ fontSize: '18px', margin: '20px 0', textAlign: 'center' }}>
        <strong>{question}</strong>
      </p>

      {/* Opciones */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        margin: '20px 0'
      }}>
        {options.map(note => (
          <button
            key={note}
            className="btn"
            style={{
              fontSize: '18px',
              padding: '12px 20px',
              backgroundColor: selected === note
                ? note === correctAnswer ? '#27ae60' : '#e74c3c'
                : '#3498db',
              fontWeight: 'bold',
              opacity: selected ? 1 : 0.95,
              transform: selected ? 'scale(1.05)' : 'scale(1)'
            }}
            onClick={() => !selected && checkAnswer(note)}
            disabled={selected}
          >
            {note}
          </button>
        ))}
      </div>

      {/* Retroalimentación */}
      {feedback && (
        <p style={{
          margin: '15px 0',
          padding: '12px',
          borderRadius: '8px',
          backgroundColor: feedback.includes('Correcto') ? '#eafaf1' : '#fdedec',
          color: feedback.includes('Correcto') ? '#27ae60' : '#c0392b',
          border: `1px solid ${feedback.includes('Correcto') ? '#27ae60' : '#e74c3c'}`,
          fontWeight: 'bold'
        }}>
          {feedback}
        </p>
      )}

      {/* Botones */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {selected ? (
          <button className="btn" style={{ backgroundColor: '#2980b9' }} onClick={nextQuestion}>
            Siguiente Pregunta ➜
          </button>
        ) : (
          <p style={{ color: '#7f8c8d', fontSize: '14px' }}>
            Elige una opción para responder...
          </p>
        )}

        <div style={{ marginTop: '10px' }}>
          <button
            className="btn"
            style={{ backgroundColor: '#95a5a6', fontSize: '12px' }}
            onClick={resetScore}
          >
            Reiniciar Puntuación
          </button>
        </div>
      </div>

      {/* Puntuación */}
      <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
        <strong>Puntuación:</strong> {score.correct} / {score.total}
      </p>

      {/* Fórmula visual */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        fontSize: '14px',
        textAlign: 'center'
      }}>
        <strong>Fórmula escala mayor:</strong> T–T–st–T–T–T–st<br />
        <span style={{ fontSize: '12px', color: '#555' }}>
          (tono, tono, semitono, tono, tono, tono, semitono)
        </span>
      </div>
    </div>
  );
}