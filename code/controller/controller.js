//mainView
    //Legg til ny
    // Legge til en ny box i modellen.
    function newBox() {
        let x =  {
            name: inputTitle,
            
        };
        model.series.push(x);
    
        inputText = "";
        mainPageView();
    }

    //Endre Valgt
    //Sende deg inn på subView, innenfor den boksen som er valgt.
    function changeBox {
        
    }

    //Søk etter innhold
    //Søkeboks som man kan søke igjennom gjenstander i alle boksene i modellen.
    function search {

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
    function addNewContentInBox {

    }

    //Endre valgt
    //Her skal man kunne endre den valgte gjenstanden som er inne i en ny boks (navn)
    function changeContentInBox {

    }

    //flytt
    //Flytte en gjenstand fra boks x til box y f.eks.
    function moveContentfromBox {

    }

    //Slett
    //Slette den valgte gjenstanden innenfor den valgte boksen.
    function deleteContentInBox(index) {
        model.boxes[0].content[0].splice(index, 1);
        mainView();
    }
