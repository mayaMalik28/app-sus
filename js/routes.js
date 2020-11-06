import homePage from './pages/home-page.cmp.js'
import bookApp from './apps/book/pages/book-app.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'
import emailInbox from './apps/email/pages/email-inbox.cmp.js'
import emailSent from './apps/email/pages/email-sent.cmp.js'
import emailStarred from './apps/email/pages/email-starred.cmp.js'
import emailDrafts from './apps/email/pages/email-drafts.cmp.js'

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/email',
        component: emailApp,
        children: [{
                path: 'inbox',
                component: emailInbox
            },
            {
                path: 'sent',
                component: emailSent
            },
            {
                path: 'starred',
                component: emailStarred
            },
            {
                path: 'drafts',
                component: emailDrafts
            },
        ]
    },
    {
        path: '/email/:emailId',
        component: emailDetails,
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/about',
        component: aboutPage
    },

]

export const myRouter = new VueRouter({ routes: myRoutes })