import emailFilter from '../cmps/email-filter.cmp.js'
import emailSidebar from '../cmps/email-side-bar.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
import emailInbox from './email-inbox.cmp.js'
import emailSent from './email-sent.cmp.js'

export default {
    template: `
    <section class="email-app-container flex">
        <!-- <div class="email-app flex justify-space-between">
            <email-status/>
            <email-filter/>
        </div> -->
        <!-- <div class="flex"> -->
        <!-- <nav>
            <router-link to="/email/inbox">Inbox</router-link> | 
            <router-link to="/email/sent">Sent</router-link>
        </nav>
        <router-view></router-view> -->

        <!-- <email-list/> -->
        <!-- </div>         -->
        <!-- <nav class="flex"> -->
        <email-sidebar/>
        <router-view class="email-main"></router-view>
        <!-- </nav> -->
    </section>
        `,
    components: {
        emailFilter,
        emailSidebar,
        emailList,
        emailStatus,
        emailInbox,
        emailSent
    },
    created() {
        this.$router.push(`/email/inbox`);
    }
}