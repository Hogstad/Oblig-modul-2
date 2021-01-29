
mainView();
function mainView() {
    let html = "";
    html += `
            <div id="mainViewButtons">
                <button>Legg til ny</button>
                <button>Vis innhold</button>
                <button>Søk etter innhold</button>
                <button>Slett valgt</button
            </div> 
            `;
};

subView();
function subView() {
    let html = "";
    html += `
        <div id="subViewButtons">
            <Button>Legg til ny</button>
            <Button>Endre valgt</button>
            <Button>Flytt</button>
            <Button>Slett</button>
        </div>
        `;
}