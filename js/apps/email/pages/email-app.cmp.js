import emailFilter from '../cmps/email-filter.cmp.js'
import emailSidebar from '../cmps/email-side-bar.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'

export default {
    template: `
    <section>
        <div ref="category"  class="email-app flex justify-space-between">
            <email-status/>
            <email-filter/>
        </div>
        <div class="flex">
            <email-sidebar/>
            <email-list/>
        </div>        
    </section>
        `,
    components: {
        emailFilter,
        emailSidebar,
        emailList,
        emailStatus,
    }
}