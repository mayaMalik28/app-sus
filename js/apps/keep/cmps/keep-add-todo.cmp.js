import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepAddTodo',
    template:`
    <section>
        <form class="keep-edit-form" @submit.prevent="">
            <input type="text" placeholder="Title" v-model="info.title" />
            <input v-for="(row, idx) in rows" type="text" placeholder="Add Item" v-model="info.todos[idx].text" />
            <button @click.prevent=saveNote>Save!</button>
        </form>
        <button @click="addRow">+</button>
    </section>  
    `,
    data(){
        return {
            info:{
                type: 'keepTodo',
                title:'',
                todos:[{
                    text : ''
                }]
            },
            rows: 1
        }
    },
    methods:{
        addRow(){
            this.info.todos[this.rows] = {
                text : ''
            }
            this.rows++
        },
        saveNote(){
            keepService.saveNote(this.info)
            this.info.title = ''
            this.row = 1
            this.info.todos = [{
                text: ''
            }]
        }
    }
}