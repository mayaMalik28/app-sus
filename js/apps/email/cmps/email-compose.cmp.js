import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section v-if="email" class="email-compose">
        <form>
        <div class="new-email-header flex justify-space-between">
            <h3>New Massage</h3>
            <button @click="closeCompose">x</button>
        </div>
        <label class="flex">
           <p>To:</p> <input type="text">
        </label>
        <label class="flex">
            <p>Cc:</p><input type="text">
        </label>
        <label class="flex">
            <p>Bcc:</p><input type="text">
        </label>
        <label class="flex">
            <p>Subject</p><input type="text">
        </label>
        <textarea rows="10" cols="50">
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
        }
    },
    created() {
        this.email = emailService.getEmptyEmail();
    }
}