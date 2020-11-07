import { emailService } from '../services/email-service.js'
import emailReply from './email-reply.cmp.js'


export default {
    name: 'emailDetailsReply',
    props: ['id'],
    template: `
    <section v-if="email">
    <email-details-reply v-if="email.repliedId" :id="email.repliedId"/>
        <h3>{{email.subject}}</h3>
        <p v-if="email.isInbox">from: {{email.from}}</p>
        <p v-if="email.isSent">to: {{email.to}}</p>
        <p>{{email.body}}</p>
        <hr/>
    </section>
        `,
    data() {
        return {
            email: null,
        }
    },
    created() {
        emailService.getEmailById(this.id)
            .then(email => {
                (this.email = email)
                console.log(this.email);
            })

    },
    components: {
        emailReply
    }
}