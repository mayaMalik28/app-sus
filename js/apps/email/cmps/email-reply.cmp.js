import { emailService } from '../services/email-service.js'

export default {
    props: ['emailToAnswer'],
    template: `
    <section v-if="email" class="email-reply">
        <form @submit.prevent="closeReply">
        <label class="flex">
           <p>To: {{email.to}}</p>
        </label>
        <textarea rows="10" cols="80" v-model="email.body" required>
        </textarea>
        <div class="compose-buttons flex">
            <button title="Send" class="compose-btn" type="submit" @click.stop="sendMail"><i class="fas fa-share-square"></i></button>
            <button title="Save as draft" class="compose-btn" type="button" @click.stop="saveAsDraft"><i class="fab fa-firstdraft"></i></button>
            <button title="Trash" class="compose-btn" type="button" @click.prevent.stop="closeCompose"><i class="fas fa-trash"></i></button>
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