import noteTxt from '../cmps/keep-txt.cmp.js'
import noteImg from '../cmps/keep-img.cmp.js'


export default {
    template:`
    <section>
        <h1>Notes</h1>
        <button @click="setToImg">image note</button>
        <button @click="setToTxt">text note</button>
        <component :is="type"/>
    </section>
    `,
    data(){
        return{
            type: 'noteTxt'
        }
    },
    methods:{
        setToImg(){
            this.type = 'noteImg'
        },
        setToTxt(){
            this.type = 'noteTxt'
        },
    },
    components: {
        noteTxt,
        noteImg
    },
    created(){
        
    }
}