import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
        <section v-if="msg.text" class="user-msg">
            <button class="user-msg-btn" @click="msg.text=null">x</button>
            <div class="user-msg-content">
                <i v-if="msg.type==='success'" class="v-icon far fa-check-circle"></i>
                <i v-if="msg.type==='error'" class="far fa-times-circle"></i>
                <!-- <i class="v-icon far fa-check-circle"></i> -->
                <p class="msg">{{msg.text}}</p>
            </div>
        </section>
        <!-- <section v-if="msg" class="user-msg">
            <button class="user-msg-btn" @click="msg=null">x</button>
            <div class="user-msg-content">
                <i class="v-icon far fa-check-circle"></i>
                <p class="msg">{{msg}}</p>
            </div>
        </section> -->
    `,
    data() {
        return {
            // msg: null
            msg: {
                text: null,
                type: null
            }
        }
    },
    created() {
        eventBus.$on('show-msg', msg => {
            console.log('msg');
            // this.msg = msg
            this.msg = msg
        })
    },
    updated() {
        // setTimeout(() => {
        //     this.msg = null
        //     console.log('done');
        // }, 3000)
    }
}