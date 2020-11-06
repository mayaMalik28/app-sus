import {keepService} from '../services/keep-service.js'
import keepNoteFooter from './keep-note-footer.cmp.js'

export default {
    name: 'keepTxt',
    props: ['note'],
    template: `
        <section class="keep-note-preview keep-note-txt" :style= '{backgroundColor: note.style }'>
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <i class="fas fa-thumbtack" @click="pinNote(note)"></i>
            </div>
            <hr/>
            <p>{{note.info.text}}</p>
            <p class="note-time">{{note.time}}</p>
            <keep-note-footer :note="note" />
        </section>  
    `,
    data() {
        return {

        }
    },
    methods:{
        // deleteNote(note){
        //     keepService.deleteNote(note)
        // },
        pinNote(note){
            keepService.pinNote(note)
        },
    },
    computed: {

    },
    components:{
        keepNoteFooter
    }
}