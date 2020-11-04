import keepTxt from '../cmps/keep-txt.cmp.js'
import keepImg from '../cmps/keep-img.cmp.js'
import keepTodo from '../cmps/keep-todo.cmp.js'
import keepVideo from '../cmps/keep-video.cmp.js'


export default {
    name:'keepEdit',
    template:`
    <section>
        <button @click="setToImg">image note</button>
        <button @click="setToTxt">text note</button>
        <button @click="setToTodo">todo note</button>
        <button @click="setToVideo">todo video</button>
        <component :is="type"/>
    </section>
    `,
    data(){
        return{
            type: 'keepTxt'
        }
    },
    methods:{
        setToImg(){
            this.type = 'keepImg'
        },
        setToTxt(){
            this.type = 'keepTxt'
        },
        setToTodo(){
            this.type = 'keepTodo'
        },
        setToVideo(){
            return this.type = 'keepVideo'
        }
    },
    computed:{

    },
    components: {
        keepTxt,
        keepImg,
        keepTodo,
        keepVideo
    },
    created(){
        
    }
}