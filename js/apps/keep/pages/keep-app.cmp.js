import keepEdit from '../cmps/keep-edit.cmp.js'
import keepNoteList from '../cmps/keep-notes-list.cmp.js'
import keepPinnedNoteList from '../cmps/keep-pinned-notes-list.cmp.js'
import { keepService } from '../services/keep-service.js'


export default {
    name: 'keepApp',
    template: `
    <section class="keep-app">
            <input class="search-input keep-search" type="text" v-model="filterByText" placeholder="Search Note" />
        <keep-edit />
            <select class="keep-filter" v-model="filterByType">
                <option>All</option>
                <option value="keepTxt">Text</option>
                <option value="keepTodo">Lists</option>
                <option value="keepImg">Images</option>
                <option value="keepVideo">Video</option>
            </select>
        <keep-pinned-note-list v-if="pinnedNotes" :notes="pinnedNotesToShow"/>
        <keep-note-list v-if="notes" :notes="notesToShow" />
    </section>
    `,
    data() {
        return {
            notes: null,
            pinnedNotes: null,
<<<<<<< HEAD
            filterBy: 'All',
            filterByText: ''
=======
            filterByType: 'All',
            filterByText:''
>>>>>>> 7efd96afa6b89d99890a9fc2f4b63c001f3552ba
        }
    },
    methods: {

    },
<<<<<<< HEAD
    computed: {
        notesToShow() {
            if (this.filterBy === "All") return this.notes;
            const txt = this.filterByText
            const type = this.filterBy
            if (type === "All") {

                return this.notes.filter(note => {
                    note.info.title.toLowerCase().includes(txt)
                })
            } else {
                return this.notes.filter(note => {
                    (note.info.title.toLowerCase().includes(txt) &&
                        note.type === type)
                })
            }

            return this.notes.filter(note => note.type === this.filterBy)
        },
        pinnedNotesToShow() {
            if (this.filterBy === "All" && this.filterByText === '') return this.pinnedNotes;
            const txt = this.filterByText
            const type = this.filterBy
            if (type === 'All') {
                console.log(this.pinnedNotes.filter(note => {
                    true
                }));
=======
    computed:{
        notesToShow(){
            if (this.filterByType === "All" && this.filterByText === '') return this.notes;
            const txt = this.filterByText
            const type = this.filterByType
            if(type ==='All'){
                return this.notes.filter(note =>  note.info.title.toLowerCase().includes(txt))
            }else{
                return this.notes.filter(note => {
                    return(note.info.title.toLowerCase().includes(txt) &&
                            note.type === type)
                })
            }
        },
        pinnedNotesToShow(){
            if (this.filterByType === "All" && this.filterByText === '') return this.pinnedNotes;
            const txt = this.filterByText
            const type = this.filterByType
            if(type ==='All'){
                return this.pinnedNotes.filter(note =>  note.info.title.toLowerCase().includes(txt))
            }else{
>>>>>>> 7efd96afa6b89d99890a9fc2f4b63c001f3552ba
                return this.pinnedNotes.filter(note => {
                    return(note.info.title.toLowerCase().includes(txt) &&
                            note.type === type)
                })
            }
        }
    },
    components: {
        keepEdit,
        keepNoteList,
        keepPinnedNoteList
    },
    created() {
        keepService.getNotes()
            .then(notes => {
                this.notes = notes
                keepService.getPinnedNotes()
                    .then(pinnedNotes => {
                        this.pinnedNotes = pinnedNotes
                    })
            })
    }
}