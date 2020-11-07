import { emailService } from '../services/email-service.js'
import emailCompose from './email-compose.cmp.js'
import { eventBus, EVENT_FILTER_CATEGORY } from '../../../services/event-bus-service.js'
import emailHamburger from './email-hamburger.cmp.js'
export default {
    template: `
        <aside class="sidebar flex-column align-center">
            <email-compose v-if="isCompose" @closeCompose="closeCompose" />
            <button class="open-compose-btn logo" @click="openCompose">Compose<span><i class="fas fa-plus"></i></span></button>
            <button class="category-btn" @click="changeCategoryBy('isInbox')"><i class="fas fa-inbox"></i>Inbox</button>
            <button class="category-btn" @click="changeCategoryBy('isSent')"><i class="fas fa-share-square"></i>Sent</button>
            <button class="category-btn" @click="changeCategoryBy('isStarred')"><i class="fas fa-star"></i>Starred</button>
            <button class="category-btn"  @click="changeCategoryBy('isDraft')"><i class="fab fa-firstdraft"></i>Drafts</button> 
            <!-- <router-link class="category-btn" to="/email/inbox" @click="changeCategoryBy('isInbox')"><i class="fas fa-inbox"></i>Inbox</router-link>
            <router-link class="category-btn" to="/email/sent"><p @click="changeCategoryBy('isSent')"><i class="fas fa-share-square"></i>Sent</p></router-link>
            <router-link class="category-btn" to="/email/starred"><p @click="changeCategoryBy('isStarred')"><i class="fas fa-star"></i>Starred</p></router-link>
            <router-link class="category-btn" to="/email/drafts"><p @click="changeCategoryBy('isDraft')"><i class="fab fa-firstdraft"></i>Drafts</p></router-link>  -->
        </aside>
        `,
    data() {
        return {
            category: null,
            isCompose: false,
            noteData: null
        }
    },
    methods: {
        changeCategoryBy(by) {
            console.log(by);
            emailService.setCurrCategory(by);
            if (by === 'isInbox') this.$router.push('/email/inbox');
            if (by === 'isSent') this.$router.push('/email/sent');
            if (by === 'isStarred') this.$router.push('/email/starred');
            if (by === 'isDraft') this.$router.push('/email/drafts');
        },
        openCompose() {
            this.isCompose = true
        },
        closeCompose() {
            this.isCompose = false
        }
    },
    components: {
        emailCompose,
        emailHamburger
    },
    created() {
        eventBus.$on('noteToMail', (note) => {
            this.openCompose()
        })
    }
}