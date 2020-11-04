import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepImg',
    template:`
        <form>
            <input type="text" placeholder="Enter title" v-model="info.title" />
            <input type="file" @change="previewFiles" />
            <button @click=saveNote>Save!</button>
        </form>  
    `,
    data(){
        return {
            info: {
                type: "keepImg",
                title:'',
                imgUrl: ''
            }
        }
    },
    methods:{
        saveNote(){
            keepService.saveNote(this.info)
        },
        previewFiles(event) {
            console.log(event.target.files);
        }
         
    }
}