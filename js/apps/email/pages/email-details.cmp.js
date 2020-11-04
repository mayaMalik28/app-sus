import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section v-if="email">
        <h1>Details</h1>
        <h1>{{email.subject}}</h1>
        <pre>{{email}}</pre>
    </section>
        `,
    data() {
        return {
            email: null
        }
    },
    created() {
        const id = this.$route.params.emailId;
        emailService.getEmailById(id)
            .then(email => (this.email = email))

    }
}