import { emailService } from '../services/email-service.js'

export default {
    props: ['emailToAnswer'],
    template: `
    <section v-if="email" class="email-reply">
        <form @submit.prevent="closeReply">
        <label class="flex">
           <p>To: {{email.to}}</p>
        </label>
        <textarea rows="10" cols="50" v-model="email.body" required>
        </textarea>
        <div class="compose-buttons">
            <button type="submit" @click.stop="sendMail">Send</button>
            <button type="submit" @click.stop="saveAsDraft">Save as draft</button>
            <button @click.prevent.stop="closeReply">Trash</button>
        </div>
</form>
    </section>
        `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        closeReply() {
            // לעשות שזה ייסגר בלי לצאת לגמרי
            this.$emit('closeReply')
        },
        sendMail() {
            emailService.sendEmail(this.email)
        },
        saveAsDraft() {
            emailService.saveEmailAsDraft(this.email)
                // this.closeCompose()
        }

    },
    computed: {},
    created() {
        this.email = emailService.getEmptyEmailToSend();
        this.email.to = this.emailToAnswer.from;
        this.email.subject = 'Re: ' + this.emailToAnswer.subject;
        this.email.repliedId = this.emailToAnswer.id;

    }
}