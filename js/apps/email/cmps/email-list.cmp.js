import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'
import { utilService } from '../../../services/util-service.js'
import { eventBus, EVENT_FILTER_CATEGORY, EVENT_FILTER_EMAIL } from '../../../services/event-bus-service.js'


export default {
    template: `
    <section v-if="emails" class="email-list">
        <ul>
        <email-preview
        v-for= "email in emailsToShow"
        :key="email.id"
        :email="email"
        />
        </ul>
    </section>
        `,

    data() {
        return {
            emails: null,
            filterBy: {
                category: 'isInbox',
                isSortByDate: 'true',
                isRead: null,

            }
        }
    },
    computed: {
        emailsToShow() {
            // return this.emails
            if (!this.filterBy) return this.emails
            return this.emails.filter(email => (email[this.filterBy.category])
                // &&
                // (this.email.isRead !== !this.email.isRead)
            )
        }
    },
    components: {
        emailPreview,
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails);

        eventBus.$on(EVENT_FILTER_EMAIL, (filterBy) => {
            console.log(filterBy);
            this.filterBy.isSortByDate = filterBy.isSortByDate;
            this.filterBy.isRead = filterBy.isRead;
            console.log(this.filterBy);
        })
        eventBus.$on(EVENT_FILTER_CATEGORY, (category) => {
            this.filterBy.category = category;
            console.log(this.filterBy.category);
        })
    }
}