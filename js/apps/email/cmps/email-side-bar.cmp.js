import emailCompose from './email-compose.cmp.js'
import { emailService } from '../services/email-service.js'
import { eventBus, EVENT_FILTER_CATEGORY } from '../../../services/event-bus-service.js'

export default {
    template: `
    <section class="sidebar flex-column">
        <button @click="changeFilterBy('isInbox')">Inbox</button>
        <button @click="changeFilterBy('isStarred')">Starred</button>
        <button @click="changeFilterBy('isLater')">Later</button>
        <button @click="changeFilterBy('isSent')">Sent</button>
        <button>Drafts</button>
        <!-- <email-compose/> -->
    </section>
        `,
    data() {
        return {
            category: null
        }
    },
    methods: {
        changeFilterBy(by) {
            this.filterBy = by;
            eventBus.$emit(EVENT_FILTER_CATEGORY, this.filterBy)
        }
    },
    components: {
        emailCompose
    }
}