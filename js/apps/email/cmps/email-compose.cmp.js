import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
    <section v-if="email" class="email-compose">
        <form @submit.prevent>
        <div class="new-email-header flex justify-space-between">
            <h3>New Massage</h3>
            <button @click.prevent.stop="closeCompose">x</button>
        </div>
        <label class="flex">
           <p>To:</p> <input type="text"  v-model="email.to" required>
        </label>
        <label class="flex">
            <p>Cc:</p><input type="text" v-model="email.cc">
        </label>
        <label class="flex">
            <p>Bcc:</p><input type="text" v-model="email.bcc">
        </label>
        <label class="flex">
            <p>Subject</p><input type="text" v-model="email.subject">
        </label>
        <textarea rows="10" cols="50" v-model="email.body">
        </textarea>
        <div class="compose-buttons">
            <button type="button" @click.stop="sendMail">Send</button>
            <button @click.prevent.stop="saveAsDraft">Save as draft</button>
            <button @click.prevent.stop="closeCompose">Trash</button>
        </div>
</form>
    </section>
        `,
    data() {
        return {}
    },
    methods: {
        closeCompose() {
            // this.email = null
            this.$emit('closeCompose');
        },
        sendMail() {
            emailService.sendEmail(this.email)
                .then(this.closeCompose())
        },
        saveAsDraft() {
            emailService.saveEmailAsDraft(this.email)
            this.closeCompose()
        }
    },
    created() {
        if (!this.email) this.email = emailService.getEmptyEmailToSend();
    }
}