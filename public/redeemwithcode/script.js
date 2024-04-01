// Definisci i codici per accedere ai video (potrebbero essere gestiti da un server)
const codiciVideo = {
  "codice1": "/redeemwithcode/files/0001-0105.mp4",
  "salemnft": "/redeemwithcode/files/0001-0884.mp4"
  // Aggiungi altri codici e URL dei video qui
};


function visualizzaVideo() {
  const inputCodice = document.getElementById('codice').value;

  // Verifica se il codice inserito corrisponde a uno dei codici validi
  if (codiciVideo[inputCodice]) {
    const videoContainer = document.getElementById('videoContainer');

    // Crea un elemento video e assegna l'URL corrispondente al codice
    const video = document.createElement('video');
    video.src = codiciVideo[inputCodice];
    video.controls = true; // Aggiunge i controlli per il video

    // Rimuovi il video precedente se presente
    while (videoContainer.firstChild) {
      videoContainer.removeChild(videoContainer.firstChild);
    }

    // Aggiungi il nuovo video al contenitore
    videoContainer.appendChild(video);
  } else {
    alert("Codice non valido. Inserisci un codice valido per accedere al video.");
  }
}
