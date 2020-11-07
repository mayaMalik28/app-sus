import { emailService } from '../services/email-service.js'
import emailReply from '../cmps/email-reply.cmp.js'
import emailDetailsReply from '../cmps/email-details-reply.cmp.js'
import emailSidebar from '../cmps/email-side-bar.cmp.js'



export default {
    name: 'emailDetails',
    template: `
    <section v-if="email">
    <!-- <section v-if="email" class="email-details flex"> -->
    <!-- <email-sidebar/> -->
    <email-details-reply v-if="email.repliedId" :id="email.repliedId"/>
    <div class="details-container">
        <h3>{{email.subject}}</h3>
        <p>{{ new Date(email.createdAt)}}</p>
        <p v-if="email.isInbox">from: {{email.from}}</p>
        <p v-if="email.isSent">to: {{email.to}}</p>
        <p>{{email.body}}</p>
        <div class="details-btns">
        <i title="Reply" @click="openReply" class="fas fa-reply"></i>
        <i title="Delete" @click="removeEmail" class="fas fa-trash"></i>
        <i :title="starred" @click="AddStar" class="star fa-star" :class="isStar"></i>
        <i :title="read" @click.stop="toggleRead(email.id)" :class="isRead"></i>
        <!-- <button @click="goToApp">Back</button> -->
</div>
        <email-reply v-if="isReply" :emailToAnswer="email" @closeReply="closeReply"/>
    </div>
    </section>
        `,
    data() {
        return {
            email: null,
            isReply: false
        }
    },
    methods: {
        goToApp() {
            this.$router.push(`/email`);

        },
        removeEmail() {
            console.log('remove');
            emailService.removeEmail(this.email.id);
            this.goToApp();

        },
        openReply() {
            this.isReply = true;
        },
        closeReply() {
            this.isReply = false
        },
        AddStar() {
            emailService.toggleStar(this.email.id);
        },
        toggleRead() {
            emailService.toggleRead(this.email.id);
        }
    },
    computed: {
        isStar() {
            return { fas: this.email.isStarred, far: !this.email.isStarred }
        },
        isRead() {
            return { 'fas fa-envelope-open-text': this.email.isRead, 'fas fa-envelope': !this.email.isRead }
        },
        starred() {
            if (this.email.isStarred) return 'Starred'
            else return 'Unstarred'
        },
        read() {
            if (this.email.isRead) return 'Read'
            else return 'Unread'
        }
    },
    created() {
        const id = this.$route.params.emailId;
        emailService.getEmailById(id)
            .then(email => (this.email = email))

    },
    components: {
        emailReply,
        emailDetailsReply,
        emailSidebar
    }
}