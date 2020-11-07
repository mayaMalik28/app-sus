import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
    <section v-if="email" class="email-compose">
        <form @submit.prevent="closeCompose">
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
        <!-- <img src="" alt=""> -->
        <textarea rows="10" cols="50" v-model="email.body" required>
        </textarea>
        <div class="compose-buttons">
            <button type="submit" @click.stop="sendMail">Send</button>
            <button type="button" @click.stop="saveAsDraft">Save as draft</button>
            <button type="button" @click.prevent.stop="closeCompose">Trash</button>
            <!-- <button type="button" @click.prevent.stop="AddImg">Add Img</button> -->
        </div>


        
</form>
    </section>
        `,
    data() {
        return {
            // imgUrl: null
        }
    },
    methods: {
        closeCompose() {
            this.$emit('closeCompose');
        },
        sendMail() {
            emailService.sendEmail(JSON.parse(JSON.stringify(this.email)))
                .then(result => console.log(result))
                .catch(error => console.log(error))

        },
        saveAsDraft() {
            emailService.saveEmailAsDraft(JSON.parse(JSON.stringify(this.email)));
            this.closeCompose();
        }
    },
    created() {
        if (!this.email) this.email = emailService.getEmptyEmailToSend();
    }
}