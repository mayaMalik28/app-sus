import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section>
        <h1>Details</h1>
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
            .then(email => console.log(email))

    }
}