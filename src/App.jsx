import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function App() {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Seu navegador não suporta reconhecimento de voz.</p>;
  }

  return (
    <div style={{ padding: 24 }}>
      <p>Microfone: {listening ? 'ligado' : 'desligado'}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'pt-BR' })}>
        Começar
      </button>
      <button onClick={SpeechRecognition.stopListening}>Parar</button>
      <button onClick={resetTranscript}>Limpar</button>
      <p>{transcript}</p>
    </div>
  );
}