import { keepService } from '../services/keep-service.js'

export default {
    name: 'keepAddTodo',
    props: ['note'],
    template: `
    <section>
        <form class="keep-edit-form" @submit.prevent="">
            <input type="text" placeholder="Title" v-model="info.title" />
            <div>
                <input v-for="(todo, idx) in info.todos" type="text" placeholder="Add Item" v-model="todo.text" />
                <button @click="addRow">+</button>
            </div>
            <button class="save-btn" @click.prevent=saveNote>Save!</button>
        </form>
    </section>  
    `,
    data() {
        return {
            info: {
                type: 'keepTodo',
                title: '',
                todos: [{
                    text: ''
                }]
            },
        }
    },
    methods: {
        addRow() {
            var row = { text: '' }
            this.info.todos.push(row)
        },
        saveNote() {

            keepService.saveNote(this.info)
                .then(() => {
                    this.info = {
                        type: 'keepTodo',
                        title: '',
                        todos: [{
                            text: ''
                        }]
                    }
                })
        },
        setInfo(note) {
            const info = {
                type: note.type,
                title: note.info.title,
                todos: note.info.todos,
                id: note.id,
                isPinned: note.isPinned,
                style: note.style
            }
            this.info = info
        }
    },
    watch: {
        note(note) {
            this.setInfo(note)
        }
    },
    created() {
        if (this.note) {
            this.setInfo(this.note)
        }
    }
}