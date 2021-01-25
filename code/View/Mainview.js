mainView();
function mainView() {
    let html = "";
    html += `
                <button>Legg til ny</button>
                <button>Vis innhold bruker</button>
                <button>Søk etter innhold</button>
                <button>Slett valg</button>`;

    for (let i = 0; i < model.boxes.length; i++) {
        html += `
                            <button onclick="printBox(${i})">${model.boxes[i]}</button>
                        `;
    };
    html += `
                        <div style = "background-color: green;">${model.showBoxes}</div>
        `;
    divApp.innerHTML = html;
};