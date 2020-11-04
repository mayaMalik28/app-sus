export default {
    name: 'keepTodo',
    template:`
    <section>
        <form @submit.prevent="">
            <input v-for="(row, idx) in rows" type="text" placeholder="Enter Task" v-model="info.todos[idx].text" />
            <button @click="submit">submit</button>
        </form>
        <button @click="addRow">+</button>
    </section>  
    `,
    data(){
        return {
            info:{
                type: 'keepTodo',
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
        submit(){
            console.log(this.info.todos);
        }
    }
}