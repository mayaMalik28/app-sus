import { eventBus } from '../../../services/event-bus-service.js';
import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
    <section v-if="email" class="email-compose">
        <form @submit.prevent="closeCompose">
        <div class="new-email-header flex justify-space-between">
            <h3>New Massage</h3>
            <button @click.prevent.stop="closeCompose"><i class="fas fa-times"></i>
</button>
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
        <textarea rows="11" cols="50" v-model="email.body" required>
        </textarea>
        <div class="compose-buttons flex">
            <button title="Send" class="compose-btn" type="submit" @click.stop="sendMail"><i class="fas fa-share-square"></i></button>
            <button title="Save as draft" class="compose-btn" type="button" @click.stop="saveAsDraft"><i class="fab fa-firstdraft"></i></button>
            <button title="Trash" class="compose-btn" type="button" @click.prevent.stop="closeCompose"><i class="fas fa-trash"></i></button>
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
                .then(result => {
                    console.log(result);
                    eventBus.$emit('show-msg', {
                        text: result,
                        type: 'success'
                    })
                })
                .catch(error => {
                    console.log(error);
                    eventBus.$emit('show-msg', {
                        text: error,
                        type: 'error'
                    })
                })

        },
        saveAsDraft() {
            emailService.saveEmailAsDraft(JSON.parse(JSON.stringify(this.email)));
            this.closeCompose();
        }
    },
    created() {
        if (!this.email) this.email = emailService.getEmptyEmailToSend();
        eventBus.$on('noteToMail', (note) => {

        })
    }
}