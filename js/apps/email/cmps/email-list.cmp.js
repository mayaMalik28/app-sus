import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'
import { utilService } from '../../../services/util-service.js'
import { eventBus, EVENT_FILTER_CATEGORY, EVENT_FILTER_EMAIL } from '../../../services/event-bus-service.js'
// import emailFilter from '../cmps/email-filter.cmp.js'
// import emailStatus from '../cmps/email-status.cmp.js'




export default {
    template: `
    <section v-if="emails" class="email-list">
    <!-- <div class="email-app flex justify-space-between">
            <email-status/>
            <email-filter/>
        </div> -->
        <ul>
        <email-preview
        v-for= "email in emailsToShow"
        :key="email.id"
        :email="email"
        :category="filterBy.category"
        />
        </ul>
    </section>
        `,

    data() {
        return {
            emails: null,
            filterBy: {
                // category: 'isInbox',
                isSortByText: false,
                isRead: null,

            }
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) var emails = this.emails
            var emails = this.emails.filter(email => (email[this.filterBy.category]) &&
                ((!email.isRead) != this.filterBy.isRead)
            );
            if (this.filterBy.isSortByText) emails.sort((a, b) => (a.text > b.text) ? 1 : -1)
            else emails.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : (a.createdAt < b.createdAt) ? -1 : 0)
                // maybe move to service
            return emails
        }
    },
    components: {
        emailPreview,
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails);

        this.filterBy.category = emailService.getCurrCategory()
        console.log(this.filterBy.category);

        // should it be with promiss?


        eventBus.$on(EVENT_FILTER_EMAIL, (filterBy) => {
                this.filterBy.isSortByText = filterBy.isSortByText;
                this.filterBy.isRead = filterBy.isRead;
                console.log('isSortByText', this.filterBy.isSortByText);
            })
            // eventBus.$on(EVENT_FILTER_CATEGORY, (category) => {
            //     this.filterBy.category = category;
            //     // console.log(this.filterBy.category);
            // })

    }
}