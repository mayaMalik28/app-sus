import keepTxt from './keep-txt.cmp.js'
import keepTodo from './keep-todo.cmp.js'
import keepImg from './keep-img.cmp.js'
import keepVideo from './keep-video.cmp.js'

export default {
    name: 'keepPinnedNotesList',
    props:['notes'],
    template:`
        <section class="keep-pinned-notes-list">
            <h3 class="list-header">Pinned</h3>
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