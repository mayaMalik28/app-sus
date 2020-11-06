import {keepService} from '../services/keep-service.js'

export default {
    name: 'keepAddImg',
    props: ['note'],
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
                .then(() => {
                    this.info.title = ''
                    this.info.imgUrl = ''
                })
        },
    },
    watch: {
        note(note) {
            const info = {
                type: note.type,
                title : note.info.title,
                imgUrl: note.info.imgUrl,
                id : note.id,
                isPinned : note.isPinned,
                style: note.style
            }
            this.info = info
            console.log('add img', this.info);
        }
    },
    created(){
        console.log(this.note);
    }
}