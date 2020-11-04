import keepNotePreview from './keep-note-preview.cmp.js'

export default {
    name: 'keepNotesList',
    props:['notes'],
    template:`
        <section>
            <h2>Your Notes</h2>
            <ul>
                <li v-for="currNote in notes">
                    <keep-note-preview :note="currNote"/>
                </li>
            </ul>
        </section>  
    `,
    data(){
        return {
            
        }
    },
    components:{
        keepNotePreview
    }
}