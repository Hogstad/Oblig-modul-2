
mainView();
function mainView() {
    let html = "";
    html += `
    <div id="dropDownMenu">
    <select>
        <option value="1">${model.boxes[0]}</option>
        <option value="2">${model.boxes[1]}</option>
    </select>
    </div>
    `
    html += `
            <div id="mainViewButtons">
                <button onclick="newBox()">Legg til ny</button>
                <button onclick="showContent()">Vis innhold</button>
                <button onclick="seach()">Søk etter innhold</button>
                <button onclick="deleteBox()">Slett valgt</button>
            </div> 
            `;
    divApp.innerHTML = html;
};

