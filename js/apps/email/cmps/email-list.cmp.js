import emailPreview from './email-preview.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section>
        <ul>
        <email-preview
        v-for= "email in emails"
        :key="email.id"
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