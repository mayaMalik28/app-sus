import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section v-if="email">
        <h3>{{email.subject}}</h3>
        <p v-if="email.isInbox">from: {{email.from}}</p>
        <p v-if="email.isSent">to: {{email.to}}</p>
        <p>{{email.body}}</p>
        <!-- <pre>{{email}}</pre> -->
        <button>Reply</button>
        <button @click="removeEmail">Trash</button>
        <button>Star</button>
        <button>Later</button>
        <button>Read</button>
        <button @click="goToApp">Go Back</button>
    </section>
        `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        goToApp() {
            this.$router.push(`/email`);

        },
        removeEmail() {
            console.log('remove');
            emailService.removeEmail(this.email.id);
            this.goToApp();

        }
    },
    created() {
        const id = this.$route.params.emailId;
        emailService.getEmailById(id)
            .then(email => (this.email = email))

    }
}