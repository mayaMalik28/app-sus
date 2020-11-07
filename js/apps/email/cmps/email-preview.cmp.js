import longText from '../../../cmps/long-text.cmp.js'
import emailCompose from './email-compose.cmp.js'
import { emailService } from '../services/email-service.js'

export default {
    name: 'enail-preview',
    props: ['email', 'category'],
    template: `
    <li @click="goToDetails" class="email-preview" >
        <div class="flex justify-space-between align-center">
            <i :class="isStar" class="fa-star star" @click.stop="toggleStar"></i>
                    <p v-if="category === 'isInbox'">{{email.from}}</p>
                    <p v-if="category === 'isSent'">to: {{email.to}}</p>
                    <div class="email-preview-content flex center">
                        <p>{{email.subject}} -</p>
                        <long-text :text="email.body" :maxLength="30"/>
                    </div>
                    <p>{{date}}</p>
                    <div>
                        <i @click.stop="toggleRead(email.id)" :class="isRead"></i>
                        <i @click.stop="removrEmail(email.id)" class="fas fa-trash"></i>
                    </div>
            <!-- <button @click.stop="removrEmail(email.id)">Remove</button> -->
        </div>
        <!-- <email-compose @closeCompose="closeCompose" v-if="isCompose" :email="email"/> -->
        <email-compose @closeCompose="closeCompose" v-if="isCompose" :email="JSON.parse(JSON.stringify(email))"/>
        <!-- <pre>{{email}}</pre> -->
    </li>
        `,
    data() {
        return {
            isCompose: false,
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
        },
        toggleStar() {
            emailService.toggleStar(this.email.id);
        },
        toggleRead() {
            emailService.toggleRead(this.email.id);
        }
    },
    computed: {
        date() {
            return (new Date(this.email.createdAt)).toLocaleDateString()
                // TODO: if its today- show hour
                // if less then a week - __ days ago
                // if more then week - __ weeks...
        },
        isStar() {
            return { fas: this.email.isStarred, far: !this.email.isStarred }
        },
        isRead() {
            return { 'read fas fa-envelope-open-text': this.email.isRead, 'fas fa-envelope': !this.email.isRead }
        },
    },
    components: {
        longText,
        emailCompose,
    },
    created() {}
}