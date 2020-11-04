import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepAddImg',
    template:`
        <form class="keep-edit-form" @submit.prevent="">
            <input type="text" placeholder="Title" v-model="info.title" />
            <input type="text" placeholder="Image Url" v-model="info.imgUrl" />
            <button @click=saveNote>Save!</button>
        </form>  
    `,
    data(){
        return {
            info: {
                type: "keepImg",
                title:'',
                imgUrl: null
            }
        }
    },
    methods:{
        saveNote(){
            keepService.saveNote(this.info)
            this.info.title = ''
            this.info.imgUrl = null
        },
    }
}