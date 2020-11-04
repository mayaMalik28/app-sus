import { keepService } from '../services/keep-service.js'

export default {
    name: 'keepVideo',
    template: `
        <form>
            <input type="text" placeholder="Enter title" v-model="info.title" />
            <input type="text" placeholder="Enter video Url" v-model="info.videoUrl" />
            <button @click=saveNote>Save!</button>
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
            // var videoId = this.info.videoUrl
            var videoId = this.info.videoUrl.split('v=')[1];
            var ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition != -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
            this.info.videoUrl = videoId
            console.log(this.info.videoUrl);
            keepService.saveNote(this.info)
        }
    }
}