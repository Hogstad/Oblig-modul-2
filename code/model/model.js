//model
const divApp = document.getElementById("app");

const model = {
    showBoxes: "",
    selectedBox: 0,
    checkedBox: '',
    searchInput: '',
    
    boxes: [
        {
            name: 'Box 1',
            content: [
                { contentOfBox: 'greier1',},
                { contentOfBox: 'greier2',},
                { contentOfBox: 'greier3',},
                { contentOfBox: 'greier4',},
            ],
        },
        {
            name: 'Box 2',
            content: [
                { contentOfBox: 'greier5',},
                { contentOfBox: 'greier6',},
                { contentOfBox: 'greier7',},
                { contentOfBox: 'greier8',},
            ],

        },
        {
            name: 'Box 3',
            content: [
                { contentOfBox: 'greier9',},
                { contentOfBox: 'greier10',},
                { contentOfBox: 'greier11',},
                { contentOfBox: 'greier12',},
            ],

        },
    ],
}


//model.boxes[0].content[0]