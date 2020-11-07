import { emailService } from '../services/email-service.js'
import emailCompose from './email-compose.cmp.js'
import { eventBus, EVENT_FILTER_CATEGORY } from '../../../services/event-bus-service.js'

export default {
    template: `
        <aside class="sidebar flex-column">
            <email-compose v-if="isCompose" @closeCompose="closeCompose"/>
            <button @click="openCompose">compose + </button>
            <router-link to="/email/inbox"><p @click="changeCategoryBy('isInbox')" >Inbox</p></router-link>
            <router-link to="/email/sent"><p @click="changeCategoryBy('isSent')" >Sent</p></router-link>
            <router-link to="/email/starred"><p @click="changeCategoryBy('isStarred')" >Starred</p></router-link>
            <router-link to="/email/drafts"><p @click="changeCategoryBy('isDraft')" >Drafts</p></router-link> 
        </aside>
        `,
    data() {
        return {
            category: null,
            isCompose: false
        }
    },
    methods: {
        changeCategoryBy(by) {
            console.log(by);
            emailService.setCurrCategory(by);
        },
        openCompose() {
            this.isCompose = true
        },
        closeCompose() {
            this.isCompose = false
        }
    },
    components: {
        emailCompose
    }
}
// import { emailService } from '../services/email-service.js'
// import emailCompose from './email-compose.cmp.js'
// import { eventBus, EVENT_FILTER_CATEGORY } from '../../../services/event-bus-service.js'

// export default {
//     template: `
//     <!-- <aside class="sidebar"> -->
//     <!-- <nav class="flex"> -->
//         <aside class="sidebar flex-column">
//             <email-compose v-if="isCompose" @closeCompose="closeCompose"/>
//             <button @click="openCompose">compose + </button>
//             <router-link to="/email/inbox"><p @click="changeFilterBy('isInbox')" >Inbox</p></router-link>
//             <router-link to="/email/sent"><p @click="changeFilterBy('isSent')" >Sent</p></router-link>
//             <router-link to="/email/starred"><p @click="changeFilterBy('isStarred')" >Starred</p></router-link>
//             <router-link to="/email/drafts"><p @click="changeFilterBy('isDraft')" >Drafts</p></router-link> 
//             <!-- <router-link @click="changeFilterBy('isSent')" to="/email/sent">Sent</router-link> -->
//         </aside>
//             <!-- <router-view></router-view>
//         </nav> -->

//         <!-- <button @click="changeFilterBy('isInbox')">Inbox</button> -->
//         <!-- <button @click="changeFilterBy('isStarred')">Starred</button> -->
//         <!-- <button @click="changeFilterBy('isLater')">Later</button> -->
//         <!-- <button @click="changeFilterBy('isSent')">Sent</button> -->
//         <!-- <button @click="changeFilterBy('isDraft')">Drafts</button> -->
//         <!-- <email-compose/> -->
//     <!-- </aside> -->
//         `,
//     data() {
//         return {
//             category: null,
//             isCompose: false
//         }
//     },
//     methods: {
//         changeFilterBy(by) {
//             // this.category = by;
//             console.log(by);
//             emailService.setCurrCategory(by);
//             // if (by === 'isInbox') this.$router.push(`/email/inbox`);
//             // if (by === 'isSent') this.$router.push(`/email/sent`);
//             // eventBus.$emit(EVENT_FILTER_CATEGORY, this.category)
//         },
//         openCompose() {
//             this.isCompose = true
//         },
//         closeCompose() {
//             this.isCompose = false
//         }
//     },
//     components: {
//         emailCompose
//     }
// }