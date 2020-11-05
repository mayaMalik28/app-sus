import { emailService } from '../services/email-service.js'
import emailReply from '../cmps/email-reply.cmp.js'


export default {
    template: `
    <section v-if="email">
        <h3>{{email.subject}}</h3>
        <p v-if="email.isInbox">from: {{email.from}}</p>
        <p v-if="email.isSent">to: {{email.to}}</p>
        <p>{{email.body}}</p>
        <!-- <pre>{{email}}</pre> -->
        <button @click="openReply">Reply</button>
        <button @click="removeEmail">Trash</button>
        <button>Star</button>
        <button>Later</button>
        <button>Read</button>
        <button @click="goToApp">Go Back</button>
        <email-reply v-if="isReply" :emailToAnswer="email"/>

    </section>
        `,
    data() {
        return {
            email: null,
            isReply: false
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

        },
        openReply() {
            this.isReply = true;
        },
        // closeReply() {
        //     this.isReply = false
        // }
    },
    created() {
        const id = this.$route.params.emailId;
        emailService.getEmailById(id)
            .then(email => (this.email = email))

    },
    components: {
        emailReply
    }
}