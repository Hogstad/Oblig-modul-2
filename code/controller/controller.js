//mainView
    //Legg til ny
    // Legge til en ny box i modellen.
    function newBox() {
        let x = {
            name: 'Box 3',
        };
    model.boxes.push(x);
    mainView();
    }

    //Vis innhold
    //Sende deg inn på subView, innenfor den boksen som er valgt.
    function showContent() {
    mainView();

    }

    //Søk etter innhold
    //Søkeboks som man kan søke igjennom gjenstander i alle boksene i modellen.
    function search() {
    mainView();

    }

    //Slett Valgt
    //Slette den markerte boksen.
    function deleteBox(index) {
        model.boxes.splice(index, 1);
    mainView();
    }

//subView
    //Legg til ny
    //Legge til nytt innhold innenfor den valgte boksen.
    function addNewContentInBox() {
        model.boxes(index).content.contentOfBox.push
    subView();

    }

    //Endre valgt
    //Her skal man kunne endre den valgte gjenstanden som er inne i en ny boks (navn)
    function changeContentInBox() {
        model.boxes(index).content.contentOfBox.splice(index,1)
    subView();

    }

    //flytt
    //Flytte en gjenstand fra boks x til box y f.eks.
    function moveContentfromBox() {
    subView();
    }

    //Slett
    //Slette den valgte gjenstanden innenfor den valgte boksen.
    function deleteContentInBox(index) {
        model.boxes[index].content.splice(index,1),
    subView();
    }