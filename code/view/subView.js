
// function subView() {
//     let html = "";
//     html += `
//     <div id="dropDownMenu">
//     <select> `;
//     for(let i = 0; i <model.boxes.length; i++) {
//         html += `
//         <option onclick="selectedBox(${i})">${model.boxes[i].name}</option>
//         `;
//     }
//     html += `
//     </select>
//     </div>
//     `;
//     html += `
//     <div>
//     for (let j = 0; j < model.boxes[index].content.length; j++) {
//         html += ` 
//         ${model.boxes[index].content[j].contentOfBox};
//         `;
//         for (let k = 0; k < model.boxes[index].content[j].contentOfBox.length; k++) {
//             html += `
//             ${model.boxes[index].content[j].contentOfBox[k]},
//             `;
//         }
//     }
//     </div>
//     `;
//         html += `
//                 <div id="subViewButtons">
//                     <button onclick="addNewContentInBox()">Legg til ny</button>
//                     <button onclick="changeContentInBox()">Endre valgt</button>
//                     <button onclick="moveContentfromBox()">Flytt</button>
//                     <button onclick="deleteContentInBox()">Slett</button>
//                 </div>
//                 `;
//         divApp.innerHTML = html;
// }

// //Dropdown meny som gjør det mulig å hoppe igjennom hver boks. Derav ut ifra model.boxes så skal jeg få muligheten til å endre innholdet ut ifra den gitte boksen je ghar valgt.
// //Så trenger jeg en mulighet for å printe ut innholdet i den gitte boksen model.boxes.content.contentofbox
// //addNewContentInBox. Skal legge til ny gjenstand i den valgte boksen, da med mulighet for å skrive inn navnet på gjenstanden som skal inn i den gitte boksen.
// //changeContentInBox. Her skal man kunne endre navnet på den valgte gjenstanden inne i den gitte boksen.
// //moveContentFromBox. Skal kunne flytte en gjenstand fra en boks til en annen
// //deleteContentInBox. Skal kunne slette den gitte gjenstanden fra boksen.
// //Checkbox som skal bli printent for å hente indexen til gjenstandene innenfor hver boks. sånn at jeg får slettet eller endret ut ifra dette.


