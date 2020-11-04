import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepTodo',
    props: ['note'],
    template: `
        <section class="keep-note-preview">
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <button class="note-delete" @click="deleteNote(note.id)">X</button>
            </div>
            <hr/>
            <ul v-if="note.info.todos">
                <li v-for="todo in note.info.todos">
                    {{todo.text}}
                </li>
            </ul>
        </section>  
    `,
    data() {
        return {

        }
    },
    methods:{
        deleteNote(noteId){
            keepService.deleteNote(noteId)
        }
    },
    computed: {

    },
    created() {

    }
}