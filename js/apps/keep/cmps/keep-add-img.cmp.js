import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepAddImg',
    template:`
        <form @submit.prevent="">
            <input type="text" placeholder="Enter title" v-model="info.title" />
            <input type="text" v-model="info.imgUrl" />
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
            console.log(this.info);
            keepService.saveNote(this.info)
        },
    }
}