
mainView();
function mainView() {
    let html = "";
    html += `
    <div id="dropDownMenu">
    <select>
        <option value="1">Box 1</option>
        <option value="2">Box 2</option>
    </select>
    </div>
    `
    html += `
            <div id="mainViewButtons">
                <button>Legg til ny</button>
                <button>Vis innhold</button>
                <button>Søk etter innhold</button>
                <button>Slett valgt</button
            </div> 
            `;
    divApp.innerHTML = html;
};

// // subView();
// // function subView() {
// //     let html = "";
// //     html += `
// <div id="dropDownMenu">
// <select>
//     <option value="1">Box 1</option>
//     <option value="2">Box 2</option>
// </select>
// </div>
// //         <div id="subViewButtons">
// //             <Button>Legg til ny</button>
// //             <Button>Endre valgt</button>
// //             <Button>Flytt</button>
// //             <Button>Slett</button>
// //         </div>
// //         `;
// //     divApp.innerHTML = html;
// // }