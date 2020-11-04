import { myRouter } from './routes.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="app">
            <main class="">
                <router-view></router-view>
            </main>
        </section>
    `,
    components: {
        // appHeader
    }
}

const app = new Vue(options);