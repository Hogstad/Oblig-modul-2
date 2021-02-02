
function subView() {
    let html = "";
    html += `
    <div id="dropDownMenu">
    <select onchange="selectedBox(this.value, false)"> `;
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
    `;
    html += `
    <table style="width:60%">
    `;
    let content = model.boxes[model.selectedBox].content;
    for(let j = 0; j < content.length; j++) {
        html += `
        <tr>
            <td>${j + 1}:</td>
            <td>${content[j].contentOfBox}</td>
            `;
            if (j === model.checkedBox) {
               html += `
               <td><input checked type="checkbox" onchange="boxIsChecked(${j})"></td>`;
            }
            else {
                html += `
                <td> <input type="checkbox" onchange="boxIsChecked(${j})"> </td>
                `;
            }
            html += `
        </tr>
        `; 
    } 
    html += `
    </table>
    `;
        html += `
                <div id="subViewButtons">
                    <button onclick="addNewContentInBox()">Legg til ny</button>
                    <button onclick="changeContentInBox()">Endre valgt</button>
                    <button onclick="mainView()">Home</button>
                    <button onclick="deleteContentInBox()">Slett</button>
                </div>
                `;
        divApp.innerHTML = html;
}

//Dropdown meny som gjør det mulig å hoppe igjennom hver boks. Derav ut ifra model.boxes så skal jeg få muligheten til å endre innholdet ut ifra den gitte boksen je ghar valgt.
//Så trenger jeg en mulighet for å printe ut innholdet i den gitte boksen model.boxes.content.contentofbox
//addNewContentInBox. Skal legge til ny gjenstand i den valgte boksen, da med mulighet for å skrive inn navnet på gjenstanden som skal inn i den gitte boksen.
//changeContentInBox. Her skal man kunne endre navnet på den valgte gjenstanden inne i den gitte boksen.
//moveContentFromBox. Skal kunne flytte en gjenstand fra en boks til en annen
//deleteContentInBox. Skal kunne slette den gitte gjenstanden fra boksen.
//Checkbox som skal bli printent for å hente indexen til gjenstandene innenfor hver boks. sånn at jeg får slettet eller endret ut ifra dette.
