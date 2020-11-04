var gNotes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

export const keepService ={
    getNotes,
    saveNote
}

function getNotes(){
    return Promise.resolve(gNotes)
}

function saveNote(note){
    var tempNote = {
        type: note.type,
        info:{
            title: note.title,
            text: note.text ? note.text : null,
            todos: note.todos ? note.todos : null,
            imgUrl: note.imgUrl ? note.imgUrl : null,
            videoUrl: note.videoUrl ? note.videoUrl : null,
            todos: note.todos ? note.todos : null
        }
    }
    gNotes.push(tempNote)
}
