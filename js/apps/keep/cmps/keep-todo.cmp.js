import {keepService} from '../services/keep-service.js'
import keepNoteFooter from './keep-note-footer.cmp.js'

export default {
    name: 'keepTodo',
    props: ['note'],
    template: `
        <section class="keep-note-preview" :style= '{backgroundColor: note.style }'>
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <button class="note-delete" @click="deleteNote(note)">X</button>
            </div>
            <hr/>
            <ul class="keep-note-todos" v-if="note.info.todos">
                <li class="keep-note-todo" v-for="todo in note.info.todos">
                    {{todo.text}}
                </li>
            </ul>
            <keep-note-footer :note="note" />
        </section>  
    `,
    data() {
        return {

        }
    },
    methods:{
        deleteNote(note){
            keepService.deleteNote(note)
        }
    },
    computed: {

    },
    components:{
        keepNoteFooter
    }
}