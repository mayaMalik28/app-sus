export default {
    name: 'keepTxt',
    template:`
        <form>
            <input type="text" placeholder="Enter text" v-model="info.text" />
        </form>  
    `,
    data(){
        return {
            info:{
                type: "keepText",
                text: '',
            }
        }
    }
}