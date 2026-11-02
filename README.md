# Reconhecimento de voz com React

Este projeto é um exemplo simples de reconhecimento de voz em uma aplicação React. A
aplicação utiliza o pacote
[`react-speech-recognition`](https://www.npmjs.com/package/react-speech-recognition)
para capturar a fala do usuário e exibir a transcrição na tela.

## Objetivo

O objetivo deste trabalho é explorar um pacote que pode ser útil em aplicações futuras,
como sistemas de acessibilidade, comandos de voz, anotações e formulários preenchidos
por fala.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- `react-speech-recognition`

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado pelo Vite, normalmente
`http://localhost:5173`.

> É necessário permitir o acesso ao microfone. O reconhecimento de voz depende do
> suporte do navegador à Web Speech API.

## Como o projeto funciona

O componente principal está em `src/App.jsx`. Nele, o hook `useSpeechRecognition`
fornece:

- `transcript`: texto reconhecido a partir da fala;
- `listening`: informa se o microfone está ativo;
- `resetTranscript`: limpa a transcrição;
- `browserSupportsSpeechRecognition`: verifica se o navegador é compatível.

Os botões possuem as seguintes funções:

- **Começar**: inicia a captura contínua de voz em português do Brasil (`pt-BR`);
- **Parar**: interrompe o reconhecimento;
- **Limpar**: apaga o texto exibido.

Quando o usuário fala, o pacote converte o áudio em texto e atualiza o valor de
`transcript`. Como esse valor vem do hook, o React renderiza automaticamente a nova
transcrição na tela.

## Estrutura principal

```text
src/
├── App.jsx       # Componente e lógica do reconhecimento de voz
├── App.css       # Estilos específicos da aplicação
├── index.css     # Estilos globais
└── main.jsx      # Ponto de entrada do React
```
