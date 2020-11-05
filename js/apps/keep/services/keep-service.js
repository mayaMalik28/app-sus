import { utilService } from '../../../services/util-service.js';

var gPinnedNotes = [
    {
        id: utilService.makeId(),
        type:"keepImg",
        isPinned: true,
        style:'white',
        info:{
            title: "picture",
            text: null,
            todos: null,
            imgUrl: "data:image/jpeg;base64,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",
            videoUrl: null,
            todos: null
        }
    },
]

var gNotes = [
    {
        id: utilService.makeId(),
        type:"keepImg",
        isPinned: false,
        style:'white',
        info:{
            title: "picture",
            text: null,
            todos: null,
            imgUrl: "data:image/jpeg;base64,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",
            videoUrl: null,
            todos: null
        }
    },
    {
        id: utilService.makeId(),
        type:"keepTxt",
        isPinned: false,
        style:'white',
        info:{
            title: "Haiku",
            text: `old pond
                    frog leaps in
                    water's sound`,
            todos: null,
            imgUrl: null,
            videoUrl: null,
            todos: null
        }
    },
    {
        id: utilService.makeId(),
        type:"keepVideo",
        isPinned: false,
        style:'white',
        info:{
            title: "video",
            text: null,
            todos: null,
            imgUrl: null,
            videoUrl: '//www.youtube.com/embed/w-XkOtyeVXQ',
            todos: null
        }
    },
    {
        id: utilService.makeId(),
        type:"keepTodo",
        isPinned: false,
        style:'white',
        info:{
            title: "todos",
            text: null,
            todos: null,
            imgUrl: null,
            videoUrl: null,
            todos: [
                {
                    text:'Take the dog out'
                },
                {
                    text:'Bring the dog back'
                },
                {
                    text:'You forgot the dog right?'
                },
            ]
        }
    },
];

export const keepService ={
    getNotes,
    getPinnedNotes,
    saveNote,
    getById,
    deleteNote,
    pinNote,
    changeNoteColor
}

function getNotes(){
    return Promise.resolve(gNotes)
}

function getPinnedNotes(){
    return Promise.resolve(gPinnedNotes)
}

function getById(id) {
    const note =  gNotes.find(currNote => currNote.id === id)
    return Promise.resolve(note)
}

function saveNote(note){
    var tempNote = {
        id: utilService.makeId(),
        type: note.type,
        isPinned: false,
        style:'lightgoldenrodyellow',
        info:{
            title: note.title,
            text: note.text ? note.text : null,
            todos: note.todos ? note.todos : null,
            imgUrl: note.imgUrl ? note.imgUrl : null,
            videoUrl: note.videoUrl ? `https://www.youtube.com/embed/${note.videoUrl}` : null,
            todos: note.todos ? note.todos : null
        }
    }
    gNotes.push(tempNote)
    return Promise.resolve()
}

function deleteNote(noteId){
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    return Promise.resolve()
}

function pinNote(currNote){
    if(!currNote.isPinned){
        const idx = gNotes.findIndex(note => note.id === currNote.id);
        currNote.isPinned = true;
        gPinnedNotes.push(currNote);
        gNotes.splice(idx, 1);
    }else{
        const idx = gPinnedNotes.findIndex(note => note.id === currNote.id);
        currNote.isPinned = false;
        gNotes.push(currNote);
        gPinnedNotes.splice(idx, 1);
    }
}

function changeNoteColor(bgc, currNote){
    if(!currNote.isPinned){
        const idx = gNotes.findIndex(note => note.id === currNote.id);
        gNotes[idx].style = bgc;
    }else{
        const idx = gPinnedNotes.findIndex(note => note.id === currNote.id);
        gPinnedNotes[idx].style = bgc;
    }
}