export default {
    name: 'noteImg',
    template:`
        <form>
            <input type="text" placeholder="Enter Image Url" v-model="url" />
        </form>  
    `,
    data(){
        return {
            type: "NoteText",
            url: '',
        }
    }
}