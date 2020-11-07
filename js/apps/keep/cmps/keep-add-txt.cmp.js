import { keepService } from '../services/keep-service.js'
import {eventBus} from '../../../services/event-bus-service.js'

export default {
    name: 'keepAddTxt',
    props: ['note'],
    template: `
        <form class="keep-edit-form" @submit.prevent="">
            <input class="title-input" type="text" placeholder="Title" v-model="info.title" />
            <input class="content-input" type="text" placeholder="Text" v-model="info.text" />
            <button class="save-btn" @click.prevent=saveNote>Save!</button>
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
                    if(this.info.id) eventBus.$emit('show-msg', {
                        text: `"${this.info.title}" was edited`,
                        type: 'success'
                     })
                    else eventBus.$emit('show-msg', {
                       text: `"${this.info.title}" was saved`,
                       type: 'success'
                    })
                    this.info = {
                        type: "keepTxt",
                        title: '',
                        text: '',
                    }
                }
                )
        },
        setInfo(note) {
            const info = {
                type: note.type,
                title: note.info.title,
                text: note.info.text,
                id: note.id,
                isPinned: note.isPinned,
                style: note.style
            }
            this.info = info
        }
    },
    computed: {

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
    },
    destroyed() {

    }
}