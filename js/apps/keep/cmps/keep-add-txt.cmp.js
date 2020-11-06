import { keepService } from '../services/keep-service.js'

export default {
    name: 'keepAddTxt',
    props: ['note'],
    template: `
        <form class="keep-edit-form" @submit.prevent="">
            <input class="title-input" type="text" placeholder="Title" v-model="info.title" />
            <input class="content-input" type="text" placeholder="Text" v-model="info.text" />
            <button @click.prevent=saveNote>Save!</button>
        </form>  
    `,
    data() {
        return {
            info: {
                type: "keepTxt",
                title: '',
                text: '',
            },

        }
    },
    methods: {
        saveNote() {
            keepService.saveNote(this.info)
                .then(() => {
                    this.info.title = ''
                    this.info.text = ''
                }
            )
        }
    },
    computed: {

    },
    watch: {
        note(note) {
            const info = {
                type: note.type,
                title : note.info.title,
                text : note.info.text,
                id : note.id,
                isPinned : note.isPinned,
                style: note.style
            }
            this.info = info
        }
    },
    created() {
        
    },
    destroyed(){
        
    } 
}