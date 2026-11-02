import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function App() {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Seu navegador não suporta reconhecimento de voz.</p>;
  }

  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap:15 }}>
      <p>Microfone: {listening ? 'ligado' : 'desligado'}</p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16,  justifyContent: 'center' }}>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'pt-BR' })}>
        Começar
      </button>
      <button onClick={SpeechRecognition.stopListening}>Parar</button>
      <button onClick={resetTranscript}>Limpar</button>
      </div>
      <p>{transcript}</p>
    </div>
  );
}