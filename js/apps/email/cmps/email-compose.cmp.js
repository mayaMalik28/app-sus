import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section v-if="email" class="email-compose">
        <h3 class="new-email-header">New Massage</h3>
        <label class="flex">
            to: <input type="text">
        </label>
        <label class="flex">
            cc: <input type="text">
        </label>
        <label class="flex">
            bcc: <input type="text">
        </label>
        <label class="flex">
            Subject <input type="text">
        </label>
        <textarea rows="4" cols="50"></textarea>
        <button @click="closeCompose">x</button>
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
        }
    },
    created() {
        this.email = emailService.getEmptyEmail();
    }
}