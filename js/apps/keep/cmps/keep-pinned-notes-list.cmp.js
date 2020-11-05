import keepTxt from './keep-txt.cmp.js'
import keepTodo from './keep-todo.cmp.js'
import keepImg from './keep-img.cmp.js'
import keepVideo from './keep-video.cmp.js'

export default {
    name: 'keepNotesList',
    props:['notes'],
    template:`
        <section>
            <ul  class="keep-notes-list">
                <li v-for="currNote in notes">
                    <component :is="currNote.type" :note="currNote"/>
                </li>
            </ul>
        </section>  
    `,
    data(){
        return {
            
        }
    },
    components:{
        keepTxt,
        keepTodo,
        keepImg,
        keepVideo
    }
}