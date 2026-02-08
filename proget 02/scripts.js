// Code JavaScript pour le graphique interactif

const graphCanvas = document.getElementById('graph-canvas');
const ctx = graphCanvas.getContext('2d');

// Données du graphique
const data = [
  { x: 0, y: 1000 },
  { x: 1, y: 2000 },
  { x: 2, y: 3000 },
  // ...
];

// Fonction pour dessiner le graphique
function drawGraph() {
  ctx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
  ctx.beginPath();
  ctx.moveTo(data[0].x, data[0].y);
  for (let i = 1; i < data.length; i++) {
    ctx.lineTo(data[i].x, data[i].y);
  }
  ctx.stroke();
}

// Événement pour mettre à jour le graphique lorsque les données changent
graphCanvas.addEventListener('update', () => {
  drawGraph();
});
