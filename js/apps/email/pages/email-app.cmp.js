import emailSidebar from '../cmps/email-side-bar.cmp.js'
import emailHamburger from '../cmps/email-hamburger.cmp.js'



export default {
    template: `
    <section class="email-app-container">
        <email-hamburger @sideBar="showSideBar"/>
        <email-sidebar :class="show"/>
        <router-view @details-page-in="changeToLight" @details-page-out="changeToDark"class="email-main" :class="isDarkClass"></router-view>
    </section>
        `,
    data() {
        return {
            isDark: true,
            showSaideBar: false

        }
    },
    components: {
        emailSidebar,
        emailHamburger
    },
    methods: {
        changeToLight() {
            this.isDark = false
        },
        changeToDark() {
            console.log('dark');
            this.isDark = true
        },
        showSideBar() {
            this.showSaideBar = !this.showSaideBar
        }
    },
    computed: {
        isDarkClass() {
            return { light: !this.isDark }
        },
        show() {
            return { show: this.showSaideBar }
        }

    },
    created() {
        // this.$router.push(`/email/inbox`);
    }
}