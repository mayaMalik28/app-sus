export default {
    name: 'keepNotePreview',
    props:['note'],
    template:`
        <section>
            <h3>{{note.info.title}}</h3>
            <p v-if="note.info.text">{{note.info.text}}</p>
            <img v-if="note.info.imgUrl" :src="note.info.imgUrl" />
            <p v-if="note.info.videoUrl">{{note.info.videoUrl}}</p>
            <ul v-if="note.info.todos">
                <li v-for="todo in note.info.todos">
                    {{todo.text}}
                </li>
            </ul>
        </section>  
    `,
    data(){
        return {
            info:{

            }
        }
    },
    computed:{

    },
    created(){

    }
}