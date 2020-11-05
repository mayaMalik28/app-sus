import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section v-if="email" class="email-compose">
        <form @submit.prevent="sendMail">
        <div class="new-email-header flex justify-space-between">
            <h3>New Massage</h3>
            <button @click="closeCompose">x</button>
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
            <button>Send</button>
            <button>Save as draft</button>
            <button>Trash</button>
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
        closeCompose() {
            this.$emit('closeCompose');
            // save as draft
        },
        sendMail() {
            emailService.sendEmail(this.email)
                .then(this.closeCompose())
        }
    },
    created() {
        this.email = emailService.getEmptyEmailToSend();
    }
}