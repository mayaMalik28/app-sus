import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepVideo',
    props: ['note'],
    template: `
        <section class="keep-note-preview">
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <button class="note-delete" @click="deleteNote(note.id)">X</button>
            </div>
            <hr/>
            <iframe v-if="note.info.videoUrl" width="350" height="250" :src="note.info.videoUrl" frameborder="0" allowfullscreen></iframe>
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