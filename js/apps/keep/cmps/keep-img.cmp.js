export default {
    name: 'keepImg',
    template:`
        <form>
            <input type="text" placeholder="Enter Image Url" v-model="info.url" />
        </form>  
    `,
    data(){
        return {
            info: {
                type: "keepImg",
                url: '',
            }
        }
    }
}