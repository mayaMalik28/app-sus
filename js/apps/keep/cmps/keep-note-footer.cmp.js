import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepNoteFooter',
    props: ['note'],
    template:`
        <ul class="keep-note-footer">
            <li><i class="fas fa-thumbtack" @click="pinNote(note)"></i></li>
            <li><i class="fas fa-palette"></i></li>
            <li><i class="fas fa-edit"></i></li>
        </ul>
    `,
    methods:{
        pinNote(note){
            keepService.pinNote(note)
        }
    }
}