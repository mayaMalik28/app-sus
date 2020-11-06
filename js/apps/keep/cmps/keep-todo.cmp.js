import {keepService} from '../services/keep-service.js'
import keepNoteFooter from './keep-note-footer.cmp.js'

export default {
    name: 'keepTodo',
    props: ['note'],
    template: `
        <section class="keep-note-preview" :style= '{backgroundColor: note.style }'>
            <div class="note-header flex justify-space-between align-center">
                <h3 class="note-title">{{note.info.title}}</h3>
                <i class="fas fa-thumbtack" @click="pinNote(note)"></i>
            </div>
            <hr/>
            <ul class="keep-note-todos" v-if="note.info.todos">
                <div class="keep-note-todo"  v-for="(todo,idx) in note.info.todos">
                    <li >{{todo.text}}</li>
                    <i @click="deleteTodo(note, idx)" class="fas fa-trash-alt"></i>
                </div>
            </ul>
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
        deleteTodo(note,idx){
            keepService.deleteTodo(note,idx)
        }
    },
    computed: {

    },
    components:{
        keepNoteFooter
    }
}