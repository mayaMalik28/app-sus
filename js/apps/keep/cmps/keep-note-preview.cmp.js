export default {
    name: 'keepNotePreview',
    props: ['note'],
    template: `
        <section class="keep-note-preview">
            <h3>{{note.info.title}}</h3>
            <p v-if="note.info.text">{{note.info.text}}</p>
            <img v-if="note.info.imgUrl" :src="note.info.imgUrl" />
            <iframe v-if="note.info.videoUrl" width="100" height="100" :src="note.info.videoUrl" frameborder="0" allowfullscreen></iframe>
            <!-- <p v-if="note.info.videoUrl">{{note.info.videoUrl}}</p> -->
            <ul v-if="note.info.todos">
                <li v-for="todo in note.info.todos">
                    {{todo.text}}
                </li>
            </ul>
        </section>  
    `,
    data() {
        return {
            info: {

            }
        }
    },
    computed: {

    },
    created() {

    }
}