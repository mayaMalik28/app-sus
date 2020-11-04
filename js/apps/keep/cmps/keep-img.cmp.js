import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepImg',
    props: ['note'],
    template: `
        <section class="keep-note-preview">
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <button class="note-delete" @click="deleteNote(note.id)">X</button>
            </div>
            <hr/>
            <img v-if="note.info.imgUrl" :src="note.info.imgUrl" />
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