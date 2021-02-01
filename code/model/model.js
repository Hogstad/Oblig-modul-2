//model
const divApp = document.getElementById("app");

const model = {
    showBoxes: "",
    selectedBox: 0,
    
    boxes: [
        {
            name: 'Box 1',
            content: [
                { contentOfBox: 'greier1', isChecket: false },
                { contentOfBox: 'greier2', isChecket: false },
                { contentOfBox: 'greier3', isChecket: false },
                { contentOfBox: 'greier4', isChecket: false },
            ],
        },
        {
            name: 'Box 2',
            content: [
                { contentOfBox: 'greier5', isChecket: false },
                { contentOfBox: 'greier6', isChecket: false },
                { contentOfBox: 'greier7', isChecket: false },
                { contentOfBox: 'greier8', isChecket: false },
            ],

        },
        {
            name: 'Box 3',
            content: [
                { contentOfBox: 'greier9', isChecket: false },
                { contentOfBox: 'greier10', isChecket: false },
                { contentOfBox: 'greier11', isChecket: false },
                { contentOfBox: 'greier12', isChecket: false },
            ],

        },
    ],
}


//model.boxes[0].content[0]