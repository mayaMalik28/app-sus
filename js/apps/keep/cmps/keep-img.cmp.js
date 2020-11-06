import {keepService} from '../services/keep-service.js'
import keepNoteFooter from './keep-note-footer.cmp.js'

export default {
    name: 'keepImg',
    props: ['note'],
    template: `
        <section class="keep-note-preview"  :style= '{backgroundColor: note.style }'>
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <i class="fas fa-thumbtack" @click="pinNote(note)"></i>
                <!-- <button class="note-delete" @click="deleteNote(note)">X</button> -->
            </div>
            <hr/>
            <img v-if="note.info.imgUrl" :src="note.info.imgUrl" />
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
        // }
        pinNote(note){
            keepService.pinNote(note)
        },
    },
    computed: {
    },
    components:{
        keepNoteFooter
    },
    
}