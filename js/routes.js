import homePage from './pages/home-page.cmp.js'
import bookMain from './apps/book/pages/book-main.cmp.js'
import emailMain from './apps/email/pages/email-main.cmp.js'
import keepMain from './apps/keep/pages/keep-main.cmp.js'
import aboutPage from './pages/about-page.cmp.js'

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookMain
    },
    {
        path: '/email',
        component: emailMain
    },
    {
        path: '/keep',
        component: keepMain
    },
    {
        path: '/about',
        component: aboutPage
    },

]

export const myRouter = new VueRouter({ routes: myRoutes })