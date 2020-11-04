import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepVideo',
    template:`
        <form>
            <input type="text" placeholder="Enter title" v-model="info.title" />
            <input type="text" placeholder="Enter video Url" v-model="info.videoUrl" />
            <button @click=saveNote>Save!</button>
        </form>  
    `,
    data(){
        return {
            info: {
                type: "keepVideo",
                title:'',
                videoUrl: ''
            }
        }
    },
    methods:{
        saveNote(){
            keepService.saveNote(this.info)
        }
    }
}