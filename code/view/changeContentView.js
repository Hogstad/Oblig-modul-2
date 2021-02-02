function changeContentView() {
    let html = "";
    html += `
    <input type="text" onchange="model.changeContentInput = this.value">
    <button onclick="changeContentInBox()">Endre</button>
    <button onclick="subView()">Cancel</button>
    `;
    divApp.innerHTML = html;
}