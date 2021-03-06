import emailFilter from '../cmps/email-filter.cmp.js'
import emailList from '../cmps/email-list.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'

export default {
    template: `
    <section>
        <div class="email-top flex justify-end align-center">
            <email-status/>
            <email-filter/>
        </div>
            <email-list/>      
    </section>
        `,
    components: {
        emailFilter,
        emailList,
        emailStatus,
    }
}