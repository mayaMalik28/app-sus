import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section v-if="countEmails" class="email-status">
        <p>you read {{countRead}} out of {{countEmails}} emails</p>
    </section>
        `,
    data() {
        return {
            countRead: null,
            countEmails: null
        }
    },
    created() {
        this.countEmails = emailService.countEmails()
        this.countRead = emailService.countReadEmails()
    }
}