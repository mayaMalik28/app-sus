import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepTxt',
    props: ['note'],
    template: `
        <section class="keep-note-preview">
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <button class="note-delete" @click="deleteNote(note.id)">X</button>
            </div>
            <hr/>
            <p v-if="note.info.text">{{note.info.text}}</p>
        </section>  
    `,
    data() {
        return {

        }
    },
    methods:{
        deleteNote(noteId){
            keepService.deleteNote(noteId)
        }
    },
    computed: {

    },
    created() {

    }
}