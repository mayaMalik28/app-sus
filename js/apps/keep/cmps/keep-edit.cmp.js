import keepAddTxt from '../cmps/keep-add-txt.cmp.js'
import keepAddImg from '../cmps/keep-add-img.cmp.js'
import keepAddTodo from '../cmps/keep-add-todo.cmp.js'
import keepAddVideo from '../cmps/keep-add-video.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'


export default {
    name:'keepEdit',
    template:`
    <section class="keep-edit" id="keep-editor">
        <ul class="edit-icons">
            <li class="edit-icon"><i class="fas fa-pen" @click="setToTxt"></i></li>
            <li class="edit-icon"><i class="fas fa-list-ul" @click="setToTodo"></i></li>
            <li class="edit-icon"><i class="fas fa-image" @click="setToImg"></i></li>
            <li class="edit-icon"><i class="fab fa-youtube" @click="setToVideo"></i></li>
        </ul>
        <component :is="type" :note="note"/>
        <!-- <component v-if="!note" :is="type"/>
        <component v-else :is="type" :note="note"/> -->

    </section>
    `,
    data(){
        return{
            type: 'keepAddTxt',
            note: null,
        }
    },
    methods:{
        setToImg(){
            this.type = 'keepAddImg'
            this.note = null
        },
        setToTxt(){
            this.type = 'keepAddTxt'
            this.note = null
        },
        setToTodo(){
            this.type = 'keepAddTodo'
            this.note = null
        },
        setToVideo(){
            this.type = 'keepAddVideo'
            this.note = null
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
    watch:{
        
    },
    created(){
        eventBus.$on('editNote', note => {
            console.log(this.note);
            if(note.type === 'keepImg') this.type = 'keepAddImg'
            else if(note.type === 'keepTxt') this.type = 'keepAddTxt'
            else if(note.type === 'keepTodo') this.type = 'keepAddTodo'
            else if(note.type === 'keepVideo') this.type = 'keepAddVideo'
            this.note = JSON.parse(JSON.stringify(note))
        })
    }
}