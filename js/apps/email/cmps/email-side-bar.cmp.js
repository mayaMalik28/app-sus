import emailCompose from './email-compose.cmp.js'

export default {
    template: `
    <section class="sidebar flex-column">
        <!-- <button @click="filterBy">Inbox</button> -->
        <button>Inbox</button>
        <button>Starred</button>
        <button>Later</button>
        <button>Sent</button>
        <button>Drafts</button>
        <!-- <email-compose/> -->
    </section>
        `,
    // data() {
    //     return {

    //     },
    // },
    methodes: {

    },
    components: {
        emailCompose
    }
}