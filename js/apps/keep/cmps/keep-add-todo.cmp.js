import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepAddTodo',
    template:`
    <section>
        <form @submit.prevent="">
            <input type="text" placeholder="Enter title" v-model="info.title" />
            <input v-for="(row, idx) in rows" type="text" placeholder="Enter Task" v-model="info.todos[idx].text" />
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
        }
    }
}