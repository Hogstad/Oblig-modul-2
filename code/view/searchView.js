function searchView() {
    let html = "";
    html += `
    <input type="text" onchange="model.searchInput = this.value">
    <button onclick="search()">Search</button>
    <button onclick="mainView()">Cancel</button>
    `;
    divApp.innerHTML = html;
}