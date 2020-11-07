import { keepService } from '../services/keep-service.js'
import {eventBus} from '../../../services/event-bus-service.js'

export default {
    name: 'keepAddImg',
    props: ['note'],
    template: `
        <form class="keep-edit-form" @submit.prevent="">
            <input type="text" placeholder="Title" v-model="info.title" />
            <input type="text" placeholder="Image Url" v-model="info.imgUrl" />
            <button class="save-btn" @click=saveNote>Save!</button>
        </form>  
    `,
    data() {
        return {
            info: {
                type: "keepImg",
                title: '',
                imgUrl: null
            }
        }
    },
    methods: {
        saveNote() {
            keepService.saveNote(this.info)
                .then(() => {
                    if(this.info.id) eventBus.$emit('show-msg', {
                        text: `"${this.info.title}" was edited`,
                        type: 'success'
                     })
                    else eventBus.$emit('show-msg', {
                       text: `"${this.info.title}" was saved`,
                       type: 'success'
                    })

                    this.info = {
                        type: "keepImg",
                        title: '',
                        imgUrl: null
                    }
                })
        },
        setInfo(note) {
            const info = {
                type: note.type,
                title: note.info.title,
                imgUrl: note.info.imgUrl,
                id: note.id,
                isPinned: note.isPinned,
                style: note.style
            }
            this.info = info
        }
    },
    watch: {
        note(note) {
            this.setInfo(note)
        }
    },
    created() {
        if (this.note) {
            this.setInfo(this.note)
        }
    }
}