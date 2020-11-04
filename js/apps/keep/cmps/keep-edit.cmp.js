import keepAddTxt from '../cmps/keep-add-txt.cmp.js'
import keepAddImg from '../cmps/keep-add-img.cmp.js'
import keepAddTodo from '../cmps/keep-add-todo.cmp.js'
import keepAddVideo from '../cmps/keep-add-video.cmp.js'


export default {
    name:'keepEdit',
    template:`
    <section class="keep-edit">
        <ul class="edit-icons">
            <li class="edit-icon"><i class="fas fa-pen" @click="setToTxt"></i></li>
            <li class="edit-icon"><i class="fas fa-list-ul" @click="setToTodo"></i></li>
            <li class="edit-icon"><i class="fas fa-image" @click="setToImg"></i></li>
            <li class="edit-icon"><i class="fab fa-youtube" @click="setToVideo"></i></li>
        </ul>
        <component :is="type"/>
    </section>
    `,
    data(){
        return{
            type: 'keepAddTxt'
        }
    },
    methods:{
        setToImg(){
            this.type = 'keepAddImg'
        },
        setToTxt(){
            this.type = 'keepAddTxt'
        },
        setToTodo(){
            this.type = 'keepAddTodo'
        },
        setToVideo(){
            return this.type = 'keepAddVideo'
        }
    },
    computed:{

    },
    components: {
        keepAddTxt,
        keepAddImg,
        keepAddTodo,
        keepAddVideo
    },
    created(){
        
    }
}