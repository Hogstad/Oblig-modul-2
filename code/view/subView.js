
subView();
function subView() {
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
            <div id="subViewButtons">
                <button onclick="addNewContentInBox()">Legg til ny</button>
                <button onclick="changeContentInBox()">Endre valgt</button>
                <button onclick="moveContentfromBox()">Flytt</button>
                <button onclick="deleteContentInBox()">Slett</button>
            </div>
            `;
    divApp.innerHTML = html;
}
