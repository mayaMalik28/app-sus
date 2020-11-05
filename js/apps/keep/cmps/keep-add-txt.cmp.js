import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepAddTxt',
    template:`
        <form class="keep-edit-form" @submit.prevent="">
            <input class="title-input" value="hii" type="text" placeholder="Title" v-model="info.title" />
            <input class="content-input" type="text" placeholder="Text" v-model="info.text" />
            <button @click.prevent=saveNote>Save!</button>
        </form>  
    `,
    data(){
        return {
            info:{
                type: "keepTxt",
                title: '',
                text: '',
            }
        }
    },
    methods:{
        saveNote(){
            keepService.saveNote(this.info)
            this.info.title = ''
            this.info.text = ''
        }
    }
}