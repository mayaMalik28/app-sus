import { keepService } from '../services/keep-service.js'
import {eventBus} from '../../../services/event-bus-service.js'

export default {
    name: 'keepAddVideo',
    props: ['note'],
    template: `
        <form class="keep-edit-form" @submit.prevent="">
            <input type="text" placeholder="Title" v-model="info.title" />
            <input type="text" placeholder="Youtube Video Url" v-model="info.videoUrl" />
            <button class="save-btn" @click.prevent=saveNote>Save!</button>
        </form>  
    `,
    data() {
        return {
            info: {
                type: "keepVideo",
                title: '',
                videoUrl: ''
            }
        }
    },
    methods: {
        saveNote() {
            var videoId = this.info.videoUrl.split('v=')[1];
            var ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition != -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
            this.info.videoUrl = videoId
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
                        type: "keepVideo",
                        title: '',
                        videoUrl: ''
                    }
                })
        },
        setInfo(note) {
            const info = {
                type: note.type,
                title: note.info.title,
                videoUrl: note.info.videoUrl,
                id: note.id,
                isPinned: note.isPinned,
                style: note.style
            }
            this.info = info
        }
    },
    watch: {
        note(note) {
            setInfo(note)
        }
    },
    created() {
        if (this.note) {
            this.setInfo(this.note)
        }
    }
}