// script.js

// Initialer Zustand der Felder
let fields = [
    null,
    'circle',
    'circle',
    'cross',
    null,
    null,
    'cross',
    'circle',
    'cross',
];

// Funktion, um die Tabelle zu rendern
function render() {
    let content = document.getElementById('content');
    let tableHtml = '<table>';

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            console.log(index)
            let cellContent = fields[index] === 'circle' ? 'o' : fields[index] === 'cross' ? 'x' : '';
            tableHtml += `<td>${cellContent}</td>`;
        }
        tableHtml += '</tr>';
    }

    tableHtml += '</table>';
    content.innerHTML = tableHtml;
}


function init(){
    render();
}

// Aufruf der render-Funktion, um die Tabelle darzustellen

