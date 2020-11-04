import keepEdit from '../cmps/keep-edit.cmp.js'
import keepNoteList from '../cmps/keep-notes-list.cmp.js'
import {keepService} from '../services/keep-service.js'


export default {
    template:`
    <section>
        <h1>Notes</h1>
        <keep-edit />
        <keep-note-list :note />
    </section>
    `,
    data(){
        return{
            notes : null
        }
    },
    methods:{
        
    },
    components: {
        keepEdit,
        keepNoteList
    },
    created(){
        keepService.getNotes()
            .then(notes => this.notes = notes)
    }
}