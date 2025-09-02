// src/components/QuizGame.jsx

import { useState, useEffect } from 'react';

const NOTE_MAP = {
  E: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
  A: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'],
  D: ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
  G: ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
  B: ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  e: ['e', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'e'],
};

const STRING_COLORS = {
  E: '#9b59b6',
  A: '#3498db',
  D: '#2ecc71',
  G: '#f1c40f',
  B: '#e67e22',
  e: '#e74c3c',
};

const STRING_NAMES = {
  E: '6ª (E)',
  A: '5ª (A)',
  D: '4ª (D)',
  G: '3ª (G)',
  B: '2ª (B)',
  e: '1ª (e)',
};

const ALL_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export default function QuizGame() {
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [current, setCurrent] = useState(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [mode, setMode] = useState('position');
  const [showHelp, setShowHelp] = useState(false);

  // Generar pregunta aleatoria
  const generateQuestion = () => {
    const strings = Object.keys(NOTE_MAP);
    const randomString = strings[Math.floor(Math.random() * strings.length)];
    const randomFret = Math.floor(Math.random() * 13); // 0 a 12
    const correctNote = NOTE_MAP[randomString][randomFret];

    setCurrent({ string: randomString, fret: randomFret, correctNote });
    setAnswer('');
    setFeedback('');
    setShowAnswer(false);
  };

  // Generar opciones (1 correcta + 3 incorrectas)
  const generateOptions = () => {
    if (!current) return [];
    const options = new Set([current.correctNote]);
    while (options.size < 4) {
      const randomNote = ALL_NOTES[Math.floor(Math.random() * ALL_NOTES.length)];
      if (randomNote !== current.correctNote) {
        options.add(randomNote);
      }
    }
    return Array.from(options).sort();
  };

  const options = current ? generateOptions() : [];

  // Verificar respuesta
  const checkAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
    const isCorrect = selectedAnswer === current.correctNote;

    if (isCorrect) {
      setFeedback('¡Correcto! 🎉');
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setFeedback(`Incorrecto. La respuesta es ${current.correctNote}.`);
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
    setShowAnswer(true);
  };

  // Reiniciar puntuación
  const resetScore = () => {
    setScore({ correct: 0, total: 0 });
    generateQuestion();
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="card" style={{ marginTop: '20px' }} translate="no">
      {/* Encabezado con modo */}
      <div style={{
        background: '#eafaf1',
        color: '#27ae60',
        padding: '10px 0',
        borderRadius: '8px 8px 0 0',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '16px',
        marginBottom: '15px'
      }}>
        <span translate="no">🎯 Adivina la Nota</span>
      </div>

      <h2 translate="no">🎮 Practica el Diapasón</h2>
      <p style={{ color: '#7f8c8d', fontSize: '15px', lineHeight: '1.5' }} translate="no">
        Identifica la nota en la posición indicada. Ideal para dominar el mástil.
      </p>

      {/* Selector de modo */}
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <button
          className="btn"
          style={{
            backgroundColor: mode === 'position' ? '#27ae60' : '#bdc3c7',
            fontSize: '12px',
            padding: '6px 10px'
          }}
          onClick={() => setMode('position')}
          translate="no"
        >
          Por Posición
        </button>
        <button
          className="btn"
          style={{
            backgroundColor: mode === 'sound' ? '#27ae60' : '#bdc3c7',
            fontSize: '12px',
            padding: '6px 10px',
            marginLeft: '8px',
            opacity: 0.6
          }}
          disabled
          title="Modo sonido (próximamente)"
          translate="no"
        >
          Por Sonido 🎧
        </button>
      </div>

      {/* Puntuación */}
      <p style={{ marginBottom: '15px', fontSize: '14px' }} translate="no">
        <strong>Puntuación:</strong> {score.correct} / {score.total}
        <button
          className="btn"
          style={{ marginLeft: '10px', background: '#95a5a6', fontSize: '12px' }}
          onClick={resetScore}
          translate="no"
        >
          Reiniciar
        </button>
        <button
          className="btn"
          style={{ marginLeft: '8px', background: '#3498db', fontSize: '12px' }}
          onClick={() => setShowHelp(prev => !prev)}
          translate="no"
        >
          {showHelp ? 'Ocultar' : 'Ayuda'}
        </button>
      </p>

      {/* Sección de ayuda */}
      {showHelp && (
        <div style={{
          padding: '12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          marginBottom: '15px',
          fontSize: '14px',
          color: '#555',
          border: '1px solid #eee'
        }} translate="no">
          <strong>Ejemplo:</strong> En la 6ª cuerda (E), traste 5 → <strong>A</strong><br />
          Recuerda: Mi-Fa y Si-Do están a 1 traste de distancia.
        </div>
      )}

      {/* Pregunta */}
      {current && (
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px 0',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            {/* Cuerda */}
            <span style={{
              background: STRING_COLORS[current.string],
              color: 'white',
              borderRadius: '8px',
              padding: '10px 16px',
              fontWeight: 'bold',
              fontSize: '18px'
            }} translate="no">
              {STRING_NAMES[current.string]}
            </span>

            {/* Traste */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{
                display: 'inline-block',
                width: current.fret === 0 ? '56px' : '48px',
                height: '48px',
                borderRadius: current.fret === 0 ? '50%' : '8px',
                background: '#f4f6f9',
                border: `2px solid ${current.fret === 0 ? '#e67e22' : '#27ae60'}`,
                color: current.fret === 0 ? '#e67e22' : '#27ae60',
                fontWeight: 'bold',
                fontSize: '22px',
                textAlign: 'center',
                lineHeight: current.fret === 0 ? '48px' : '48px'
              }} translate="no">
                {current.fret === 0 ? '0' : current.fret}
              </span>
              {current.fret === 0 && (
                <span style={{
                  fontSize: '14px',
                  color: '#7f8c8d',
                  whiteSpace: 'nowrap'
                }} translate="no">
                  (al aire)
                </span>
              )}
            </div>
          </div>

          <p style={{
            fontSize: '17px',
            marginBottom: '15px',
            fontWeight: 'bold'
          }} translate="no">
            ¿Qué nota se encuentra aquí?
          </p>

          {/* Opciones */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            margin: '15px 0'
          }}>
            {options.map((opt) => (
              <button
                key={opt}
                className="btn"
                style={{
                  margin: '4px',
                  fontSize: '16px',
                  padding: '10px 16px',
                  backgroundColor: answer === opt
                    ? opt === current.correctNote ? '#27ae60' : '#e74c3c'
                    : '#3498db',
                  color: 'white',
                  fontWeight: answer === opt ? 'bold' : 'normal',
                  boxShadow: answer === opt ? '0 0 10px rgba(39, 174, 96, 0.3)' : 'none',
                  transform: answer === opt ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => !showAnswer && checkAnswer(opt)}
                disabled={showAnswer}
                translate="no"
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Retroalimentación */}
          {feedback && (
            <p style={{
              margin: '15px 0',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: feedback.startsWith('¡Correcto') ? '#eafaf1' : '#fdedec',
              color: feedback.startsWith('¡Correcto') ? '#27ae60' : '#c0392b',
              fontWeight: 'bold',
              fontSize: '16px',
              border: `1px solid ${feedback.startsWith('¡Correcto') ? '#27ae60' : '#e74c3c'}`
            }} translate="no">
              {feedback}
            </p>
          )}

          {/* Botón siguiente */}
          <button
            className="btn"
            onClick={generateQuestion}
            style={{
              backgroundColor: '#9b59b6',
              marginTop: '15px',
              padding: '10px 20px',
              fontWeight: 'bold'
            }}
            translate="no"
          >
            Siguiente Nota ➜
          </button>
        </div>
      )}
    </div>
  );
}