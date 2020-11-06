import { myRouter } from './routes.js'

import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="app flex-column align-center">
            <app-header />
            <main class="general-container">
                <router-view></router-view>
            </main>
            <user-msg />
        </section>
    `,
    components: {
        appHeader,
        userMsg
    }
}

const app = new Vue(options);