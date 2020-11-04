export default {
    name: 'noteTxt',
    template:`
        <form>
            <input type="text" placeholder="Enter text" v-model="text" />
        </form>  
    `,
    data(){
        return {
            type: "NoteText",
            text: '',
        }
    }
}