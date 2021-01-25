function printBox(index) {
    let html = "";
    for (let i = 0; i < model.boxes[index].length; i++) {
        html += `
            <h2>${model.boxes[index].navn}</h2>
        `;
        for (let j = 0; j < model.boxes[index].content.length; j++) {
            html += `
                <h4>${model.boxes[index].content[j].contentOfBox}</h4>
            `;
        }
    }
    html += `
        <button>Rediger</button>
        <button>Legg til ny</button>
    `;
    model.showBoxes = html;
    mainView();
}
