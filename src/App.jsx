import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

export default function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <main className="card">
        <p className="alert">
          Seu navegador não suporta reconhecimento de voz. Tente no Chrome ou no Edge.
        </p>
      </main>
    );
  }

  const start = () => SpeechRecognition.startListening({ continuous: true, language: 'pt-BR' });

  return (
    <main className="card">
      <h1>Reconhecimento de voz</h1>
      <p className="subtitle">Demonstração do pacote react-speech-recognition</p>

      <div className={`status ${listening ? 'on' : ''}`}>
        <span className="dot" />
        Microfone {listening ? 'ligado' : 'desligado'}
      </div>

      {!isMicrophoneAvailable && (
        <p className="alert">Permita o acesso ao microfone no navegador para continuar.</p>
      )}

      <div className="actions">
        <button className="primary" onClick={start} disabled={listening}>
          Começar
        </button>
        <button onClick={SpeechRecognition.stopListening} disabled={!listening}>
          Parar
        </button>
        <button onClick={resetTranscript} disabled={!transcript}>
          Limpar
        </button>
      </div>

      <div className="transcript">
        {transcript || <span className="placeholder">Clique em Começar e fale algo…</span>}
      </div>
    </main>
  );
}
