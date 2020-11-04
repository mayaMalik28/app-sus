export default {
    name: 'keepVideo',
    template:`
        <form>
            <input type="text" placeholder="Enter video Url" v-model="info.url" />
        </form>  
    `,
    data(){
        return {
            info: {
                type: "keepVideo",
                url: '',
            }
        }
    }
}