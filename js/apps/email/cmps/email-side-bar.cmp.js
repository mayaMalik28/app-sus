import emailCompose from './email-compose.cmp.js'
import { emailService } from '../services/email-service.js'
import { eventBus, EVENT_FILTER_CATEGORY } from '../../../services/event-bus-service.js'

export default {
    template: `
    <section class="sidebar flex-column">
        <button @click="openCompose">compose + </button>
        <button @click="changeFilterBy('isInbox')">Inbox</button>
        <button @click="changeFilterBy('isStarred')">Starred</button>
        <!-- <button @click="changeFilterBy('isLater')">Later</button> -->
        <button @click="changeFilterBy('isSent')">Sent</button>
        <button @click="changeFilterBy('isDraft')">Drafts</button>
        <!-- <email-compose/> -->
        <email-compose v-if="isCompose" @closeCompose="closeCompose"/>
    </section>
        `,
    data() {
        return {
            category: null,
            isCompose: false
        }
    },
    methods: {
        changeFilterBy(by) {
            this.category = by;
            eventBus.$emit(EVENT_FILTER_CATEGORY, this.category)
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