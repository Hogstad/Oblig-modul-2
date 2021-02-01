
mainView();
function mainView() {
    let html = "";
    html += `
    <div id="dropDownMenu">
    <select onchange="selectedBox(this.value, true)"> `;
    for(let i = 0; i <model.boxes.length; i++) {
        if (i == model.selectedBox) {
            html += `
            <option selected value="${i}">${model.boxes[i].name}</option>
            `;
        }
        else {
            html += `
            <option value="${i}">${model.boxes[i].name}</option>
            `;
        }
    }
    html += `
    </select>
    </div>
    `
        html += `
                <div id="mainViewButtons">
                    <button onclick="newBox()">Legg til ny</button>
                    <button onclick="subView()">Vis innhold</button>
                    <button onclick="seach()">Søk etter innhold</button>
                    <button onclick="deleteBox(${model.selectedBox})">Slett valgt</button>
                </div>
                `;
        divApp.innerHTML = html;
}

// Jeg trenger at når jeg velger en box i dropdown menu, så skal resten av fungsjonenen på siden jobbe ut ifra index til boxen som er valgt i drop downmenu.
// showContent. Denne knappen skal sende deg inn på subView av den gitte boksen som er valg ut ifra boksen man har valgt ut ifra dropdown menyen.
// newBox knappen skal legge en ny box inn i model.boxes.push så skal den nye boksen gå inn i model.boxes{name: Box 3, Content[{contentOfBox: 'greier9', isChecket: false},}]}
// seach skal søke etter innhold i modellen. kommer evt opp et vindu du kan skrive i, så skal den søke etter navnet om det ligger i en av boksene. Skal returene hvilken boks det du søkte etter ligger i.
// deleteBox, skal slette en hel boks.
