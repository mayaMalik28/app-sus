import keepEdit from '../cmps/keep-edit.cmp.js'
import keepNoteList from '../cmps/keep-notes-list.cmp.js'
import keepPinnedNoteList from '../cmps/keep-pinned-notes-list.cmp.js'
import { keepService } from '../services/keep-service.js'


export default {
    template:`
    <section class="keep-app">
        <h1>Notes</h1>
        <keep-edit />
        <keep-pinned-note-list v-if="pinnedNotes" :notes="pinnedNotesToShow"/>
        <keep-note-list v-if="notes" :notes="notesToShow" />
    </section>
    `,
    data(){
        return {
            notes : null,
            pinnedNotes: null,
            filterBy: null
        }
    },
    methods:{
        
    },
    computed:{
        notesToShow(){
            if (!this.filterBy) return this.notes;
        },
        pinnedNotesToShow(){
            if (!this.filterBy) return this.pinnedNotes;
        }
    },
    components: {
        keepEdit,
        keepNoteList,
        keepPinnedNoteList
    },
    created(){
        keepService.getNotes()
            .then(notes => {
                    this.notes = notes
                    keepService.getPinnedNotes()
                        .then(pinnedNotes =>{
                            this.pinnedNotes = pinnedNotes
                        })
                }
                )
    }
}