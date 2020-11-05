import keepEdit from '../cmps/keep-edit.cmp.js'
import keepNoteList from '../cmps/keep-notes-list.cmp.js'
import keepPinnedNoteList from '../cmps/keep-pinned-notes-list.cmp.js'
import { keepService } from '../services/keep-service.js'


export default {
    template:`
    <section class="keep-app">
        <h1>Notes</h1>
        <select v-model="filterBy">
            <option>All</option>
            <option value="keepTxt">Text</option>
            <option value="keepTodo">Lists</option>
            <option value="keepImg">Images</option>
            <option value="keepVideo">Video</option>
        </select>
        <keep-edit />
        <keep-pinned-note-list v-if="pinnedNotes" :notes="pinnedNotesToShow"/>
        <keep-note-list v-if="notes" :notes="notesToShow" />
    </section>
    `,
    data(){
        return {
            notes : null,
            pinnedNotes: null,
            filterBy: 'All'
        }
    },
    methods:{
        
    },
    computed:{
        notesToShow(){
            if (this.filterBy === "All") return this.notes;
            return this.notes.filter(note => note.type === this.filterBy)
        },
        pinnedNotesToShow(){
            if (this.filterBy === "All") return this.pinnedNotes;
            return this.pinnedNotes.filter(note => note.type === this.filterBy)
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