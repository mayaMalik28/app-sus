import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepNoteFooter',
    props: ['id'],
    template:`
        <ul class="keep-note-footer">
            <li><i class="fas fa-thumbtack" @click="pinNote(id)"></i></li>
            <li><i class="fas fa-palette"></i></li>
            <li><i class="fas fa-edit"></i></li>
        </ul>
    `,
    methods:{
        pinNote(id){
            keepService.pinNote(id)
        }
    }
}