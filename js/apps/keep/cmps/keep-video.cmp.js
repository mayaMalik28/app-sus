import {keepService} from '../services/keep-service.js'
import keepNoteFooter from './keep-note-footer.cmp.js'

export default {
    name: 'keepVideo',
    props: ['note'],
    template: `
        <section class="keep-note-preview" :style= '{backgroundColor: note.style }'>
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <i class="fas fa-thumbtack" @click="pinNote(note)"></i>
            </div>
            <hr/>
            <iframe v-if="note.info.videoUrl" width="300" height="200" :src="note.info.videoUrl" frameborder="0" allowfullscreen></iframe>
            <p class="note-time">{{note.time}}</p>
            <keep-note-footer :note="note" />
        </section>  
    `,
    data() {
        return {

        }
    },
    methods:{
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