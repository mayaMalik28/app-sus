import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepTxt',
    template:`
        <form>
            <input type="text" placeholder="Enter title" v-model="info.title" />
            <!-- <textarea  v-model="info.text">Enter text...</textarea> -->
            <input type="text" placeholder="Enter text" v-model="info.text" />
            <button @click=saveNote>Save!</button>
        </form>  
    `,
    data(){
        return {
            info:{
                type: "keepText",
                title: '',
                text: '',
            }
        }
    },
    methods:{
        saveNote(){
            keepService.saveNote(this.info)
        }
    }
}