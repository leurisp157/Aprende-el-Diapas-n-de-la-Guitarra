// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Fretboard from './components/Fretboard';
import QuizGame from './components/QuizGame';
import NaturalNotesQuiz from './components/NaturalNotesQuiz';
import Clase1 from './classes/Clase1';
import Clase2 from './classes/Clase2';
import Clase3 from './classes/Clase3';
import Clase4 from './classes/Clase4';
import Clase5 from './classes/Clase5';
import Clase6 from './classes/Clase6';
import Clase7 from './classes/Clase7';
import Clase8 from './classes/Clase8';
import './style.css';

export default function App() {
  const [screen, setScreen] = useState('menu'); // 'menu', 'clase', 'quiz', 'natural-quiz'
  const [currentClass, setCurrentClass] = useState(1);

  const goTo = (type, value) => {
    if (type === 'clase') {
      setCurrentClass(value);
      setScreen('clase');
    } else if (type === 'quiz') {
      setScreen('quiz');
    } else if (type === 'natural-quiz') {
      setScreen('natural-quiz');
    } else if (type === 'menu') {
      setScreen('menu');
    }
  };

  const getClassComponent = () => {
    const props = { onBack: () => goTo('menu') };
    switch (currentClass) {
      case 1: return <Clase1 {...props} />;
      case 2: return <Clase2 {...props} />;
      case 3: return <Clase3 {...props} />;
      case 4: return <Clase4 {...props} />;
      case 5: return <Clase5 {...props} />;
      case 6: return <Clase6 {...props} />;
      case 7: return <Clase7 {...props} />;
      case 8: return <Clase8 {...props} />;
      default: return <Clase1 {...props} />;
    }
  };

  // Notas destacadas según la clase actual (solo si está en modo clase)
  const highlightedNotes = (() => {
    if (screen !== 'clase') return [];
    switch (currentClass) {
      case 1: return ['E-0', 'A-0', 'D-0', 'G-0', 'B-0', 'e-0'];
      case 2: return ['E-0', 'E-1', 'E-3', 'E-5', 'E-7', 'E-8', 'E-10', 'E-12'];
      case 3: return ['A-0', 'D-5', 'D-0', 'G-5', 'G-0', 'B-4'];
      case 4: return ['G-0', 'G-2', 'G-4', 'G-5', 'G-7', 'G-9', 'G-10', 'G-12'];
      case 5: return ['E-1', 'D-1', 'A-1'];
      case 6: return ['E-8', 'E-10', 'E-12', 'e-1', 'e-3', 'e-5', 'e-7', 'e-8'];
      case 7: return ['E-3', 'A-10', 'D-5', 'G-0', 'B-8', 'e-3'];
      case 8: return ['E-8', 'A-5', 'D-10', 'G-5', 'B-8', 'e-1'];
      default: return [];
    }
  })();

  return (
    <div className="container">
      <Header />

      {/* Botón de "Volver al Menú" si no estamos en menú */}
      {screen !== 'menu' && (
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <button
            className="btn"
            style={{ backgroundColor: '#95a5a6', fontSize: '12px', padding: '8px 12px' }}
            onClick={() => goTo('menu')}
          >
            ← Volver al Menú
          </button>
        </div>
      )}

      {/* Diapasón solo visible cuando se muestra una clase */}
      {screen === 'clase' && (
        <Fretboard highlightedNotes={highlightedNotes} />
      )}

      {/* Contenido principal */}
      {screen === 'menu' && (
        <Menu onSelect={goTo} />
      )}

      {screen === 'clase' && (
        <div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#2980b9',
              marginBottom: '15px'
            }}
          >
            Clase {currentClass} de 8
          </div>
          {getClassComponent()}
        </div>
      )}

      {screen === 'quiz' && (
        <div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#8e44ad',
              marginBottom: '20px'
            }}
          >
            🎮 Examen: Adivina la Nota
          </div>
          <QuizGame />
        </div>
      )}

      {screen === 'natural-quiz' && (
        <div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#2c3e50',
              marginBottom: '20px'
            }}
          >
            🔍 Examen: Notas Naturales y Distancias
          </div>
          <NaturalNotesQuiz />
        </div>
      )}
    </div>
  );
}