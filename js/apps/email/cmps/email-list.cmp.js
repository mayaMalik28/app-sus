import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section>
        <h1>List</h1>
        <ul>
        <email-preview
        v-for= "email in emails"
        :key="email.sentAt"
        :email="email"
        />
        </ul>
    </section>
        `,

    data() {
        return {
            emails: null
        }
    },
    components: {
        emailPreview,
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
    }
}