import { myRouter } from './routes.js'
import appHeader from './cmps/app-header.cmp.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="app flex-column center">
            <app-header />
            <main class="general-container">
                <router-view></router-view>
            </main>
        </section>
    `,
    components: {
        appHeader
    }
}

const app = new Vue(options);