// Initialer Zustand der Felder
let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'cross';

// Funktion, um die Tabelle zu rendern
function render() {
    let content = document.getElementById('content');
    let tableHtml = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            console.log(index)
            let cellContent = fields[index] === 'circle' ? generateSVGCircle() : fields[index] === 'cross' ? generateSVGX() : '';
            tableHtml += `<td onclick="handleClick(${index}, this)">${cellContent}</td>`;
        }
        tableHtml += '</tr>';
    }

    tableHtml += '</table>';
    content.innerHTML = tableHtml;
}

function handleClick(index, cell) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        cell.innerHTML = currentPlayer === 'circle' ? generateSVGCircle() : generateSVGX();
        cell.onclick = null; // Entfernt das onclick-Attribut

        // Wechsel des Spielers
        currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
    }
}

function generateSVGCircle() {
    const svgNamespace = "http://www.w3.org/2000/svg";
  
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", "70");
    svg.setAttribute("height", "70");
    svg.setAttribute("viewBox", "0 0 70 70");
  
    const circle = document.createElementNS(svgNamespace, "circle");
    circle.setAttribute("cx", "35");
    circle.setAttribute("cy", "35");
    circle.setAttribute("r", "30");
    circle.setAttribute("stroke", "#00B0EF");
    circle.setAttribute("stroke-width", "5");
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke-dasharray", "188.4");
    circle.setAttribute("stroke-dashoffset", "188.4");
  
    const animate = document.createElementNS(svgNamespace, "animate");
    animate.setAttribute("attributeName", "stroke-dashoffset");
    animate.setAttribute("from", "188.4");
    animate.setAttribute("to", "0");
    animate.setAttribute("dur", "0.3s");
    animate.setAttribute("repeatCount", "1");
    animate.setAttribute("fill", "freeze");
  
    circle.appendChild(animate);
    svg.appendChild(circle);
  
    // Convert the SVG element to a string
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
  
    return svgString;
}
  
function generateSVGX() {
    const svgNamespace = "http://www.w3.org/2000/svg";
  
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", "70");
    svg.setAttribute("height", "70");
    svg.setAttribute("viewBox", "0 0 70 70");
  
    const line1 = document.createElementNS(svgNamespace, "line");
    line1.setAttribute("x1", "10");
    line1.setAttribute("y1", "10");
    line1.setAttribute("x2", "60");
    line1.setAttribute("y2", "60");
    line1.setAttribute("stroke", "#FFBF00");
    line1.setAttribute("stroke-width", "5");
    line1.setAttribute("stroke-dasharray", "70");
    line1.setAttribute("stroke-dashoffset", "70");
  
    const animate1 = document.createElementNS(svgNamespace, "animate");
    animate1.setAttribute("attributeName", "stroke-dashoffset");
    animate1.setAttribute("from", "70");
    animate1.setAttribute("to", "0");
    animate1.setAttribute("dur", "0.3s");
    animate1.setAttribute("repeatCount", "1");
    animate1.setAttribute("fill", "freeze");
  
    line1.appendChild(animate1);
  
    const line2 = document.createElementNS(svgNamespace, "line");
    line2.setAttribute("x1", "60");
    line2.setAttribute("y1", "10");
    line2.setAttribute("x2", "10");
    line2.setAttribute("y2", "60");
    line2.setAttribute("stroke", "#FFBF00");
    line2.setAttribute("stroke-width", "5");
    line2.setAttribute("stroke-dasharray", "70");
    line2.setAttribute("stroke-dashoffset", "70");
  
    const animate2 = document.createElementNS(svgNamespace, "animate");
    animate2.setAttribute("attributeName", "stroke-dashoffset");
    animate2.setAttribute("from", "70");
    animate2.setAttribute("to", "0");
    animate2.setAttribute("dur", "0.3s");
    animate2.setAttribute("repeatCount", "1");
    animate2.setAttribute("fill", "freeze");
  
    line2.appendChild(animate2);
  
    svg.appendChild(line1);
    svg.appendChild(line2);
  
    // Convert the SVG element to a string
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
  
    return svgString;
}

// Initiales Rendering der Tabelle
init();

function init() {
    render();
}
