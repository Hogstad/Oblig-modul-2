function addNewContentView() {
    let html = "";
    html += `
    <input type="text" onchange="model.newContentInput = this.value">
    <button onclick="addNewContentInBox()">Legg til</button>
    <button onclick="subView()">Cancel</button>
    `;
    divApp.innerHTML = html;
}