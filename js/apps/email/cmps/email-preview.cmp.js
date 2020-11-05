import longText from '../../../cmps/long-text.cmp.js'
import emailCompose from './email-compose.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    name: 'enail-preview',
    props: ['email'],
    template: `
    <li @click="goToDetails" class="email-preview" >
        <div class="flex justify-space-between align-center">
                    <p>{{email.from}}, {{email.to}}</p>
                    <div class="flex center">
                        <p>{{email.subject}} -</p>
                        <long-text :text="email.body" :maxLength="30"/>
                    </div>
                    <p>{{date}}</p>
            <button @click.stop="removrEmail(email.id)">Remove</button>
        </div>
        <email-compose @closeCompose="closeCompose" v-if="isCompose" :email="email"/>
        <!-- <pre>{{email}}</pre> -->
    </li>
        `,
    data() {
        return {
            isCompose: false,
            cuurEmail: null
        }
    },
    methods: {
        removrEmail(id) {
            // console.log(id);
            emailService.removeEmail(id);

        },
        goToDetails() {
            if (!this.email.isDraft) this.$router.push(`/email/${this.email.id}`);
            else {
                this.isCompose = true
                console.log(this.email);
            }
        },
        closeCompose() {
            console.log('close');
            this.isCompose = false
            console.log(this.isCompose);
        }
    },
    computed: {
        date() {
            return (new Date(this.email.createdAt)).toLocaleDateString()
                // TODO: if its today- show hour
                // if less then a week - __ days ago
                // if more then week - __ weeks...
        }
    },
    components: {
        longText,
        emailCompose,
    },
    created() {
        this.cuurEmail = this.email
    }
}