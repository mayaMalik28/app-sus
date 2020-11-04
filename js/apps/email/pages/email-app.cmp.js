import emailFilter from '../cmps/email-filter.cmp.js'
import emailAside from '../cmps/email-side-bar.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'

export default {
    template: `
    <section>
        <div class="flex justify-space-between">
            <email-status/>
            <email-filter/>
        </div>
        <div class="flex">
            <email-aside/>
            <email-list/>
        </div>        
    </section>
        `,
    components: {
        emailFilter,
        emailAside,
        emailList,
        emailStatus,
    }
}