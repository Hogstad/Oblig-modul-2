//mainView
    //Legg til ny
    // Legge til en ny box i modellen.
    function newBox() {
        let x = {
            name: newBoxName(),
            content: [],
        };
        model.boxes.push(x);
    mainView();
    }

    function newBoxName() {
        for (let i = 1; i <= model.boxes.length +1; i++) {
            if (newBoxNameHelper(i)) {
                return 'Box '+i;
            }
        }
    }

    function newBoxNameHelper(i) {
        for (let j = 0; j < model.boxes.length; j++) {
            let num = model.boxes[j].name.substring(4)
            if (num == i) {
                return false;
            }
        }
        return true;
    }

    //Vis innhold
    //Sende deg inn på subView, innenfor den boksen som er valgt.
    function showContent() {

    subView();
    }
    //Søk etter innhold
    //Søkeboks som man kan søke igjennom gjenstander i alle boksene i modellen.
    function search() {
        for (let i = 0; i < model.boxes.length; i++) {
            for (let j = 0; j < model.boxes[i].content.length; j++ ) {
                if (model.searchInput == model.boxes[i].content[j].contentOfBox) {
                    model.selectedBox = i;
                    model.checkedBox = j;
                    subView();
                }
            }
        }
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
        let x = {
            contentOfBox: 'test',
        };
        model.boxes[index].content.push(x);
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
    function deleteContentInBox() {
        if (model.checkedBox === '') {
            return
        }
        else {
            model.boxes[model.selectedBox].content.splice(model.checkedBox,1)
        }
        model.checkedBox = '';
    subView();
    }

    function selectedBox(num, bool) {
        model.selectedBox = num;
        bool ? mainView() : subView()
    }
    //model.boxes.content.contentofbox

    //Checkbox
    //Velge den gitte gjenstanden ut ifra modellen.
    function boxIsChecked(index) {
        if (index === model.checkedBox) {
            model.checkedBox = ''; 
        }
        else {
            model.checkedBox = index;
        }
    subView();
    }