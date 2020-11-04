import keepEdit from '../cmps/keep-edit.cmp.js'
import keepNoteList from '../cmps/keep-notes-list.cmp.js'
import { keepService } from '../services/keep-service.js'


export default {
    template:`
    <section class="keep-app">
        <h1>Notes</h1>
        <keep-edit />
        <keep-note-list v-if="notes" :notes="notesToShow" />
    </section>
    `,
    data(){
        return {
            notes : null,
            filterBy: null
        }
    },
    methods:{
        
    },
    computed:{
        notesToShow(){
            if (!this.filterBy) return this.notes;
        }
    },
    components: {
        keepEdit,
        keepNoteList
    },
    created(){
        keepService.getNotes()
            .then(
                notes => {
                    this.notes = notes
                    console.log(this.notes)
                }
                )
    }
}