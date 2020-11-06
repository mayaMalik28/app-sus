import { keepService } from '../services/keep-service.js'

export default {
    name: 'keepAddVideo',
    props:['note'],
    template: `
        <form class="keep-edit-form" @submit.prevent="">
            <input type="text" placeholder="Title" v-model="info.title" />
            <input type="text" placeholder="Youtube Video Url" v-model="info.videoUrl" />
            <button @click.prevent=saveNote>Save!</button>
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
                    this.info.title = ''
                    this.info.videoUrl = ''
                })
        }
    },
    watch: {
        note(note) {
            const info = {
                type: note.type,
                title : note.info.title,
                videoUrl: note.info.videoUrl,
                id : note.id,
                isPinned : note.isPinned,
                style: note.style
            }
            this.info = info
        }
    },
}