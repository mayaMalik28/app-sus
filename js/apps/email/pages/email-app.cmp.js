import emailFilter from '../cmps/email-filter.cmp.js'
import emailAside from '../cmps/email-side-bar.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'

export default {
    template: `
    <section>
        <email-status/>
        <email-filter/>
        <email-aside/>
        <email-list/>
        
    </section>
        `,
    components: {
        emailFilter,
        emailAside,
        emailList,
        emailStatus,
    }
}