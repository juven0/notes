
//html elements 
const button = document.querySelector('#addNote')
const edits = document.querySelectorAll('.edit')
const noteContainer = document.querySelector('.note-content')
// variable 
let state = false


const timeline = anime.timeline()
const tl2 = anime.timeline()

const animationOn = ()=>{

    timeline.add({
        targets: button,
        translateY: [0, -12, 0],
        scale: [1, 0.85, 1],
        rotate: 316,
        duration: 600,
        easing: "easeInOutSine",
    }).add(
        {
            targets: ".first",
            translateY: [0, 80],
            duration: 3200,
            scaleY: [1.8, 1],
        },
        "-=400"
    ).add(
        {
            targets: " .other",
            translateY: function (el) {
                return [el.getAttribute("data-from"), el.getAttribute("data-to")];
            },
            scaleY: [0, 1],
            duration: 1600,
            opacity: {
                value: 1,
                duration: 10,
            },
            delay: anime.stagger(240),
            complete: function () {
                state = true
                console.log('anime one')
            },
        },
        "-=2600"
    )
    return
}

const animationOff =()=>{
    timeline.add({
        targets: button,
        rotate: 0,
        duration: 600,
        easing: "easeInOutSine",
    }).add(
        {
            targets: ".color-palet",
            translateY: function (el) {
                return [el.getAttribute("data-to"), 0];
            },
            duration: 400,
            delay: anime.stagger(60),
            easing: "easeInOutSine",
            complete: function () {
                state = false;
                console.log('anime off')
            },
        },
        "-=400"
    );
    return
}

// note action 

edits.forEach((element,key)=>{
    element.addEventListener('click', () => {
        console.log('edit'+key)

    })
})

// create new notes element 

let card  = document.createElement('div')
let noteText = document.createElement('div')
let inputNote = document.createElement('textarea')
let noteEdit = document.createElement('div')
let date = document.createElement('div')
let edit = document.createElement('div')
let image = document.createElement('img')

image.src = "./icons/edit.svg"
date.className = 'date'
edit.className = 'edit'
noteEdit.className = 'note-edit'
inputNote.cols= '30'
inputNote.rows= '10'
inputNote.className = 'input-note'
card.className= 'card'
noteText.className = 'note-text'

edit.appendChild(image)
noteEdit.appendChild(date)
noteEdit.appendChild(edit)
noteText.appendChild(noteEdit)
card.appendChild(noteText)
card.appendChild(noteEdit)

button.addEventListener("click", () => {
    console.log('clicked')

    

    if(state === true){
        animationOff()
        state = false
        return
    }else {
        animationOn()
        state = true
        return
    }

}, false)





