import { emailService } from '../services/email-service.js'
import emailReply from './email-reply.cmp.js'


export default {
    name: 'emailDetailsReply',
    props: ['id'],
    template: `
    <section v-if="email" class="details-container">
    <email-details-reply v-if="email.repliedId" :id="email.repliedId"/>
        <h3>{{email.subject}}</h3>
        <p class="small-font">{{date}}</p>
        <p class="small-font" v-if="email.isInbox">from: {{email.from}}</p>
        <p class="small-font" v-if="email.isSent">to: {{email.to}}</p>
        <p>{{email.body}}</p>
        <hr/>
    </section>
        `,
    data() {
        return {
            email: null,
        }
    },
    computed: {
        date() {
            var date = new Date(this.email.createdAt).toString();
            const idx = date.indexOf('G');
            return date.substr(0, idx);
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